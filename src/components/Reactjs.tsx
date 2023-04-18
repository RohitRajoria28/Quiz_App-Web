import React, { ReactComponentElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./QuestionPage.css";
import { Link } from "react-router-dom";

interface Option {
  id: number;
  text: string;
  selected: boolean;
  isCorrect:boolean;
}

interface QuestionProps {
  question: string;
  answer: boolean;
}
const Reactjs = () => {
  let [score, setScore] = useState(0);
  let [style, setStyle] = useState<string[]>([
    "circle",
    "circle",
    "circle",
    "circle",
    "circle",
  ]);
  let [q1, setQ1] = useState<Boolean>(false);
  let [q2, setQ2] = useState<Boolean>(false);
  let [q3, setQ3] = useState<Boolean>(false);
  let [q4, setQ4] = useState<Boolean>(false);
  let [q5, setQ5] = useState<Boolean>(false);
  let [QuesNum, setQuesNum] = useState(0);
  let [q2Ans, setq2Ans] = useState<string>("");
  //   question 3
  const [items, setItems] = useState([
    { id: 1, text: "componentDidMount" },
    { id: 2, text: "componentWillUnmount" },
    { id: 3, text: "componentDidUpdate" },
  ]);

  const [targets, setTargets] = useState<any>([
    {
      id: 1,
      text: "A. Called after a component is rendered for the first time.",
      item: "not changed",
      correctAns: "componentDidMount",
    },
    {
      id: 2,
      text: "B. Called immediately before a component is removed from the ",
      item: "",
      correctAns: "componentWillUnmount",
    },
    {
      id: 3,
      text: "C. Called after the component's state or props have been updated and the component is re-rendered.",
      item: "",
      correctAns: "componentDidUpdate",
    },
  ]);
  let location = useLocation();

  const questions = [
    {
      texts:
        "Which lifecycle method of a React component is called after the component is mounted and rendered for the first time?",
      options: [
        { id: 0, text: "A. componentDidMount", isCorrect: true },
        { id: 1, text: "B. componentDidUpdate", isCorrect: false },
        { id: 2, text: "C. componentWillUnmount", isCorrect: false },
        { id: 3, text: "D. componentWillMount", isCorrect: false },
      ],
    },
  ];
  const question2 = [
    {
      texts: "_______is the function used to render React elements to the DOM",
      ans: "ReactDOM.render()",
    },
  ];
  useEffect(() => {}, []);
  const handleQuestionNumber = (e: Number) => {
    if (e == 1) {
      setQuesNum(1);
      setQ1(true);
      setQ2(false);
      setQ3(false);
      setQ4(false);
      setQ5(false);
    } else if (e == 2) {
      setQuesNum(2);
      setQ1(false);
      setQ2(true);
      setQ3(false);
      setQ4(false);
      setQ5(false);
    } else if (e == 3) {
      setQuesNum(3);
      setQ1(false);
      setQ2(false);
      setQ3(true);
      setQ4(false);
      setQ5(false);
    } else if (e == 4) {
      setQuesNum(4);
      setQ1(false);
      setQ2(false);
      setQ3(false);
      setQ4(true);
      setQ5(false);
    } else if (e == 5) {
      setQuesNum(5);
      setQ1(false);
      setQ2(false);
      setQ3(false);
      setQ4(false);
      setQ5(true);
    }
  };
  const optionClicked = (isCorrect: boolean) => {
    // Increment the score

    if (isCorrect) {
      setScore(score + 1);
    }
    if (QuesNum === 1) {
      style[0] = "Markedcircle";
    }
    if (QuesNum === 2) {
      style[1] = "Markedcircle";
    }
    if (QuesNum === 3) {
      style[2] = "Markedcircle";
    }
    if (QuesNum === 4) {
      style[3] = "Markedcircle";
    }
    if (QuesNum === 5) {
      style[4] = "Markedcircle";
    }
  };
  const handleFillInTheBlank = (e: React.ChangeEvent<HTMLInputElement>) => {
    setq2Ans(e.target.value);
    style[1] = "Markedcircle";
    if (q2Ans == question2[0].ans) {
      setScore(score + 1);
      console.log(score);
    }
  };

  const handleDragStart = (e: any, itemId: any) => {
    e.dataTransfer.setData("text/plain", itemId);
  };

  const handleDragOver = (e: any, targetId: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any, targetId: any) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text");
    const updatedTargets = targets.map((target: any) => {
      if (target.id === targetId) {
        return {
          ...target,
          item: items.find((item) => item.id === Number(itemId)),
        };
      }
      return target;
    });

    setTargets(updatedTargets);
    style[2] = "Markedcircle";
  };
  const handleSubmitQuestion3 = () => {
    let flag = true;
    targets.map((value: any, index: any) => {
      if (value.item.text !== value.correctAns) {
        flag = false;
      }

      return true;
    });
    if (flag) {
      flag = false;
      setScore(score + 1);
    }

    setQuesNum(4);
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(true);
    setQ5(false);
  };
  //   question 4

  const [options, setOptions] = useState<Option[]>([
    { id: 1, text: "A) componentDidMount", selected: false,isCorrect:true },
    { id: 2, text: "B) componentWillUnmount", selected: false,isCorrect:true },
    { id: 3, text: "C) componentWillMount", selected: false,isCorrect:false },
    { id: 4, text: "D) shouldComponentUpdate", selected: false,isCorrect:true },
    { id: 5, text: "E) componentDidUpdate", selected: false,isCorrect:true },
  ]);

  const handleOptionSelect = (optionId: number) => {
    const updatedOptions = options.map((option) => {
      if (option.id === optionId) {
        return { ...option, selected: !option.selected };
      }
      return option;
    });
    setOptions(updatedOptions);
    console.log(options);
    style[3]="Markedcircle"
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedOptions = options.filter((option) => option.selected);
    // console.log("Selected options:", selectedOptions);
    let flag=true;
    selectedOptions.map((value,index)=>{
      console.log(value.isCorrect+ " ");
       if(value.isCorrect===false){
        flag=false;
       }
      return true;
    })
     
    if(flag){
      setScore(score+1);
      console.log(score);
      flag=false;
    }
    setQuesNum(5);
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(false);
    setQ5(true);
  };
// questions 5 

const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

const handleAnswerSelect = (isTrue: boolean) => {
  setSelectedAnswer(isTrue);
  if(isTrue){
    setScore(score+1);
    console.log(score);
  }
  style[4]="Markedcircle"
};
  
// Previous Next Button
const nextButtonHandler=(num:any)=>{
  if(num==1){
    setQ1(false);
    setQ2(true);
    setQ3(false);
    setQ4(false);
    setQ5(false);
  }
  if(num==2){
    setQ1(false);
  setQ2(false);
  setQ3(true);
  setQ4(false);
  setQ5(false);
  }
  if(num==3){
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(true);
    setQ5(false);
  }
  if(num==4){
    setQ1(false);
  setQ2(false);
  setQ3(false);
  setQ4(false);
  setQ5(true);
  }
}

const prevButtonHandler=(num:any)=>{
  
  if(num==2){
    setQ1(true);
  setQ2(false);
  setQ3(false);
  setQ4(false);
  setQ5(false);
  }
  if(num==3){
    setQ1(false);
    setQ2(true);
    setQ3(false);
    setQ4(false);
    setQ5(false);
  }
  if(num==4){
  setQ1(false);
  setQ2(false);
  setQ3(true);
  setQ4(false);
  setQ5(false);
  }
  if(num==5){
    setQ1(false);
    setQ2(false);
    setQ3(false);
    setQ4(true);
    setQ5(false);
  }
}
  return (
    <div>
      <div>React JS Quiz</div>
      <div className="question-number-show">
        <div className={style[0]} onClick={() => handleQuestionNumber(1)}>
          <p className="text">1</p>
        </div>
        <div className={style[1]} onClick={() => handleQuestionNumber(2)}>
          <p className="text">2</p>
        </div>
        <div className={style[2]} onClick={() => handleQuestionNumber(3)}>
          <p className="text">3</p>
        </div>
        <div className={style[3]} onClick={() => handleQuestionNumber(4)}>
          <p className="text">4</p>
        </div>
        <div className={style[4]} onClick={() => handleQuestionNumber(5)}>
          <p className="text">5</p>
        </div>
      </div>

      <div className="questions-types-main">
        {q1 && (
          <div>
            <div>{questions[0].texts}</div>
            <ul>
              {questions[0].options.map((option) => {
                return (
                  <li>
                    <input
                      key={option.id}
                      onClick={() => optionClicked(option.isCorrect)}
                      type="checkbox"
                    />
                    {option.text}
                  </li>
                );
              })}
            </ul>
            <div className="next-prev-buttons" >
              
              <button onClick={()=>nextButtonHandler(1)} >Next</button>
            </div>
          </div>
        )}
        {q2 && (
          <div>
            <h4>Fill the Blank</h4>
            <div>{question2[0].texts}</div>
            <input type="text" value={q2Ans} onChange={handleFillInTheBlank} />
            <div className="next-prev-buttons" >
              <button onClick={()=>prevButtonHandler(2)} >Prev</button>
              <button onClick={()=>nextButtonHandler(2)} >Next</button>
            </div>
          </div>
        )}
        {q3 && (
          <div>
            <div className="drag-drop-container">
              <div className="drag-drop-semi-container">
                {items.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    className="drag-item"
                    onDragStart={(e) => handleDragStart(e, item.id)}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
              <div className="drag-drop-semi-container">
                {targets.map((target: any) => (
                  <div
                    className="drop-target"
                    key={target.id}
                    onDragOver={(e) => handleDragOver(e, target.id)}
                    onDrop={(e) => handleDrop(e, target.id)}
                  >
                    {target.text}: {target.item ? target.item.text : ""}
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => handleSubmitQuestion3()}>Submit</button>

            <div className="next-prev-buttons" >
              <button onClick={()=>prevButtonHandler(3)} >Prev</button>
              <button onClick={()=>nextButtonHandler(3)} >Next</button>
            </div>
          </div>
        )}
        {q4 && (
          <div>
            <form onSubmit={handleSubmit}>
              <div>Which of the following are ReactJS lifecycle methods?</div>
              {options.map((option) => (
                <div key={option.id}>
                  <input
                    type="checkbox"
                    id={option.id.toString()}
                    value={option.id}
                    checked={option.selected}
                    onChange={() => handleOptionSelect(option.id)}
                  />
                  <label htmlFor={option.id.toString()}>{option.text}</label>
                </div>
              ))}
              <button type="submit" >Submit</button>
            </form>
            <div className="next-prev-buttons" >
              <button onClick={()=>prevButtonHandler(4)} >Prev</button>
              <button onClick={()=>nextButtonHandler(4)} >Next</button>
            </div>
          </div>
        )}
        {q5 && 
        
        (
          <div>
            <h3>In ReactJS, state should be modified directly.</h3>
            <div>
              <label>
                <input
                  type="radio"
                  value="true"
                  checked={selectedAnswer === true}
                  onChange={() => handleAnswerSelect(true)}
                />
                False
              </label>
              <label>
                <input
                  type="radio"
                  value="false"
                  checked={selectedAnswer === false}
                  onChange={() => handleAnswerSelect(false)}
                />
                True
              </label>
            </div>
            <div className="next-prev-buttons" >
              <button onClick={()=>prevButtonHandler(5)} >Prev</button>
               
            </div>
            <Link to='/ReportCard' state={{state:score}} >
               <button  >Submit The Quiz</button>
            </Link>
          </div>
        )
        }
      </div>
    </div>
  );
};

export default Reactjs;
