import React, {useEffect, useMemo, useState} from 'react';
import {getComments} from "../../assets/helpers/get-comments-by-article";
import CommentsForm from "./CommentsForm";




export function Comments ({articleId, commentsCount})  {

    const [comments, setComments] = useState(null)
    const [commentsSize, setCommentsSize] = useState(commentsCount)


    useEffect(() => {
        getComments(articleId).then(fetchedComments => {
            setComments(fetchedComments)
            setCommentsSize(commentsCount)
        })
    }, [])

    // const createComments = useMemo(
    //     ()=>{
    //         getComments(articleId).then(fetchedComments => {
    //             setComments(fetchedComments)
    //             setCommentsSize(commentsCount)
    //         })
    //     },
    //     [setCommentsSize, commentsCount, comments]
    // )



    function deleteComment(autherid){
        setComments([...comments.filter(({id}) => id !== autherid)])
        setCommentsSize(commentsSize - 1)
    }


    const createComment = (newcomment) =>{
        setComments([... comments, newcomment])
        setCommentsSize(commentsSize + 1)
    }


    return (
        <div>

            <CommentsForm create={createComment}/>
            <h3>Колличество комментариев к записи: {commentsSize} </h3>

            { comments ?
                comments.map(item =>

                    <li >
                        <div> {item.id} </div>
                         <div > {item.author} </div>
                         <div > {item.text} </div>
                        <button onClick= {() => deleteComment(item.id)}> удалить комментарий</button>
                    </li>)
                :
                <div>
                    Comments is loading...
                </div>

            }

        </div>

    );
};

export default Comments;