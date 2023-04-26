import React from "react";
import style from "./Classes.module.css";
import "./Classes.module.css";
import ClassesCard from "./ClassesCard";

export default function Classes() {
  return (
    <div className={style.classesContainer}>
      <div className={style.classesImage}>
        <img
          src="https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image-1"
        />
      </div>
      <div className={style.classesTiming}>
        <h1> Classes Timing & Programms</h1>
        <p>
          Impactful and effective wellbeing programs ranging from corporate <br/>pass
          to fun fitness classes at workplace to fun challenges & rewards.
        </p>
      </div>

      <br />
      <br />
      <div className={style.classesCard}>
        <ClassesCard />
      </div>
      <br />
      <br />
    </div>
  );
}
