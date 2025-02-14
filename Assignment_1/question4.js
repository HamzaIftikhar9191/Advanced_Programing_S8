function addWorkingDays(date, days) {
  let currentDate = new Date(date);
  while (days > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      days--;
    }
  }
  return currentDate.toISOString().split("T")[0];
}

function processCandidates(candidates, requiredSkills) {
  const selectedCandidates = candidates
    .filter((candidate) => {
      return (
        candidate.gpa >= 3.0 &&
        candidate.skills.some((skill) => requiredSkills.includes(skill))
      );
    })
    .map((candidate) => {
      candidate.testDate = addWorkingDays(candidate.applyDate, 5);
      return candidate;
    });

  const result = selectedCandidates.reduce((acc, candidate) => {
    acc[candidate.name] = candidate.testDate;
    return acc;
  }, {});

  return result;
}

const candidates = [
  {
    name: "John Doe",
    gpa: 3.5,
    skills: ["JavaScript", "Node.js", "React"],
    applyDate: "2025-02-10",
  },
  {
    name: "Jane Smith",
    gpa: 2.8,
    skills: ["Java", "Spring"],
    applyDate: "2025-02-11",
  },
  {
    name: "Alice Johnson",
    gpa: 3.2,
    skills: ["Python", "Django", "React"],
    applyDate: "2025-02-09",
  },
  {
    name: "Bob Brown",
    gpa: 3.8,
    skills: ["JavaScript", "React"],
    applyDate: "2025-02-12",
  },
];

const requiredSkills = ["JavaScript", "React", "Node.js"];

const processedCandidates = processCandidates(candidates, requiredSkills);

console.log(processedCandidates);
