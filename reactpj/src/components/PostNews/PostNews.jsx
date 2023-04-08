import React, {useEffect, useMemo, useState} from 'react';
import s from './postNewsStyle.module.css';
import Comments from "../Comments/Comments";
import com from "../../assets/data/comments.json";
import CommentsForm from "../Comments/CommentsForm";


export function PostNews (props) {

    const [count, setCount] = useState(props.currentLikes)
    const [comments, setComments] = useState(com)




    const [commentsInfo, setCommentsInfo] = useState({
        show: -1,
        count: props.commentsCount
    })



    const openComments = () => {
        setCommentsInfo(oldCommentsInfo => ({
            show: (-1) * oldCommentsInfo.show,
            count: props.commentsCount
        }))
    }


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
                <button className={s.buttom}
                onClick={openComments}>
                    <p>
                    {commentsInfo.show < 0
                        ? 'Открыть комментарии'
                        : 'Закрыть комментарии'
                    }
                    </p>
                </button>
            </div>


            {(commentsInfo.show > 0) &&
                <Comments
                    articleId={props.articleId}
                    commentsCount={props.commentsCount}
                    changeSize={props.commentsCount}
                />

            }

            <br/>
        </li>

    );
};


export default PostNews;