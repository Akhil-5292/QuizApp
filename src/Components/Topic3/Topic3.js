import { useState } from "react";
import style from './Topic3.module.css'
import { useNavigate } from "react-router-dom";

export default function Topic2(){

    const navigate = useNavigate();

    const question = [{
        questionText: "The iPhone was created by which company?",
        answerOption:[
            {answerText: "Apple" , isCorrect: true},
            {answerText: "Google" , isCorrect: false},
            {answerText: "Microsoft" , isCorrect: false},
            {answerText: "Intel" , isCorrect: false}
        ]
    },
    {
        questionText: "How many Harry Potter books are there?",
        answerOption:[
            {answerText: "1" , isCorrect: false},
            {answerText: "5" , isCorrect: false},
            {answerText: "7" , isCorrect: true},
            {answerText: "9" , isCorrect: false}
        ]
    },
    {
        questionText: "Where is the Statue of Unity situated?",
        answerOption:[
            {answerText: "Mumbai" , isCorrect: false},
            {answerText: "Gujarat" , isCorrect: true},
            {answerText: "Dubai" , isCorrect: false},
            {answerText: "Rajasthan" , isCorrect: false}
        ]
    },
    {
        questionText: 'What is the capital of France?',
        answerOption:[
            {answerText: "London" , isCorrect: false},
            {answerText: "France" , isCorrect: true},
            {answerText: "New york" , isCorrect: false},
            {answerText: "Delhi" , isCorrect: false}
        ]
    },
    {
        questionText: "Who is CEO of Tesla?",
        answerOption:[
            {answerText: "Jeff Bezos" , isCorrect: false},
            {answerText: "Elon Musk" , isCorrect: true},
            {answerText: "Bill Gates" , isCorrect: false},
            {answerText: "Tony Stark" , isCorrect: false}
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
    <h1>Quiz 1</h1>
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