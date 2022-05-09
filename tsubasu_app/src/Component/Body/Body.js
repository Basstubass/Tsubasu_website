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

    //スクロール処理
    const [isVisible, setIsVisible] = useState(false)

    // if (window.matchMedia('(max-width: 480px)').matches){

      const toggleVisibility_res = () => {
        console.log(window.innerWidth)
        window.scrollY > 40
          ? setIsVisible(true)
          : setIsVisible(false)
        }

      // const toggleVisibility = () => {
      //   console.log(window.scrollY)
      //   window.scrollY > 40
      //     ? setIsVisible(true)
      //     : setIsVisible(false)
      //   }
        
        useEffect(() => {
          if (714 <= window.innerWidth){
            console.log(window.innerWidth)
            console.log("Wow")
            console.log(window.scrollY)
            window.addEventListener('scroll', toggleVisibility_res)
            return () => window.removeEventListener('scroll', toggleVisibility_res)
          }
          else{
            return null
          }
        }, [])
    

    

    // useEffect(() => {
    //   window.addEventListener('scroll', toggleVisibility)
    //   return () => window.removeEventListener('scroll', toggleVisibility)
    // }, [])

  
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
                        <div className={isVisible ? "portfolio_post test_visible" : "portfolio_post test"} key={post.title}>
                          <h1>{post.title}</h1>
                          
                          <iframe width="560" height="315" src={post.text} title="YouTube video player" frameborder="0"  allowfullscreen></iframe>
                        </div>
                        ))}
                       
  
                        
                    </div>
                </div>
            </div>  
        </div>
      
    );
  }
  
export default Body;