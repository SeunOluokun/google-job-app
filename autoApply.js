const puppeteer = require("puppeteer");

const autoApply = async (applyLink) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log("Opening job application page...");
    await page.goto(applyLink, { waitUntil: "networkidle2" });

    // Fill application form
    await page.type("#first_name", "Oluwaseun");
    await page.type("#last_name", "Oluokun");
    await page.type("#email", "johndoe@example.com");
    await page.type("#phone", "1234567890");

    // Upload Resume
    const resumeInput = await page.$("#resume_upload");
    await resumeInput.uploadFile("cv.pdf");

    // Submit Application
    await page.click("#submit_application");

    console.log("Application submitted!");
    await browser.close();
  } catch (error) {
    console.error("Error applying for job:", error);
    await browser.close();
  }
};

// Export the function
module.exports = autoApply;
