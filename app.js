const inputUpdate = document.querySelector("#inputUpdate");
const calculateBtn = document.querySelector("#btn");
const percentageMsg = document.querySelector("#percentage");
const gradeMsg = document.querySelector("#grade");

calculateBtn.addEventListener('click', () => {
    let studentMarks = parseFloat(document.querySelector("#student-marks").value);
    let totalMarks = parseFloat(document.querySelector("#total-marks").value);

    if (isNaN(studentMarks) || isNaN(totalMarks) || studentMarks < 1 || totalMarks < 1) {
        inputUpdate.innerText = `Please enter valid marks!`;
        inputUpdate.style.color = "Red";
        return;
    }

    let percentage = (studentMarks / totalMarks) * 100;
    percentageMsg.innerText = `Your Percentage: ${percentage.toFixed(2)}%`;
    percentageMsg.style.color = "rgb(3, 90, 3)";

    let grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    gradeMsg.innerText = `Your Grade: ${grade}`;
    gradeMsg.style.color = "rgb(3, 90, 3)";
});