// Runs after the client + SSR builds. Renders every known route to a real
// HTML file (with its own <title>/description/Open Graph tags) so crawlers
// (and anyone sharing a link) see full content immediately — no waiting on
// client-side JavaScript.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPublic = path.join(__dirname, "dist/public");
const distServer = path.join(__dirname, "dist/server");
const siteUrl = "https://www.ancreative.store";

const { render } = await import(path.join(distServer, "entry-server.js"));

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const routes = [
  {
    path: "/",
    title: "A&N Creative | استوديو إبداعي رقمي - خدمات ومنتجات رقمية احترافية",
    description:
      "استوديو إبداعي رقمي متخصص يقدّم خدمات إبداعية راقية ومنتجات رقمية عالية الجودة للعلامات التجارية الحديثة.",
  },
  {
    path: "/store",
    title: "المتجر | A&N Creative",
    description:
      "منتجات رقمية احترافية: دليل تأسيس متجر سلة الشامل ودليل المنتجات الرابحة، كل ما تحتاجه لبناء متجر إلكتروني ناجح.",
  },
  {
    path: "/blog",
    title: "المدونة | A&N Creative",
    description:
      "مقالات متخصصة في التجارة الإلكترونية، تصميم المتاجر، وتحسين محركات البحث لأصحاب المتاجر الإلكترونية.",
  },
  {
    path: "/blog/smart-foundation",
    title: "التأسيس الذكي – هندسة المتجر من الصفر | A&N Creative",
    description:
      "قبل أن تضيف أول منتج، عليك أن تبني الأرضية الصحيحة. اكتشف كيف تُهيّئ متجرك باحترافية من أول يوم.",
  },
  {
    path: "/blog/ux-psychology",
    title: "سيكولوجية الواجهة – كيف تبني متجراً يبيع؟ | A&N Creative",
    description:
      "في أقل من 50 ميلي ثانية يحكم الزائر على متجرك. تعلّم كيف تستخدم علم النفس البصري لتحويل الزوار إلى مشترين.",
  },
  {
    path: "/blog/product-engineering",
    title: "هندسة المنتجات – فن الوصف وترتيب التصنيفات | A&N Creative",
    description:
      "صفحة المنتج هي مندوب مبيعاتك الصامت. اكتشف صيغة الوصف الذي يبيع، وكيف ترتّب منتجاتك لرفع متوسط الطلب.",
  },
  {
    path: "/blog/tech-arsenal",
    title: "الترسانة التقنية – الربط الذكي وعصر الـ Data | A&N Creative",
    description:
      "المتجر الذي يفهم أرقامه يتفوّق دائماً على الذي يعمل بالحدس. دليلك لربط Analytics وPixel وواتساب وشحن احترافي.",
  },
  {
    path: "/blog/sales-machine",
    title: "ماكينة المبيعات – الكوبونات والسلات المتروكة | A&N Creative",
    description:
      "٧٠٪ من المتسوقين يتركون سلّتهم دون شراء. تعلّم كيف تستردّ هذه الأموال بنظام استعادة مُثبت وكوبونات تُحرّك القرار.",
  },
  {
    path: "/blog/absolute-loyalty",
    title: "الولاء المطلق – خدمة العملاء والتحويل لمسوّقين | A&N Creative",
    description:
      "العميل الراضي يشتري مرة. العميل المتعلّق بعلامتك يشتري دائماً ويُحضر معه أصدقاءه. تعلّم كيف تبني هذا الولاء.",
  },
  {
    path: "/privacy-policy",
    title: "سياسة الخصوصية | A&N Creative",
    description: "سياسة الخصوصية الخاصة بموقع A&N Creative وكيفية التعامل مع بيانات الزوار والعملاء.",
  },
  {
    path: "/terms-of-service",
    title: "الشروط والأحكام | A&N Creative",
    description: "الشروط والأحكام الخاصة باستخدام موقع ومنتجات A&N Creative.",
  },
  {
    path: "/refund-policy",
    title: "سياسة الاسترجاع | A&N Creative",
    description: "سياسة الاسترجاع والاستبدال الخاصة بمنتجات A&N Creative الرقمية.",
  },
];

const template = fs.readFileSync(path.join(distPublic, "index.html"), "utf-8");

for (const route of routes) {
  const appHtml = render(route.path);
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonical = siteUrl + (route.path === "/" ? "" : route.path);

  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

  const headExtras = `
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteUrl}/opengraph.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${siteUrl}/opengraph.jpg" />
  </head>`;
  html = html.replace("</head>", headExtras);

  const outDir = route.path === "/" ? distPublic : path.join(distPublic, route.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
  console.log("Prerendered:", route.path);
}

// robots.txt + sitemap.xml, generated from the same route list.
fs.writeFileSync(
  path.join(distPublic, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  "utf-8",
);

const urlEntries = routes
  .map(
    (r) =>
      `  <url>\n    <loc>${siteUrl}${r.path === "/" ? "" : r.path}</loc>\n  </url>`,
  )
  .join("\n");
fs.writeFileSync(
  path.join(distPublic, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`,
  "utf-8",
);

console.log("robots.txt and sitemap.xml written.");
