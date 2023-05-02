import React from "react";
import style from "./Review.module.css";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";

export default function Review() {
  return (
    <>
      <h1 id={style.review_heading}>What Our Clients Says About Us </h1>
      <div className={style.reviewContainer}>
      
        <div className={style.bigDiv}>
          <div className={style.imageDiv}>
            <img src="https://images.pexels.com/photos/10937059/pexels-photo-10937059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          
          <div className={style.comments}>
            <h2>Jacob Jones</h2>
            <h5>Body Builder</h5>
            <h1>* * * * *</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quam eligendi, placeat vitae debitis est officia id natus nemo
              distinctio maiores nisi minus quibusdam corporis explicabo unde
              maxime sit animi quia et eaque provident laborum fuga? Ut
              explicabo ex error qui necessitatibus voluptates, tenetur dolor.
              Alias sequi vel nemo omnis!
            </p>
            <div className={style.icons_review}>
              <ImFacebook2 className={style.icon} />
              <GrInstagram className={style.icon} />
              <ImWhatsapp className={style.icon} />
            </div>
          </div>
          <button className={style.review_btn}>
            View All
          </button>
        </div>
      </div>
    </>
  );
}
