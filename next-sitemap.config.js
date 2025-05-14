/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://badxista.vercel.app", // 🔁 Remplace par ton domaine final si besoin
  generateRobotsTxt: true, // ✅ Génère automatiquement robots.txt
  changefreq: "weekly", // 📅 Fréquence de mise à jour des pages (peut être 'daily', 'monthly'…)
  priority: 0.7, // ⭐ Priorité par défaut des pages (entre 0.0 et 1.0)
  sitemapSize: 5000, // ⚖️ Divise le sitemap si plus de 5000 URLs (inutile ici mais prêt pour l’avenir)
  exclude: ["/admin/**", "/dashboard/**"], // 🚫 Exclut certaines pages si besoin
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://badxista.vercel.app/sitemap.xml", // Tu peux ajouter d'autres sitemaps si nécessaire
    ],
  },
};
