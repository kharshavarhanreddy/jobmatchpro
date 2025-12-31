document.getElementById("matchBtn").addEventListener("click", async () => {
  const resume = document.getElementById("resume").value.trim();
  const results = document.getElementById("results");

  if (!resume) {
    results.innerHTML = "<p>Please paste your resume first.</p>";
    return;
  }

  results.innerHTML = "<p>🔍 AI is analyzing your resume and searching jobs...</p>";

  try {
    const response = await fetch(
      "https://jobmatchpro-backend.onrender.com/api/match-jobs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ resume })
      }
    );

    if (!response.ok) {
      throw new Error("Backend error");
    }

    const data = await response.json();

    if (!data.jobs || data.jobs.length === 0) {
      results.innerHTML = "<p>No jobs found. Try a different resume.</p>";
      return;
    }

    results.innerHTML = `
      <h3>Matched Jobs</h3>
      <ul>
        ${data.jobs
          .map(
            job => `
          <li>
            <strong>${job.title}</strong><br>
            ${job.company}<br>
            <a href="${job.url}" target="_blank">Apply Now</a>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  } catch (error) {
    results.innerHTML =
      "<p>❌ Error connecting to AI job server. Try again.</p>";
  }
});
