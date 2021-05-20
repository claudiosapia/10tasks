const elements = require("../task1");
const runners2= elements.runners;
//init min and max
const min = 35;
const max = 80;

//test min max values for random generated times for runners' laps 1 and 2 are < max and > min
test("min max values for random generated times for runners' laps 1 and 2 are < max and > min", () => {
  expect(elements.formula).toBeLessThanOrEqual(max);
  expect(elements.formula).toBeGreaterThanOrEqual(min);
  expect(elements.formula).toMatchSnapshot();
});

//assign random values to runners as laps time
for (let i = 0; i < runners2.length; i++) {
  runners2[i][3] = Math.random() * (max - min) + min;
  runners2[i][3] = Math.floor(runners2[i][3]);
  runners2[i][2] = Math.random() * (max - min) + min;
  runners2[i][2] = Math.floor(runners2[i][2]);
}


//INTEGRATION TEST OF COMPONENTS
//check that lap 1 and lap 2 times are less than max and > min
test("check that lap 1 and lap 2 times are less than max and > min after filtering runners", () => {
  const filteredRunners = runners2.filter(function (runner) {
    expect(runner[2]).toBeLessThanOrEqual(max);
    expect(runner[3]).toBeLessThanOrEqual(max);
    expect(runner[2]).toBeGreaterThanOrEqual(min);
    expect(runner[3]).toBeGreaterThanOrEqual(min);
    //test brkpoint
    expect(elements.breakpoint).toBe(50);
    expect(elements.breakpoint).toMatchSnapshot();
  });
});
