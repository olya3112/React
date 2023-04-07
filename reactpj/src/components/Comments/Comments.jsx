import React, {useEffect, useMemo, useState} from 'react';
import {getComments} from "../../assets/helpers/get-comments-by-article";




export function Comments ({articleId, commentsCount})  {

    const [comments, setComments] = useState(null)
    const [commentsSize, setCommentsSize] = useState(commentsCount)


    useEffect(() => {
        getComments(articleId).then(fetchedComments => {
            setComments(fetchedComments)
            setCommentsSize(commentsCount)
        })
    }, [])

    


    return (
        <div>
            { comments ?
                comments.map(item =>

                    <li >
                         <div > {item.author} </div>
                         <div > {item.text} </div>
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