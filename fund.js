//SBA 308: JavaScript Fundamentals

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// ---- written code begins here ------

//Results---------------------------------------------------------------------
getLearnerData();


// to calculate total score 
let assigment1Score = averageScore(LearnerSubmissions.submission.score);
let assignment2Score = averageScore(LearnerSubmissions.submission.score);

//functions-------------------------------------------------------------------- 
function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmission) {
 
  let result = [
    {
      id: learner_id,
      avg: totalScore(),
      1: ,
      2: ,
    }
  ];
  return result;
}

function totalScore(){
  let total = (assigment1Score + assignment2Score)/
  return total;
}
//Calculate the average Score with the validation of points allowed if submitted on or after the due date 
function averageScore (score, points_possible, punctualWeight){
  assignmentOnTime();
  let average = (score/points_possible)*punctualWeight;
  return average;
}
//Calculates the value of the variable utilized to finalize the average score in relation to submission punctuality
let punctualWeight =1;
let dueDate = AssignmentGroup.assignments.due_at;
let submitDate = LearnerSubmissions.submitted_at;

function assignmentOnTime (submitDate, dueDate){
  if (submitDate !== dueDate){
    //calculate percent of grade deducted by time difference
      /* time and date calculation*/
      dateDue = new Date(dueDate);
      dateSubmitted = new Date(submitDate);
      //using JavaScript method getTime which converts the date into milliseconds, then convert milliseconds to days by dividing the difference in milliseconds by the total milliseconds in one day. 1 day = 24 hrs * 60 minutes * 60 seconds * 1000 milliseconds
    let timeDifference = (dateSubmitted.getTime() - dateDue.getTime())/(1000*3600*24);
    //Validate that punctualWeight does not return as 0, following the current math logic. So that averageScore() will calculate the final average score per assignment correctly. 
      if (timeDifference !== 0){
        punctualWeight =0.1*timeDifference;
      } else if (timeDifference == 0){
        punctualWeight = 1;
      }
    return punctualWeight;
  }
}

