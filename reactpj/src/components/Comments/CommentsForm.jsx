import React, {useState} from "react";

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
        <form>
            <input value={comments.author}
                   onChange={e => setComment({...comments, author: e.target.value})}/>
            <input value={comments.text}
                   onChange={e => setComment({...comments, text: e.target.value})}/>
            <button onClick={addNewComment}> Создать карточку </button>
        </form>
    );
};
export default CommentsForm;