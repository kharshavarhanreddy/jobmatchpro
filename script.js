document.getElementById('matchBtn').addEventListener('click', function() {
  const resumeText = document.getElementById('resume').value.trim();
  const resultsDiv = document.getElementById('results');

  if (!resumeText) {
    resultsDiv.innerHTML = "<p>Please enter your resume text to match jobs.</p>";
    return;
  }

  // Dummy job matching logic for demo purposes
  const jobs = [
    "Software Engineer at TechCorp",
    "Frontend Developer at WebWorks",
    "Data Analyst at DataMind",
    "Junior Developer at CodeBase"
  ];

  // Randomly select 2 jobs as matches
  const matchedJobs = jobs.sort(() => 0.5 - Math.random()).slice(0, 2);

  resultsDiv.innerHTML = "<h3>Matching Jobs:</h3><ul>" +
    matchedJobs.map(job => `<li>${job}</li>`).join('') +
    "</ul>";
});
