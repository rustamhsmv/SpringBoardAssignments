window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      return update();
      
    });
  }
});

function getCurrentUIValues() {
  let newObj = {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value)
  };
  return newObj;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    let p = values.amount;
    let i = values.rate / (12 * 100);
    let n = values.years *12;
  
    let monthly = (p * i) / (1 - ((1 + i)**(-n)));
    return monthly.toFixed(2);
  }

  // Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 30000.00;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 20;
  let obj = getCurrentUIValues();
  
  let monthly = calculateMonthlyPayment(obj);
  updateMonthly(monthly);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let monthly= calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(monthly);
  return monthly; 
}
