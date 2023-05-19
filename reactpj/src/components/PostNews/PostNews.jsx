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

    function changeTitle() {

    }

    return (

        <div >
            <div>
                <div >
                    <strong className={s.name}>
                        {props.title}
                    </strong>
                    {/*<button className={s.buttom} onClick={changeTitle} > Изменить </button>*/}
                </div>
                <div className={s.contentText}>
                     {props.text}
                </div>
                <div className={s.contentText}>
                    {props.date}
                </div>
                <p> {props.currentLikes}</p>
                {/*так нормально сортируется, но при этом если менять число лайков то это переменная count, и с ней не работает*/}

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



            {(commentsInfo.show > 0) &&
                <Comments
                    articleId={props.articleId}
                    commentsCount={props.commentsCount}
                    // count={props.countLikes}
                    changeSize={props.commentsCount}
                />

                // &&
                // // <div>
                // //     <p> {count}</p>
                // //     <button className={s.buttom} onClick={increment} >Like</button>
                // //     <button  className={s.buttom} onClick={discrement}>Dislike</button>
                // // </div>
            }

            <br/>
            <hr/>
        </div>


    );
};


export default PostNews;