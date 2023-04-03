import React, {useState} from 'react';
import s from './postNewsStyle.module.css';
import Comments from "../Comments/Comments";
import data from "../../assets/data/articles.json";



export function PostNews (props) {

    const [count, setCount] = useState(props.currentLikes)
    function increment(){
        setCount( count+1)
        props.currentLikes = count

    }
    function discrement(){
        setCount(  count -1 )
        props.currentLikes = count
    }


    return (
        <li className={s.content}>
            <strong>
                {props.title}
            </strong>
            <div>
                {props.text}
            </div>
            <div>
                <b className={s.heart}>0</b>
                <button className={s.buttom} onClick={increment} >Like</button>
                <button className={s.buttom} onClick={discrement}>Dislike</button>
                <p className={s.count}> {count}</p>
            </div>
            <hr/>
            <div>
                <div>
                    <b> Колличество комментариев </b>
                </div>
                <strong>
                    {props.commentsCount}
                </strong>
            </div>
            <div>
                <button className={s.buttom} >Открыть комментарии </button>
            </div>
            <br/>


        </li>
    );
};

export default PostNews;