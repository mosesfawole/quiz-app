type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: boolean;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question : {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div className="">
        {answers.map((answer) => (
          <div className="">
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
