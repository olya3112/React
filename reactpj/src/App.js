import './App.css';
import PostNews from "./components/PostNews/PostNews";
import data from "./assets/data/articles.json";
import React, {useEffect, useState} from 'react';
import com from "./assets/data/comments.json"

import PostForms from "./components/PostNews/PostForms";
import {getArticles} from "./assets/helpers/get-articles";
import MySelect from "./components/Select/MySelect";
import {createStore} from 'redux'
import {Provider} from "react-redux";
// import {rootReducer} from

const store = createStore();
function App() {



    const [content, setPosts] = useState(data)
    const [comments, setComments] = useState(com)

    const [selectedSorted, setSelectedSorted] = useState('')


    const createComment = (newcomment) =>{
        setComments([comments, newcomment])
    }

    useEffect(() => {
        getArticles().then(fetchedArticles => setPosts(fetchedArticles))
    }, [])


    const createPost = (newpost) =>{
        setPosts ( [...content, newpost])
    }

    const sortPosts = (sort) => {
        setSelectedSorted(sort)
        setPosts([...content].sort((a , b) => {
            if (b[sort] > a[sort]) return 1;
            else if (b[sort] < a[sort]) return -1;
            else return 0;
        }) )
    }


    // const sortByCountPosts = (sort) => {
    //     setSelectedSorted(sort)
    //     setPosts([...content].sort((a , b) => a[sort].localeCompare(b[sort])))
    // }


    return (
        <Provider store={store}>


        <div>
            <PostForms create={createPost}/>
            <div>
               <MySelect
                   value={selectedSorted}
                   onChange={sortPosts}
                   options={[
                       {value: 'date', name: 'По дате' },
                       {value: 'currentLikes', name: 'По лайкам' }
                   ]}
               />


                <hr/>
            </div>
            <div>
                { content ?
                    content.map(item =>
                        <PostNews articleId = {item.articleId}
                                  title = {item.title}
                                  text={item.text}
                                  currentLikes={item.currentLikes}
                                  count = {item.count}
                                  commentsCount={item.commentsCount}
                                  date = {item.date}/>

                    )
                    :
                    <div>
                        Content is loading...
                    </div>
                }
            </div>

        </div>

      </Provider>
    );
}

export default App;
