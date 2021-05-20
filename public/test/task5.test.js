const task5 = require("../task5");
//init max score to use in unit test
const maxScore = 200;
const students = task5.students;





//calc percentage of marks dividing  n. of correct answers by 200 wich is the maximum possible score multipling result by 100.
test("calcPercentageMark function", () => {
  const addMock = jest.spyOn(task5, "calcPercentageMark");
  // result will be  calcPercentageMarc(Math.floor(Math.random() * (maxScore - 60) + 60))
  const result = addMock(Math.floor(Math.random() * (maxScore - 60) + 60));
  const percentageMark=  Math.floor(result);
  expect(typeof percentageMark).toBe("number");
  expect(percentageMark).toBeGreaterThanOrEqual(1);
  expect(percentageMark).toBeLessThanOrEqual(100);
  expect(percentageMark).toMatchSnapshot();
});



//test randomMarks () that loops through students, generates random marks, convert in percentage using calcPercentageMark()

test("randomMarks function works as expected", () => {
  //spyOn method on task5, funct randomMarks
  const addMock = jest.spyOn(task5, "randomMarks");
  // result will be randomMarks(min) which is 60
  const result = addMock(60);
  //expect function to have been called
  expect(addMock).toHaveBeenCalled();
  //loop through function and check that percentage mark is a number
  for (let i = 0; i < students.length; i++) {
    expect(typeof students[i][2]).toBe("number");
    
          expect(typeof students[i][2]).toMatchSnapshot()
  }

});

test("returned value of marks inside marks object is correct", () => {
  //import marks
  const marks = task5.marks;

  //loop through object and check that...

  //value of marks within marks object
  for (const prop in marks) {
    //is a number
    expect(typeof marks[prop]).toBe("number");
    //is < or = 15 as there are 15 students there should be 15 marks
    expect(marks[prop]).toBeLessThanOrEqual(15);
    //is >= 0 as there are 15 students and there should be 15 marks
    expect(marks[prop]).toBeGreaterThanOrEqual(0);
    expect(marks[prop]).toMatchSnapshot()
  }
});


describe("students are sorted and displayed correctly", () => {


  it("checks that number of students is correct", () => {
    expect(students.length).toBe(15)
        expect(students.length).toMatchSnapshot()

      });


  
  it("should return sorted students by marks from high to low", () => {
    //loop through students to check if mark is >= 70%
    for (let i = 0; i < students.length; i++) {
      students.sort(function (a, b) {
        return b[2] - a[2];
      });
      //sort students by percentage from high to low
      let sortedStudents = students.sort(function (a, b) {
        return b[2] - a[2];
      });
        expect(sortedStudents).toMatchSnapshot()

      expect(sortedStudents[0][2]).toBeGreaterThanOrEqual(sortedStudents[1][2]);

      expect(sortedStudents[1][2]).toBeGreaterThanOrEqual(sortedStudents[2][2]);
      expect(sortedStudents[2][2]).toBeGreaterThanOrEqual(sortedStudents[3][2]);
      expect(sortedStudents[3][2]).toBeGreaterThanOrEqual(sortedStudents[4][2]);
      expect(sortedStudents[4][2]).toBeGreaterThanOrEqual(sortedStudents[5][2]);
    }
  });
});
