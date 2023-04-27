import { useState } from "react";
import style from './Topic4.module.css'
import { useNavigate } from "react-router-dom";

export default function Topic4(){

    const navigate= useNavigate();

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
        questionText: "",
        answerOption:[
            {answerText: "Microsoft" , isCorrect: true},
            {answerText: "Google" , isCorrect: false},
            {answerText: "Apple" , isCorrect: false},
            {answerText: "Infosys" , isCorrect: false}
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

    return(
        <div className={style.wrapper}>
    <h1>Quiz 4</h1>
    <div className={style.container}>
    {showScore ? (
        <div>
        <div>You have scored {score*2} out of {question.length*2}</div>
        <button className={style.home} onClick={()=>navigate('/')}>Go To Home</button>
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