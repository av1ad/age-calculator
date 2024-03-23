const form = document.getElementById('ageForm');
const outputElements = {
  years: document.getElementById("years"),
  months: document.getElementById("months"),
  days: document.getElementById("days")
};

form.addEventListener('submit', e => {
  e.preventDefault();
  const { day, month, year } = e.target.elements;
  const age = calculateAge(new Date(year.value, month.value - 1, day.value));
  Object.entries(age).forEach(([key, value]) => outputElements[key].textContent = value);
});

function calculateAge(birthDate) {
  const today = new Date();
  const yearsDiff = today.getFullYear() - birthDate.getFullYear();
  const monthsDiff = today.getMonth() - birthDate.getMonth();
  const daysDiff = today.getDate() - birthDate.getDate();

  let years = yearsDiff;
  let months = monthsDiff;
  let days = daysDiff;

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    days += lastMonth.getDate();
    months--;
  }

  return { years, months, days };
}
