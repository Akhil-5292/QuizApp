import { useState } from "react";
import style from './Topic1.module.css'
import { useNavigate } from "react-router-dom";

export default function Topic1(){

    const navigate =useNavigate();
    
    const question = [{
        questionText: "Which company/organisation develop windows?",
        answerOption:[
            {answerText: "Microsoft" , isCorrect: true},
            {answerText: "Google" , isCorrect: false},
            {answerText: "Apple" , isCorrect: false},
            {answerText: "Infosys" , isCorrect: false}
        ]
    },
    {
        questionText: "What is the capital of India?",
        answerOption:[
            {answerText: "Mumbai" , isCorrect: false},
            {answerText: "Luckow" , isCorrect: false},
            {answerText: "Delhi" , isCorrect: true},
            {answerText: "Patna" , isCorrect: false}
        ]
    },
    {
        questionText: "Who is the PM of India?",
        answerOption:[
            {answerText: "Yogi" , isCorrect: false},
            {answerText: "Modi" , isCorrect: true},
            {answerText: "Amit Shah" , isCorrect: false},
            {answerText: "Rajnath" , isCorrect: false}
        ]
    },
    {
        questionText: "What is the capital of UP",
        answerOption:[
            {answerText: "Lucknow" , isCorrect: true},
            {answerText: "Pune" , isCorrect: false},
            {answerText: "Maharashtra" , isCorrect: false},
            {answerText: "Delhi" , isCorrect: false}
        ]
    },
    {
        questionText: "What is the capital of France?",
        answerOption:[
            {answerText: "Paris" , isCorrect: true},
            {answerText: "New York" , isCorrect: false},
            {answerText: "Dublin" , isCorrect: false},
            {answerText: "London" , isCorrect: false}
        ]
    },{
        questionText: "Today is Monday, after 63 days it will be?",
        answerOption:[
            {answerText: "Monday" , isCorrect: true},
            {answerText: "Sunday" , isCorrect: false},
            {answerText: "Tuesday" , isCorrect: false},
            {answerText: "Wednesday" , isCorrect: false}
        ]
    },
    {
        questionText: "What is the capital of India?",
        answerOption:[
            {answerText: "Mumbai" , isCorrect: false},
            {answerText: "Luckow" , isCorrect: false},
            {answerText: "Delhi" , isCorrect: true},
            {answerText: "Patna" , isCorrect: false}
        ]
    },
    {
        questionText: "Who is the PM of India?",
        answerOption:[
            {answerText: "Yogi" , isCorrect: false},
            {answerText: "Modi" , isCorrect: true},
            {answerText: "Amit Shah" , isCorrect: false},
            {answerText: "Rajnath" , isCorrect: false}
        ]
    },
    {
        questionText: "What is the capital of UP",
        answerOption:[
            {answerText: "Lucknow" , isCorrect: true},
            {answerText: "Pune" , isCorrect: false},
            {answerText: "Maharashtra" , isCorrect: false},
            {answerText: "Delhi" , isCorrect: false}
        ]
    },
    {
        questionText: "What is the capital of France?",
        answerOption:[
            {answerText: "Paris" , isCorrect: true},
            {answerText: "New York" , isCorrect: false},
            {answerText: "Dublin" , isCorrect: false},
            {answerText: "London" , isCorrect: false}
        ]
    }
    ]

    const[currentQuestion, setCurrentQuestin]= useState(0);
    const[score, setScore]= useState(0);
    const[showScore, setShowScore]=useState(false);

    const handleAnswer=(isCorrect)=>{
      if(isCorrect){
        setScore(score+1)
      }
      if((currentQuestion+1)<question.length){
        setCurrentQuestin(currentQuestion+1)
      }else{
        setShowScore(true)
      }
    }
    

    function refreshPage() {
        window.location.reload(false);
      }
    return(
        <div className={style.wrapper}>
    <h1>Quiz 1</h1>
    <div className={style.container}>
    {showScore ? (
        <div>
        <div>You have scored {score*2} out of {question.length*2}</div>
        <button className={style.home} onClick={refreshPage}>Restart</button>
        </div>
         )
        : (
           <>
           <div  className={style.score}>
            <div>
                <span>{currentQuestion+1}/{question.length}</span>
            </div>
            <div>
                {question[currentQuestion].questionText}
            </div>
            </div>
            <div className={style.answer}>
                {question[currentQuestion].answerOption.map((answer)=>(
                    <button onClick={()=>handleAnswer(answer.isCorrect)}>{answer.answerText}</button>
                ))}
                </div>
                </>
        )
    }
    </div>
      </div>
    )
}