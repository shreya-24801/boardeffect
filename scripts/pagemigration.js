const fs = require("fs");
const { add, parse } = require("shortcode-parser");

// Flatten layout wrappers
add("vc_row", (_, content) => content || "");
add("vc_column", (_, content) => content || "");

// Custom heading
add("vc_custom_heading", (_, content) => {
  const text = typeof content.text === "string" ? content.text : "";
  const tag = content.font_container?.split("|")[0]?.split(":")[1] || "h2";
  return JSON.stringify({ _type: "heading", text, tag });
});

// Text block
add("vc_column_text", (text, content) => {
  if(text){
    return JSON.stringify({ _type: "text", content: text, align: content.alignment || "left" });
  }
});

// Button
add("vcex_button", (opts, content) => {
  return JSON.stringify({
    _type: "button",
    opts,
    url: content.url || "",
    align: content.align || "left"
  });
});

add("vcex_image_carousel", (opts, content) => {
  console.log("**************", opts, content);
});

// Bullet list
add("vcex_bullets", (_, content) => {
  if(_){
  const items = [];
  const listItems = String(content || "").match(/<li[^>]*>(.*?)<\/li>/g) || [];
  for (const li of listItems) {
    const clean = li.replace(/<[^>]+>/g, "").trim();
    if (clean) items.push(clean);
  }
  return JSON.stringify({ _type: "bullets", items });
}
});

// Image
add("vc_single_image", (opts) =>
  JSON.stringify({
    _type: "image",
    image_id: opts.image || "",
    align: opts.alignment || "center"
  })
);

// Teaser cards
add("vcex_teaser", (opts) =>
  JSON.stringify({
    _type: "teaser",
    title: opts.heading || "",
    image: opts.image || "",
    url: decodeURIComponent(opts.url?.split("url:")[1]?.split("|")[0] || "")
  })
);

add("", (content) => {
  console.log("Unknown shortcode:", content);
  
});

// ------------------------------
// Main execution
// ------------------------------
fs.readFile("files/output.json", "utf-8", (err, data) => {
  if (err) return console.error("❌ Failed to read output.json:", err);

  try {
    const jsonData = JSON.parse(data);
    const items = jsonData.rss.channel.item;
    const homePage = items.find((item) => item.title === "HOME");

    if (!homePage) return console.error("❌ 'HOME' page not found.");

    const raw = homePage["content:encoded"];

    // Parse shortcodes
    const parsedRaw = parse(raw);

    // Extract only valid JSON blocks from the flattened string
    const blocks = [];
    const regex = /{[^}]+}/g;

    let match;
    while ((match = regex.exec(parsedRaw)) !== null) {
      try {
        blocks.push(JSON.parse(match[0]));
      } catch (e) {
        console.warn("⚠️ Skipping invalid block:", match[0]);
      }
    }

    fs.writeFileSync("parsed-home-content.json", JSON.stringify(blocks, null, 2));
    console.log("✅ Parsed content saved to parsed-home-content.json");

  } catch (e) {
    console.error("❌ JSON parsing failed:", e);
  }
});
