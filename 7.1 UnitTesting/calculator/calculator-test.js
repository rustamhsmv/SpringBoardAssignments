
 it('should calculate the monthly rate correctly with 2 decimal places', function () {
   const obj1 = {amount: 30000, years: 5, rate: 20};
   const obj2 = {amount: 100000, years: 20, rate: 25};
   expect(calculateMonthlyPayment(obj1).toBeCloseTo(794.82,2));
   expect(calculateMonthlyPayment(obj2).toBeCloseTo(2098.22,2));
 });


it("should return an object", function() {
  document.getElementById("loan-amount").value = 30000.00;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 20;
  let lengthVar = Object.keys(getCurrentUIValues()).length
  let obj3 = getCurrentUIValues();

  expect(obj3.toBeInstanceOf(Object));
 expect(lengthVar.toEqual(3));
});


