const fs = require("fs");

const data = require("./parsed-home-content.json");

function renderBlock(block) {
  console.log(block);
  
  switch (block._type) {
    case "heading":
      return `<${block.tag}>${block.text}</${block.tag}>`;

    case "text":
      return `<p style="text-align: ${block.align || "left"};">${block.content}</p>`;

    case "button":
      return `<a href="${block.url}" style="display: inline-block; text-align: ${block.align}; padding: 10px 20px; background: #194f7d; color: #fff; text-decoration: none;">${block.opts}</a>`;

    default:
      return "";
  }
}

const html = data.map(renderBlock).join("\n\n");

fs.writeFileSync("converted-home.html", html);
console.log("✅ HTML output saved to converted-home.html");
