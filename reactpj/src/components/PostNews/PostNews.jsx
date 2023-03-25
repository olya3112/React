import React, {useState} from 'react';
import s from './postNewsStyle.module.css';



export function PostNews (props) {
    let color = 0

    const colors = ['wight', 'red'];

    const [count, setCount] = useState(props.currentLikes)
    function increment(){
        setCount( count+1)
        props.currentLikes = count
        color = 1
        s.heart.changeColor.background ='tomato'
    }
    function discrement(){
        setCount(  count -1 )
        props.currentLikes = count
        color=0
        s.heart.changeColor.background ='wight'
    }
    function madeColor(color){
        if (color==0){
            s.heart.changeColor.background ='wight'
        }

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
        </li>
    );
};

export default PostNews;