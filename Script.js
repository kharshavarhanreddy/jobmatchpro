const btn = document.getElementById("matchBtn");
const results = document.getElementById("results");

btn.addEventListener("click", async () => {
  const resume = document.getElementById("resume").value.trim();

  if (!resume) {
    results.innerHTML = "<p>Please paste your resume.</p>";
    return;
  }

  results.innerHTML = "Searching jobs...";

  try {
    const res = await fetch("https://jobmatchpro-backend.onrender.com/api/jobs");
    const jobs = await res.json();

    if (!jobs.length) {
      results.innerHTML = "<p>No jobs found.</p>";
      return;
    }

    results.innerHTML = jobs.map(job => `
      <div class="job">
        <div>${job.title} – ${job.company}</div>
        <a href="${job.link}" target="_blank">View Job</a>
      </div>
    `).join("");

  } catch (err) {
    results.innerHTML = "<p>Error connecting to server.</p>";
  }
});
