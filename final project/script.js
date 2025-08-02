const employees = [
  { id: 1, name: "Teja Sree", department: "IT", role: "Frontend Developer", status: "Present" },
  { id: 2, name: "Arun", department: "HR", role: "Manager", status: "Leave" },
  { id: 3, name: "Pramitha ", department: "Finance", role: "Accountant", status: "Present" },
  { id: 4, name: "Neha", department: "Marketing", role: "Digital Marketing", status: "Absent" },
];

const employeeList = document.getElementById("employeeList");
const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const roleFilter = document.getElementById("roleFilter");
const form = document.getElementById("employeeForm");

// Render employee cards
function renderEmployees(filter = "") {
  employeeList.innerHTML = "";

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchInput.value.toLowerCase()) &&
    (departmentFilter.value === "" || emp.department === departmentFilter.value) &&
    (roleFilter.value === "" || emp.role === roleFilter.value)
  );

  filtered.forEach(emp => {
    const card = document.createElement("div");
    card.className = `employee-card ${emp.status.toLowerCase()}`;
    card.innerHTML = `
      <h3>${emp.name}</h3>
      <p><strong>Dept:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <p><strong>Status:</strong> ${emp.status}</p>
    `;
    employeeList.appendChild(card);
  });
}

// Event listeners
searchInput.addEventListener("input", renderEmployees);
departmentFilter.addEventListener("change", renderEmployees);
roleFilter.addEventListener("change", renderEmployees);

// Admin Form Handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newEmp = {
    id: employees.length + 1,
    name: document.getElementById("nameInput").value,
    department: document.getElementById("departmentInput").value,
    role: document.getElementById("roleInput").value,
    status: document.getElementById("statusInput").value
  };

  employees.push(newEmp);
  form.reset();
  renderEmployees();
});

renderEmployees();
