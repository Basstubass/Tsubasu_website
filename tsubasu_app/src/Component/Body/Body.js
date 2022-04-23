import React from 'react';
import { useEffect, useState } from "react";
import db from "../../firebase";
import {collection,getDocs, onSnapshot} from "firebase/firestore";

import './Body.css';
import Body_image from "./img/Body_img.png";

function Body() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      //データベースから取得
      const postData = collection(db, "posts")
      getDocs(postData).then((snapShot) => {
        // console.log(snapShot.docs.map((doc) => ({...doc.data()})))
        setPosts(snapShot.docs.map((doc) => ({ ...doc.data() }))) 
      });
  
      //リアルタイム処理
      onSnapshot(postData, (posts) => {
        setPosts(posts.doc.map((doc) => ({...doc.data() })));
      });
    }, []);
  
    return (
        <div className="main_body">
            <div className="main">
                <img src={Body_image} alt="body"></img>
                <h2>TSUBASA SUITA</h2>
                <p>IT IS A TSUBASU PORTFOLIO WEB SITE</p>
            </div>
            <div className="portfolio">
                <h1>portfolio</h1>
                
                {/* ポートフォリオ投稿画面 */}
                <div className="portfolio_aria">
                    <div className="portfolio_app">
                        {posts.map((post) => (
                        <div className="portfolio_post" key={post.title}>
                            <h1>{post.title}</h1>
                            <p>{post.text}</p>
                        </div>
                        ))}
                    </div>
                </div>


            </div>  
        </div>
      
    );
  }
  
export default Body;

