import React from 'react';
import vg from "../assets/tech_image.jpg";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai" 


const Home = () => {
  return (
    <>
        <div className="home" id="home">
            <main>
                <h1>MY WEBSITE</h1>
                <p>Solution to all your problem</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    We are your one and only solution to the tech problem you face every day.We are landing tech company  whose aim is to incress the problem solving ability in children.
                </p>

            </div>
        </div>

        <div className="home3" id="about">

            <div>
                <h1>Who we are ?</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat adipisci ducimus culpa nesciunt esse blanditiis voluptate impedit consequatur ullam, eligendi saepe nihil tenetur, repellendus facere dolores architecto quibusdam sint. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error vitae vel voluptatibus, at quaerat exercitationem itaque repudiandae dignissimos, dicta corrupti enim, illum neque doloremque. Deleniti maxime eligendi sed necessitatibus modi.</p>
            </div>
        </div>

        <div className="home4"  id="brands">

            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{
                        animationDelay:"0.3s",
                    }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div style={{
                        animationDelay:"0.5s",
                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>

                    <div style={{
                        animationDelay:"0.7s",
                    }}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>

                    <div style={{
                        animationDelay:"1s",
                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>

                </article>
            </div>
        </div>
    </>
  );
}

export default Home