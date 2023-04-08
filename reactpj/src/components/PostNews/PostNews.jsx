import React, {useEffect, useMemo, useState} from 'react';
import s from './postNewsStyle.module.scss';
import Comments from "../Comments/Comments";




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




    return (

        <div >
            <div>
                <strong className={s.name}>
                        {props.title}
                </strong>
                <div className={s.contentText}>
                     {props.text}
                </div>
            </div>
            <div className={s.postline}>
                <p> {count}</p>
                <button className={s.buttom} onClick={increment} >Like</button>
                <button  className={s.buttom} onClick={discrement}>Dislike</button>
                <button  className={s.buttom}
                        onClick={openComments}>
                    <p>
                        {commentsInfo.show < 0
                            ? 'Открыть комментарии'
                            : 'Закрыть комментарии'
                        }
                    </p>
                </button>
            </div>

            {/*<div>*/}
            {/*    <button className={s.button}*/}
            {/*    onClick={openComments}>*/}
            {/*        <p>*/}
            {/*        {commentsInfo.show < 0*/}
            {/*            ? 'Открыть комментарии'*/}
            {/*            : 'Закрыть комментарии'*/}
            {/*        }*/}
            {/*        </p>*/}
            {/*    </button>*/}
            {/*</div>*/}


            {(commentsInfo.show > 0) &&
                <Comments
                    articleId={props.articleId}
                    commentsCount={props.commentsCount}
                    changeSize={props.commentsCount}
                />

            }

            <br/>
            <hr/>
        </div>


    );
};


export default PostNews;