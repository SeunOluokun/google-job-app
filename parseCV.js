const fs = require("fs");
const pdfParse = require("pdf-parse");

const parseCV = async (cvPath) => {
  const dataBuffer = fs.readFileSync(cvPath);
  const data = await pdfParse(dataBuffer);
  return data.text;
};

// Export the function
module.exports = parseCV;
