import { NextResponse } from "next/server";
import { google } from "googleapis";

// Configuration de l'API Google Sheets
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = "Newsletter";

// Fonction pour vérifier et créer la feuille si nécessaire
async function ensureSheetExists() {
  try {
    // Récupérer les informations de la feuille de calcul
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
      fields: "sheets.properties",
    });

    console.log("Feuilles existantes:", spreadsheet.data.sheets?.map(s => s.properties?.title));

    // Vérifier si la feuille existe
    const sheetExists = spreadsheet.data.sheets?.some(
      (sheet) => sheet.properties?.title === SHEET_NAME
    );

    if (!sheetExists) {
      console.log("Création de la feuille Newsletter...");
      // Créer la nouvelle feuille
      const createResponse = await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: SHEET_NAME,
                  gridProperties: {
                    rowCount: 1000,
                    columnCount: 2,
                  },
                },
              },
            },
          ],
        },
      });

      console.log("Réponse création feuille:", createResponse.status);

      // Attendre un peu pour s'assurer que la feuille est créée
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Ajouter les en-têtes
      const updateResponse = await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:B1`,
        valueInputOption: "RAW",
        requestBody: {
          values: [["Email", "Date d'inscription"]],
        },
      });

      console.log("Réponse mise à jour en-têtes:", updateResponse.status);
      console.log("Feuille Newsletter créée avec succès");
    } else {
      console.log("La feuille Newsletter existe déjà");
    }
  } catch (error) {
    console.error("Erreur lors de la vérification/création de la feuille:", error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    // Vérification des variables d'environnement
    console.log("Vérification des variables d'environnement:");
    console.log("GOOGLE_CLIENT_EMAIL:", process.env.GOOGLE_CLIENT_EMAIL ? "✅ Présent" : "❌ Manquant");
    console.log("GOOGLE_SHEET_ID:", process.env.GOOGLE_SHEET_ID ? "✅ Présent" : "❌ Manquant");
    console.log("GOOGLE_PRIVATE_KEY:", process.env.GOOGLE_PRIVATE_KEY ? "✅ Présent" : "❌ Manquant");

    const { email } = await request.json();
    console.log("Email reçu:", email);

    // Validation basique
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // S'assurer que la feuille existe
    await ensureSheetExists();

    // Ajouter l'email à Google Sheets avec une plage plus simple
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1`,  // Utiliser une plage plus simple
      valueInputOption: "RAW",    // Utiliser RAW au lieu de USER_ENTERED
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[email, new Date().toISOString()]],
      },
    });

    console.log("Réponse de l'ajout:", appendResponse.status);
    console.log("Données ajoutées:", appendResponse.data);

    return NextResponse.json(
      { message: "Inscription réussie !" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erreur détaillée lors de l'inscription:", error);
    if (error.response?.data) {
      console.error("Détails de l'erreur:", error.response.data);
    }
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur lors de l'inscription" },
      { status: 500 }
    );
  }
} 