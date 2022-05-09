import './About.css';
import Body_image from "./img/About_img.png";
import About_icon from "./img/About_icon.png";



function About() {
  
    return (
        <div className="main_body">
            <div className="main">
                <img src={Body_image} alt="body"></img>
                <h2>TSUBASA SUITA</h2>
                <p>IT IS A TSUBASU PORTFOLIO WEB SITE</p>
            </div>
            <div className="About">
                <h1>About</h1>
                <div className="About_aria">
                    <div className="About_app">
                        <img src={About_icon} alt="About"></img>
                        <div className="profile" id="flex_aria">
                            <h1>ようこそ</h1>
                            <p className="comment">自己紹介</p>
                            <p>ここは私、水田翼のWEBサイトです。
                                面白そうと思ったことはなんでもやっていく人間です。
                                CODEGYM ACADEMYやデータサイエンティストの講義を受講しました。
                                来年からは、某AD TECH企業で働きます。
                                そんなこんなでよろしくお願いします。</p>
                        </div>
                    </div>
                </div>
                <div className="career">
                    <h1>Career</h1>
                    <div className="creer_aria">
                        <p>2016 ~ 2019</p>
                        <p id="hight">徳島県立那賀高等学校</p>
                    </div>
                    <div className="creer_aria">
                        <p>2019 ~ 2023</p>
                        <p id="unive">東海大学 工学部</p>
                    </div>
                    <div className="creer_aria">
                        <p>2023 ~ 20xx</p>
                        <p id="com">某AD TECH企業 </p>
                    </div>
                    <div className="creer_aria">
                        <p>20xx ~ 20xx</p>
                        <p id="commig" >Commig soon...</p>
                    </div>
                </div>   
        </div>
    </div>
      
    );
  }
  
export default About;
