import './App.css';
import PostNews from "./components/PostNews/PostNews";
import data from "./assets/data/articles.json";
import React, {useEffect, useState} from 'react';
import com from "./assets/data/comments.json"

import PostForms from "./components/PostForms/PostForms";
import {getArticles} from "./assets/helpers/get-articles";



function App() {


    const [content, setPosts] = useState(data)
    const [comments, setComments] = useState(com)

    const createComment = (newcomment) =>{
        setComments([comments, newcomment])
    }

    useEffect(() => {
        getArticles().then(fetchedArticles => setPosts(fetchedArticles))
    }, [])


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

        </div>
    );
}

export default App;
