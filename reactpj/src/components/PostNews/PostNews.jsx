import React, {useState} from 'react';
import s from './postNewsStyle.module.css';
import Comments from "../Comments/Comments";
import data from "../../assets/data/articles.json";
import {getComments} from "../../assets/helpers/get-comments-by-article";
import comments from "../Comments/Comments";



export function PostNews (props) {

    const [count, setCount] = useState(props.currentLikes)

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

    function selectByArticleId(totalData, id) {
        return totalData.filter(({articleId}) => articleId === id)
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
                    changeSize={props.changeSize}
                /> }

            <br/>


        </li>
    );
};

export default PostNews;