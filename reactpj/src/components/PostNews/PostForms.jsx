import React, {useState} from 'react';
import s from './postNewsStyle.module.scss';

export function PostForms ({create})  {

    const [content, setPost] = useState({title: '', text: ''})
    const addNewPost = (e) =>{
        e.preventDefault()
        const newpost = {
            ...content, articleId: Date.now(), currentLikes: 0, commentsCount: 0
        }
        create(newpost)
        setPost( {title: '', text: ''})

    }

    return (
        <form>
           <input className={s.commentInput} value={content.title}
                  onChange={e => setPost({...content, title: e.target.value})}/>
            <input className={s.commentInput} value={content.text}
                   onChange={e => setPost({...content, text: e.target.value})}/>
            <button className={s.buttom}
                onClick={addNewPost}> Создать карточку </button>
            <hr/>

        </form>

    );
};

export default PostForms;