import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "home-v2.html"), "utf8");

const SECTION_MAP = [
  { test: /section hero-v2/, file: "HeroSection.jsx", export: "HeroSection" },
  { test: /features-v2-grid/, file: "FeaturesSection.jsx", export: "FeaturesSection" },
  { test: /tabs-wrapper/, file: "ProcessSection.jsx", export: "ProcessSection" },
  { test: /integrations-square-icons-container/, file: "IntegrationsSection.jsx", export: "IntegrationsSection" },
  { test: /cases-card-v2/, file: "UseCasesSection.jsx", export: "UseCasesSection" },
  { test: /cta-v2-grid/, file: "CtaSection.jsx", export: "CtaSection" },
  { test: /lightbox-wrapper/, file: "AboutVideoSection.jsx", export: "AboutVideoSection" },
  { test: /testimonial-marquee-row/, file: "TestimonialsSection.jsx", export: "TestimonialsSection" },
  { test: /blog-v2/, file: "BlogSection.jsx", export: "BlogSection" },
];

function extractBetween(startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  if (start === -1 || end === -1) throw new Error(`Markers not found: ${startMarker}`);
  return html.slice(start, end);
}

function htmlToJsx(fragment) {
  let jsx = fragment;

  jsx = jsx.replace(/<!--[\s\S]*?-->/g, "");
  jsx = jsx.replace(/<script[\s\S]*?<\/script>/gi, "");
  jsx = jsx.replace(/\sstyle="[^"]*"/gi, "");
  jsx = jsx.replace(/\sstyle='[^']*'/gi, "");

  jsx = jsx.replace(/\bclass=/g, "className=");
  jsx = jsx.replace(/\bfor=/g, "htmlFor=");
  jsx = jsx.replace(/\btabindex=/g, "tabIndex=");
  jsx = jsx.replace(/\breadonly=/g, "readOnly=");
  jsx = jsx.replace(/\bmaxlength=/g, "maxLength=");
  jsx = jsx.replace(/\bcolspan=/g, "colSpan=");
  jsx = jsx.replace(/\browspan=/g, "rowSpan=");
  jsx = jsx.replace(/\bautocomplete=/g, "autoComplete=");
  jsx = jsx.replace(/\bcrossorigin=/g, "crossOrigin=");
  jsx = jsx.replace(/\bsrcset=/g, "srcSet=");
  jsx = jsx.replace(/\ballowfullscreen/g, "allowFullScreen");
  jsx = jsx.replace(/\bstroke-width=/g, "strokeWidth=");
  jsx = jsx.replace(/\bstroke-linecap=/g, "strokeLinecap=");
  jsx = jsx.replace(/\bstroke-linejoin=/g, "strokeLinejoin=");
  jsx = jsx.replace(/\bfill-rule=/g, "fillRule=");
  jsx = jsx.replace(/\bclip-rule=/g, "clipRule=");
  jsx = jsx.replace(/\bviewbox=/gi, "viewBox=");

  jsx = jsx.replace(/&amp;/g, "&");
  jsx = jsx.replace(/<br>/gi, "<br />");
  jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/gi, "<img$1 />");
  jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/gi, "<input$1 />");

  jsx = jsx.replace(/\s(required|checked|disabled|selected|multiple|readOnly)=""/g, " $1");
  jsx = jsx.replace(/\sdata-w-id="[^"]*"/g, "");
  jsx = jsx.replace(/\sdata-wf--[^=]*="[^"]*"/g, "");
  jsx = jsx.replace(/\sdata-wf-page-id="[^"]*"/g, "");
  jsx = jsx.replace(/\sdata-wf-element-id="[^"]*"/g, "");
  jsx = jsx.replace(/\sdata-easing[^=]*="[^"]*"/g, "");
  jsx = jsx.replace(/\sdata-duration-in="[^"]*"/g, "");
  jsx = jsx.replace(/\sdata-duration-out="[^"]*"/g, "");
  jsx = jsx.replace(/\sdata-hover="[^"]*"/g, "");
  jsx = jsx.replace(/\sdata-delay="[^"]*"/g, "");
  jsx = jsx.replace(/\sdata-wait="[^"]*"/g, "");
  jsx = jsx.replace(/\sdata-name="[^"]*"/g, "");
  jsx = jsx.replace(/\saria-current="page"/g, "");

  return jsx.trim();
}

function splitTopLevelSections(sectionHtml) {
  const sections = [];
  const regex = /<section class="section[^"]*">/g;
  const starts = [];
  let match;
  while ((match = regex.exec(sectionHtml)) !== null) {
    starts.push(match.index);
  }
  for (let i = 0; i < starts.length; i++) {
    sections.push(sectionHtml.slice(starts[i], starts[i + 1] ?? sectionHtml.length));
  }
  return sections;
}

function wrapComponent(name, body) {
  return `export default function ${name}() {\n  return (\n${body
    .split("\n")
    .map((line) => (line ? `    ${line}` : ""))
    .join("\n")}\n  );\n}\n`;
}

function identifySection(sectionHtml) {
  return SECTION_MAP.find((item) => item.test.test(sectionHtml));
}

const sectionsRaw = extractBetween('<section class="section hero-v2">', '<footer class="footer-wrapper">');
const footerRaw = extractBetween('<footer class="footer-wrapper">', "</footer>") + "</footer>";

const sectionsDir = path.join(root, "src", "components", "home", "sections");
const layoutDir = path.join(root, "src", "components", "layout");
fs.mkdirSync(sectionsDir, { recursive: true });
fs.mkdirSync(path.join(layoutDir, "Footer"), { recursive: true });

const sections = splitTopLevelSections(sectionsRaw);
const exports = [];

sections.forEach((sectionHtml) => {
  const meta = identifySection(sectionHtml);
  if (!meta) {
    console.warn("Unmapped section:", sectionHtml.slice(0, 80));
    return;
  }
  const jsx = htmlToJsx(sectionHtml);
  fs.writeFileSync(path.join(sectionsDir, meta.file), wrapComponent(meta.export, jsx));
  exports.push({ file: meta.file.replace(".jsx", ""), export: meta.export });
});

const indexContent = `${exports
  .map(({ file, export: name }) => `export { default as ${name} } from "./${file}";`)
  .join("\n")}\n`;
fs.writeFileSync(path.join(sectionsDir, "index.js"), indexContent);

const footerJsx = htmlToJsx(footerRaw);
fs.writeFileSync(
  path.join(layoutDir, "Footer", "index.jsx"),
  wrapComponent("Footer", footerJsx)
);

console.log(`Generated ${exports.length} sections in ${sectionsDir}`);
console.log(`Generated Footer in ${layoutDir}/Footer`);
