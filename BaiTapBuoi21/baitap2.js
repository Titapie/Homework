const students = [
  { id: 1, name: "Khoa Nguyen" },
  { id: 2, name: "My Tran" },
  { id: 3, name: "Phong Le" },
  { id: 4, name: "Yen Vo" },
  { id: 5, name: "Bao Pham" },
];

const answerKey = [
  { question: 1, correctAnswer: "A", point: 2 },
  { question: 2, correctAnswer: "C", point: 1 },
  { question: 3, correctAnswer: "B", point: 3 },
  { question: 4, correctAnswer: "D", point: 2 },
  { question: 5, correctAnswer: "A", point: 2 },
];

const submissions = [
  {
    studentId: 1,
    submittedAt: "2026-07-10T08:00:00",
    answers: [
      { question: 1, answer: "A" },
      { question: 2, answer: "C" },
      { question: 3, answer: "B" },
      { question: 4, answer: "A" },
      { question: 5, answer: "A" },
    ],
  },
  {
    studentId: 2,
    submittedAt: "2026-07-10T08:05:00",
    answers: [
      { question: 1, answer: "A" },
      { question: 2, answer: "B" },
      { question: 3, answer: "B" },
      { question: 4, answer: "D" },
      { question: 5, answer: "C" },
    ],
  },
  {
    studentId: 3,
    submittedAt: "2026-07-10T07:58:00",
    answers: [
      { question: 1, answer: "A" },
      { question: 2, answer: "C" },
      { question: 3, answer: "B" },
      { question: 4, answer: "D" },
      { question: 5, answer: "A" },
    ],
  },
  {
    studentId: 4,
    submittedAt: "2026-07-10T08:02:00",
    answers: [
      { question: 1, answer: "B" },
      { question: 2, answer: "C" },
    ],
  },
  {
    studentId: 5,
    submittedAt: "2026-07-10T08:01:00",
    answers: [
      { question: 1, answer: "A" },
      { question: 2, answer: "C" },
      { question: 3, answer: "B" },
      { question: 4, answer: "D" },
      { question: 5, answer: "A" },
    ],
  },
];
function scoreStudent(submissions,answerKey,studentId){
    let question=[]
    for (let i=1;i<=answerKey.length; i++)
        question.push(i);
    if (!submissions|| !Object.hasOwn(submissions,"answers")) return {id:studentId,point:0,count:0,wrongQuestion:question}
    return submissions.answers.reduce((acc,cur)=>{
        if (answerKey.find((cur2)=>cur2.question===cur.question).correctAnswer===cur.answer)
            {
                acc.point+=answerKey.find((cur2)=>cur2.question===cur.question).point;
                acc.count++;
                question.splice(question.findIndex((cur2)=>cur2===cur.question),1);
            }
            acc.wrongQuestion=question;
        return acc;
    },{id:studentId,point:0,count:0,wrongQuestion:question});
}
function getSubmittedAt(studentId,submissions) {
  const submission = submissions.find(
    (cur) => cur.studentId === studentId
  );

  if (!submission || !Object.hasOwn(submission, "answers")) {
    return "9999-12-31T23:59:59";
  }

  return submission.submittedAt;
}
function gradeExam(students, answerKey, submissions){
    let score=[];
    students.forEach((student)=>{
        score.push(scoreStudent(submissions.find((submission)=>submission.studentId===student.id),answerKey,student.id))})
    let rank=[]
    score.forEach(element => {
        if (rank.find((cur)=>element.point===cur.point)){rank.find((cur)=>element.point===cur.point).count++;}
        else rank.push({point:element.point,count:1})
    });
        rank.sort((a,b)=>{return a.point-b.point});
    let result =students.map((student)=>{
        
        return {
            id:student.id,
            name:student.name,
            score:score.find((cur=> cur.id ===student.id)).point,
            correctCount:score.find((cur=> cur.id ===student.id)).count,
            wrongQuestions:score.find((cur=> cur.id ===student.id)).wrongQuestion,
            rank:rank.reduce((acc,cur)=> {
                if (cur.point>score.find((cur=> cur.id ===student.id)).point) acc+=cur.count;
                return acc;
            },0)+1
        }
    })
    result.forEach((cur)=>Object.keys(cur).forEach((cur2)=>Object.defineProperty(cur,cur2,{
        
        writable:false,
        configurable:false
    })))
    return result.sort((a,b)=>b.score-a.score || new Date(getSubmittedAt(a.id,submissions))-new Date(getSubmittedAt(b.id,submissions)));
}
function WrongAnswerIterator(studentResult){
    let result ={
        
        [Symbol.iterator](){
            let i=0;
            return {
                
                next(){
                    if (i>=studentResult.wrongQuestions.length) return {done:true}
                    else {
                        i++;
                        return {
                            value:studentResult.wrongQuestions[i-1],done:false
                        }
                    }
                }
            }
        }
    }
    return result;
}
console.log(gradeExam(students, answerKey, submissions));
