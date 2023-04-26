import React from "react";
import style from "./Membership.module.css";
import "./Membership.module.css";

export default function Membership() {
  return (
    <>
      <div className={style.membership_container}>
        <div className={style.container_1}>
          <h1>Our Special Packages</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla, adipisci error provident reprehenderit accusamus!
          </p>
        </div>
        <div className={style.container_2}>
          <div className={style.pack}>
            <h1>Premimum</h1>
            <ul>
              <li>
                <span class={style.checkmark}>
                  Unlimited club access 24 hours
                </span>
              </li>
              <li>
                <span class={style.checkmark}>Group Attendance</span>
              </li>
              <li>
                <span class={style.cross}>Gym Visits</span>
              </li>
              <li>
                <span className={style.cross}>Visit to the bath complex</span>
              </li>
              <li>
                <span className={style.cross}>Gym,fight club</span>
              </li>
            </ul>
            <h4 className={style.price}>₹999/month</h4>
            <button className="btn btn-danger btn-lg" align-item="center">
              Choose
            </button>
          </div>
          <div className={style.pack}>
            <h1>Silver</h1>
            <ul>
              <li>
                <span class={style.checkmark}>
                  Unlimited club access 24 hours
                </span>
              </li>
              <li>
                <span class={style.checkmark}>Group Attendance</span>
              </li>
              <li>
                <span class={style.cross}>Gym Visits</span>
              </li>
              <li>
                <span className={style.cross}>Visit to the bath complex</span>
              </li>
              <li>
                <span className={style.checkmark}>Gym,fight club</span>
              </li>
            </ul>
            <h4 className={style.price}>₹1499/month</h4>
            <button className="btn btn-danger btn-lg" align-item="center">
              Choose
            </button>
          </div>

          <div className={style.pack}>
            <h1>Gold</h1>
            <ul>
              <li>
                <span class={style.checkmark}>
                  Unlimited club access 24 hours
                </span>
              </li>
              <li>
                <span class={style.checkmark}>Group Attendance</span>
              </li>
              <li>
                <span class={style.checkmark}>Gym Visits</span>
              </li>
              <li>
                <span className={style.checkmark}>Visit to the bath complex</span>
              </li>
              <li>
                <span className={style.checkmark}>Gym,fight club</span>
              </li>
            </ul>
            <h4 className={style.price}>₹1999/month</h4>
            <button className="btn btn-danger btn-lg" align-item="center">
              Choose
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
