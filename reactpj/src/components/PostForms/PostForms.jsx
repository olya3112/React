import React, {useState} from 'react';

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
           <input value={content.title}
                  onChange={e => setPost({...content, title: e.target.value})}/>
            <input value={content.text}
                   onChange={e => setPost({...content, text: e.target.value})}/>
            <button onClick={addNewPost}> Создать карточку </button>
        </form>
    );
};

export default PostForms;