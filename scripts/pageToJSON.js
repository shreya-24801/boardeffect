const fs = require("fs");
const xml2js = require("xml2js");

const xmlFilePath = "files/page.xml"; // Path to your XML file
const outputFilePath = "files/output-us.json"; // Where to write the JSON

fs.readFile(xmlFilePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading XML file:", err);
    return;
  }

  const parser = new xml2js.Parser({ explicitArray: false, mergeAttrs: true });

  parser.parseString(data, (err, result) => {
    if (err) {
      console.error("Error parsing XML:", err);
      return;
    }

    fs.writeFile(outputFilePath, JSON.stringify(result, null, 2), (err) => {
      if (err) {
        console.error("Error writing JSON file:", err);
      } else {
        console.log("Successfully converted XML to JSON:", outputFilePath);
      }
    });
  });
});
