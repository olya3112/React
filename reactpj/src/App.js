import './App.css';
import PostNews from "./components/PostNews/PostNews";
import data from "./assets/data/articles.json";
import React, {useState} from 'react';
import com from "./assets/data/comments.json"
import Comments from "./components/Comments/Comments";
import PostForms from "./components/PostForms/PostForms";
import CommentsForms from "./components/Comments/CommentsForms";


function App() {


    const [content, setPosts] = useState(data)
    const [comments, setComment] = useState(com)

    const createComment = (newcomment) =>{
         setComment ( [...comments, newcomment])
    }

    const createPost = (newpost) =>{
        setPosts ( [...content, newpost])
    }


    return (
        <div>
            <PostForms create={createPost}/>

            <div>
                { content ?
                    content.map(item =>

                        <PostNews articleId = {item.articleId} title = {item.title} text={item.text} currentLikes={item.currentLikes} commentsCount={item.commentsCount}/>
                    )
                    :
                    <div>
                        Content is loading...
                    </div>
                }
            </div>
            <CommentsForms createcomments={createComment}/>
        </div>
    );
}

export default App;
