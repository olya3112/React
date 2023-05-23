import React, {useEffect, useMemo, useState} from 'react';
import {getComments} from "../../assets/helpers/get-comments-by-article";
import CommentsForm from "./CommentsForm";
import s from './commentsStyle.module.scss';
import MySelect from "../Select/MySelect";




export function Comments (props)  {

    const [counts, setCounts] = useState(props.countLikes)

    const [comments, setComments] = useState(null)
    const [commentsSize, setCommentsSize] = useState(props.commentsCount)

    const [selectedSorted, setSelectedSorted] = useState('')



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

    const sortComments = (sort) => {
        setSelectedSorted(sort)
        setComments([...comments].sort((a , b) => {
            if (b[sort] > a[sort]) return 1;
            else if (b[sort] < a[sort]) return -1;
            else return 0;
        }) )
    }

    function increment(){
        setCounts( counts+1)
        props.countLikes = counts

    }
    function discrement(){
        setCounts(  counts -1 )
        props.countLikes = counts
    }


    return (
        <div className={s.comments}>

            <CommentsForm create={createComment}/>
            <h3>Колличество комментариев к записи: {commentsSize} </h3>
            <div>
                <MySelect
                    value={selectedSorted}
                    onChange={sortComments}
                    options={[
                        {value: 'date', name: 'По дате' },
                        {value: 'countLikes', name: 'По лайкам' }
                    ]}
                />


                <hr/>
            </div>

            { comments ?
                comments.map(item =>

                    <div>
                         <div className={s.author}> {item.author} </div>
                         <div className={s.commentText}> {item.text} </div>
                         <div className={s.commentText}> {item.date}</div>
                         <div className={s.commentText}> {item.countLikes}</div>
                         <div className={s.commentline}>
                            <p> {counts}</p>
                             {/*Save me, что я не прокидываю, почему nun? */}
                            <button className={s.buttom} onClick={increment} >Like</button>
                            <button  className={s.buttom} onClick={discrement}>Dislike</button>
                         </div>
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