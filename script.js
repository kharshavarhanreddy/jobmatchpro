document.getElementById("matchBtn").addEventListener("click", () => {
  const resume = document.getElementById("resume").value.trim();
  const results = document.getElementById("results");

  if (!resume) {
    results.innerHTML = "<p>Please paste your resume first.</p>";
    return;
  }

  const jobs = [
    "Junior Software Developer",
    "Frontend Developer",
    "Web Developer Intern",
    "IT Support Engineer",
    "Data Analyst Trainee"
  ];

  const selected = jobs.sort(() => 0.5 - Math.random()).slice(0, 3);

  results.innerHTML = `
    <h3>Matched Jobs</h3>
    <ul>
      ${selected.map(job => `<li>${job}</li>`).join("")}
    </ul>
  `;
});
