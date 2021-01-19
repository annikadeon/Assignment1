function CalcFinalGrade() {
    //variables collecting the inputs from the form
    var AssignmentGrade = document.getElementById("assignments").value;
    var ProjectGrade = document.getElementById("group").value;
    var QuizGrade = document.getElementById("quizzes").value;
    var ExamGrade = document.getElementById("exams").value;
    var INTEXGrade = document.getElementById("intex").value;
    //numerical final grade, calculated using the weight of grade
    var finalGrade = (AssignmentGrade * .5 + ProjectGrade * .1 + QuizGrade * .1 + ExamGrade * .2 + INTEXGrade * .1);
    //letter grade, which will be later calculated
    var letterGrade = "";

    //if statement to deterine letter grade
    if (finalGrade >= 94) {
        letterGrade = "A"
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-"
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+"
    }
    else if (finalGrade >= 84) {
        letterGrade = "B"
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-"
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+"
    }
    else if (finalGrade >= 74) {
        letterGrade = "C"
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-"
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+"
    }
    else if (finalGrade >= 64) {
        letterGrade = "D"
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "E"
    }
    //finall alert of your numeric and letter grade
    alert("You received " + finalGrade + "% in the course, which is a(n) " + letterGrade + ".");
}