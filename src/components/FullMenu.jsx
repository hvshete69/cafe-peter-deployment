import React from "react";
import image1 from "../cafe-peter-menu/image-001.png";
import image2 from "../cafe-peter-menu/image-002.png";
import image3 from "../cafe-peter-menu/image-003.png";
import image4 from "../cafe-peter-menu/image-004.png";
import image5 from "../cafe-peter-menu/image-005.png";
import image6 from "../cafe-peter-menu/image-006.png";
import image7 from "../cafe-peter-menu/image-007.png";
import image8 from "../cafe-peter-menu/image-008.png";
import image9 from "../cafe-peter-menu/image-009.png";
import image10 from "../cafe-peter-menu/image-010.png";
import image11 from "../cafe-peter-menu/image-011.png";
import image12 from "../cafe-peter-menu/image-012.png";
import image13 from "../cafe-peter-menu/image-013.png";
import image14 from "../cafe-peter-menu/image-014.png";
import image15 from "../cafe-peter-menu/image-015.png";
import image16 from "../cafe-peter-menu/image-016.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const FullMenu = () => {
  return (
    <Carousel autoPlay>
      {/* <div style={{display:'flex', flexWrap:'no-wrap', background:'#000000'}}> */}
      <div>
        <img
          src={image1}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image2}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image3}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image4}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image5}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image6}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image7}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image8}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image9}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image10}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image11}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image12}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image13}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image14}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image15}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      <div>
        <img
          src={image16}
          alt=""
          style={{
            objectFit: "contain",

            marginTop: "0px",
          }}
        />
      </div>
      {/* </div> */}
    </Carousel>
  );
};

export default FullMenu;
