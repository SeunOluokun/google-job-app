require("dotenv").config();
const fetchJobs = require("./fetchJobs");
const parseCV = require("./parseCV");
const matchJobs = require("./matchJobs");
const autoApply = require("./autoApply");

const runJobAutomation = async () => {
  console.log("Fetching jobs...");
  const jobs = await fetchJobs("Software Engineer", "Remote");

  console.log("\nParsing CV...");
  const cvText = await parseCV("cv.pdf");

  console.log("\nMatching CV with jobs...");
  const rankedJobs = matchJobs(cvText, jobs);

  console.log("\nTop Matching Job:");
  if (rankedJobs.length > 0) {
    const topJob = rankedJobs[0];
    console.log(`Applying for: ${topJob.title} at ${topJob.company_name}`);
    await autoApply(topJob.apply_options?.[0]?.link);
  } else {
    console.log("No matching jobs found.");
  }
};

runJobAutomation();
