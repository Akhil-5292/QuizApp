import { Link } from "react-router-dom";
import style from './Home.module.css'
export default function Home(){
    return(
        <div className={style.wrapper}>
        <h1>Quiz questions</h1>
        <div className={style.container}>
        <Link className={style.link} to='/Topic1'>Attempt Quiz 1</Link>
        <Link className={style.link} to='/Topic2'>Attempt Quiz 2</Link>
        <Link className={style.link} to='/Topic3'>Attempt Quiz 3</Link>
        <Link className={style.link} to='/Topic4'>Attempt Quiz 4</Link>
        </div>
        </div>
    )
} 