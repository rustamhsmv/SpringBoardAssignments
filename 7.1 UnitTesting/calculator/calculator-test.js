
 it('should calculate the monthly rate correctly', function () {
   const obj1 = {amount: 30000, years: 5, rate: 20};
   const obj2 = {amount: 100000, years: 20, rate: 25};
   expect(calculateMonthlyPayment(obj1)).toEqual('794.82');
   expect(calculateMonthlyPayment(obj2)).toEqual('2098.22');
 });

 it('should calculate the monthly rate with 2 decimal places', function () {
  const obj1 = {amount: 30000, years: 5, rate: 20};
  const obj2 = {amount: 100000, years: 20, rate: 25};
  expect(calculateMonthlyPayment(obj1)).toBeCloseTo(794.82,2);
  expect(calculateMonthlyPayment(obj2)).toBeCloseTo(2098.22,2);
});