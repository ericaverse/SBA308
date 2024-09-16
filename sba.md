# SBA 308: JavaScript Fundamentals

#### Rubric 
> - [ ] Declare variable properly using **let** and **const** where appropriate.
> - [ ] Use **operators** to perform calculations on variable and literals.
> - [ ] Use **strings**, **numbers**, and **Boolean** values _**cached within variables.**_
> - [ ] Use _**at least two**_ **if/else** statements to control program flow. Optionally, use at least one **switch** statement.
> - [ ] Use **try/catch** statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program.
> - [ ] Utilize _**at least two**_ different types of loops.
> - [ ] Utilize _**at least one loop control keyword**_ such as **break** or **continue**.
> - [ ] Create and/or manipulate **arrays** and **objects**.
> - [ ] Demonstrate the retrieval, manipulation, and removal or items in an array or properties in an object.
> - [ ] Use **functions** to handle repeated tasks.
> - [ ] Program outputs processed data as described above. _Partial credit will be earned depending on the level of adherence to the described behavior._
> - [ ] Ensure that the program runs without errors _(comment out things that do not work, and explain your blockers - you can still receive partial credit)._
> - [ ] Commit frequently to the fit repository.
> - [ ] Include a README file that contains a description of your application. 

## The Assignment Purpose is...
- To gauge my understanding of fundamental JavaScript concepts and my application of these concepts in a practical manner. 
> 🗓️ Project length is two days. 
><sub>(A Sprint in the Scrum Methodology)</sub>

#### Objectives
- Employ basic JavaScript syntax accurately.
- Implement control flow structures such as conditionals and loops effectively.
- Use arrays and objects to organize and manage data.
- Develop functions to create reusable code.
- Utilize loops and iteration to navigate through data collections.
- Implement error handling to manage potential code failures gracefully. 

## Deliverables
- [ ] Create a script that...
  - [ ] Gathers data
  - [ ] Processes that data
  - [ ] Outputs a consistent result as described by the specifications.
- The Expected Outcome is that the script will **analyze** and **transform** the data, converting it to an **array** of **objects** [⬇️]()

#### Provisions
Four Types of Data
- A **CourseInfo** object
```
{
  "id": number,
  "name": string,
}
```
- An **AssignmentGroup** object
```
{
  "id": number,
  "name": string,
  // the ID of the course the assignment group belongs to
  "course_id": number,
  // the percentage weight of the entire assignment group
  "group_weight": number,
  "assignments": [AssignmentInfo],
}
```
- The **AssignmentInfo** object within the array
```
 {
  "id": number,
  "name": string,
  // the due date for the assignment
  "due_at": Date string,
  // the maximum points possible for the assignment
  "points_possible": number, 
  } 
```
- An array of **LearnerSubmission** objects
```
{
    "learner_id": number,
    "assignment_id": number,
    "submission": {
      "submitted_at": Date string,
      "score": number
    }
}
```

## Results Format

```
{
  // the ID of the learner for which this data has been collected
      "id": number,
  // the learner’s total, weighted average, in which assignments
  // with more points_possible should be counted for more
  // e.g. a learner with 50/100 on one assignment and 190/200 on another
  // would have a weighted average score of 240/300 = 80%.
      "avg": number,
  // each assignment should have a key with its ID,
  // and the value associated with it should be the percentage that
  // the learner scored on the assignment (submission.score / points_possible)
      <assignment_id>: number,
  // if an assignment is not yet due, it should not be included in either
  // the average or the keyed dictionary of scores
}
```