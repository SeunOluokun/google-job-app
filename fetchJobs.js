require("dotenv").config();
const axios = require("axios");

const fetchJobs = async (query, location) => {
  const API_KEY = process.env.SERPAPI_KEY;
  const URL = "https://serpapi.com/search";

  try {
    const response = await axios.get(URL, {
      params: { engine: "google_jobs", q: query, location, api_key: API_KEY },
    });

    return response.data.jobs_results || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

// Export the function
module.exports = fetchJobs;
