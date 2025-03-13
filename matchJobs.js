const natural = require("natural");

const matchJobs = (cvText, jobs) => {
  const tokenizer = new natural.WordTokenizer();
  const cvWords = tokenizer.tokenize(cvText.toLowerCase());

  const rankedJobs = jobs.map((job) => {
    const jobWords = tokenizer.tokenize(job.description.toLowerCase());
    const commonWords = jobWords.filter((word) => cvWords.includes(word));
    return { ...job, score: commonWords.length };
  });

  return rankedJobs.sort((a, b) => b.score - a.score);
};

// Export the function
module.exports = matchJobs;
matchJobs.js
