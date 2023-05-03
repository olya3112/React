import React, {useEffect, useMemo, useState} from 'react';
import {getComments} from "../../assets/helpers/get-comments-by-article";
import CommentsForm from "./CommentsForm";
import s from './commentsStyle.module.scss';




export function Comments (props)  {


    const [comments, setComments] = useState(null)
    const [commentsSize, setCommentsSize] = useState(props.commentsCount)


    useEffect(() => {
        getComments(props.articleId).then(fetchedComments => {
            setComments(fetchedComments)
            setCommentsSize(props.commentsCount)
        })
    }, [])




    function deleteComment(autherid){
        setComments([...comments.filter(({id}) => id !== autherid)])
        setCommentsSize(commentsSize - 1)
    }


    const createComment = (newcomment) =>{
        setComments([...comments, newcomment, ])
        setCommentsSize(commentsSize + 1)
    }



    return (
        <div className={s.comments}>

            <CommentsForm create={createComment}/>
            <h3>Колличество комментариев к записи: {commentsSize} </h3>

            { comments ?
                comments.map(item =>

                    <div>
                         <div className={s.author}> {item.author} </div>
                         <div className={s.commentText}> {item.text} </div>
                         <div className={s.commentText}> {item.date}</div>
                        <button className={s.buttom} onClick= {() => deleteComment(item.id)}> удалить комментарий</button>
                    </div>)
                :
                <div>
                    Comments is loading...
                </div>

            }

        </div>

    );
};

export default Comments;