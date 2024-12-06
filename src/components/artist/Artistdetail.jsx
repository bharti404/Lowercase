import React from "react";
import "./Artistdetail.css";
import Navbartoplogo from "../navbar/Navbartoplogo";
import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Drake from '../assests/Artists/drake.jpeg'

const Artistdetail = (props) => {

  const ArtistName = props.name;

  return (

    <div>
      <Navbartoplogo />

      <div className="breadcrumb_top">
        <p className="breadcribm_txt">
          LOWERCASE EVENTS/ <span>{`${ArtistName}`}</span>
        </p>
      </div>

      <div className="artist_detail_sect">
        <div className="artist_detail_sect_pic">
          <img src={Drake} alt="" />
        </div>

        <div className="artist_detail_sect_cont">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, culpa
            mollitia natus commodi unde excepturi velit, eligendi dolores
            recusandae et exercitationem ea libero magnam in, aspernatur
            doloribus eos. Commodi necessitatibus nemo temporibus aperiam,
            praesentium cupiditate aliquid debitis provident tenetur. Quod, hic
            exercitationem. Quidem cumque ea expedita sint nihil quasi, atque
            eveniet delectus, animi aperiam voluptate unde! Voluptas, doloribus.
            Eveniet quo a nemo perspiciatis expedita culpa voluptatibus placeat
            nulla maxime rerum sequi, molestiae saepe facere exercitationem,
            praesentium beatae. Sint reprehenderit, officiis, sequi blanditiis
            possimus natus ab sapiente sit inventore adipisci iusto odio ex ut
            quos placeat quibusdam eaque incidunt explicabo, veritatis nam? Quia
            ut adipisci dolorem? Harum sapiente laboriosam saepe praesentium
            culpa possimus eius quos veniam nobis dolorum. Ut, fuga labore
            necessitatibus quos porro incidunt odit fugit. Aspernatur saepe
            rerum, nesciunt sed necessitatibus quaerat similique odit eos iusto
            unde velit quod non laudantium error totam eligendi fugit nisi vero
            in harum maxime nihil esse reprehenderit! Facere aspernatur
            temporibus maiores ratione, itaque necessitatibus eaque. Tenetur,
            harum ex possimus repudiandae neque modi illum voluptatibus
            perferendis blanditiis suscipit magni esse asperiores beatae officia
            iste atque provident. Nostrum mollitia, nulla repellendus velit cum
            tempora suscipit accusantium iusto possimus, tenetur debitis a aut,
            nobis corrupti pariatur?
          </p>


          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, culpa
            mollitia natus commodi unde excepturi velit, eligendi dolores
            recusandae et exercitationem ea libero magnam in, aspernatur
            doloribus eos. Commodi necessitatibus nemo temporibus aperiam,
            praesentium cupiditate aliquid debitis provident tenetur. Quod, hic
            exercitationem. Quidem cumque ea expedita sint nihil quasi, atque
            eveniet delectus, animi aperiam voluptate unde! Voluptas, doloribus.
            Eveniet quo a nemo perspiciatis expedita culpa voluptatibus placeat
            nulla maxime rerum sequi, molestiae saepe facere exercitationem,
            praesentium beatae. Sint reprehenderit, officiis, sequi blanditiis
            possimus natus ab sapiente sit inventore adipisci iusto odio ex ut
            quos placeat quibusdam eaque incidunt explicabo, veritatis nam? Quia
            ut adipisci dolorem? Harum sapiente laboriosam saepe praesentium
            culpa possimus eius quos veniam nobis dolorum. Ut, fuga labore
            necessitatibus quos porro incidunt odit fugit. Aspernatur saepe
            rerum, nesciunt sed necessitatibus quaerat similique odit eos iusto
            unde velit quod non laudantium error totam eligendi fugit nisi vero
            in harum maxime nihil esse reprehenderit! Facere aspernatur
            temporibus maiores ratione, itaque necessitatibus eaque. Tenetur,
            harum ex possimus repudiandae neque modi illum voluptatibus
            perferendis blanditiis suscipit magni esse asperiores beatae officia
            iste atque provident. Nostrum mollitia, nulla repellendus velit cum
            tempora suscipit accusantium iusto possimus, tenetur debitis a aut,
            nobis corrupti pariatur?
          </p>
        </div>
      </div>

      <div className="artist_detail_vdo">
        {/* <video src=""></video> */}

        <iframe width="100%" height="600" src="https://www.youtube.com/embed/5FH534hKrs8?si=7VFdJIEZQc29OL3r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>


      <Prefooter />
      <Footer />
    </div>
  );
};

export default Artistdetail;
