import React, {useState} from 'react';

export function CommentsForms ({createcomments})  {

    const [comments, setComment] = useState({author: '', text: ''})
    const addNewComment = (e) =>{
        e.preventDefault()
        const newcomment = {
            ...comments, articleId: Date.now()
        }
        createcomments(newcomment)
        setComment( {author: '', text: ''})

    }

    return (
        <form>
            <input value={comments.title}
                   onChange={e => setComment({...comments, author: e.target.value})}/>
            <input value={comments.text}
                   onChange={e => setComment({...comments, text: e.target.value})}/>
            <button onClick={addNewComment}> Добавить комментарий </button>
        </form>
    );
};

export default CommentsForms;