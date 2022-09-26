import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDeleteQuestion}) {

  const questionList = questions.map(question => <QuestionItem key={questions.id} question={question} handleDeleteQuestion={handleDeleteQuestion}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
