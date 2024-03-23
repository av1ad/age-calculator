const yearsId = document.getElementById("years");
const monthsId = document.getElementById("months");
const daysId = document.getElementById("days");
const form = document.getElementById('ageForm')

// Age calculator
function ageCalculator(e) {
  e.preventDefault();
  const dayInputValue = document.getElementById("day").value;
  const monthInputValue = document.getElementById("month").value;
  const yearInputValue = document.getElementById("year").value;

  const birthDate = new Date(yearInputValue, monthInputValue - 1, dayInputValue); 
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // if(months < 0 || (months === 0 && days < 0) ) {
  //   years--;
  //   months += 12;
  //  }

  //  if (days < 0) {
  //   const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
  //   days += lastMonth.getDate();
  //   months--;
  //  }

   yearsId.innerHTML = years;
   monthsId.innerHTML = months;
   daysId.innerHTML = days;
}

form.addEventListener('submit', ageCalculator)
