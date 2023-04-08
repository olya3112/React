import React, {useState} from "react";
import s from "./commentsStyle.module.scss";

export function CommentsForm ({create})  {

    const [comments, setComment] = useState({author: '', text: ''})
    const addNewComment = (e) =>{
        e.preventDefault()
        const newcomment = {
            ...comments, articleId: create.articleId
        }
        create(newcomment)
        setComment( {author: '', text: ''})
    }


    return(
        <form className={s.form}>
            <input className={s.commentInput}
                   value={comments.author}
                   onChange={e => setComment({...comments, author: e.target.value})}/>
            <input className={s.commentInput}
                   value={comments.text}
                   onChange={e => setComment({...comments, text: e.target.value})}/>
            <button className={s.buttom}
                   onClick={addNewComment}> Создать комментарий </button>
        </form>
    );
};
export default CommentsForm;