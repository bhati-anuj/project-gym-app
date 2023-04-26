import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import "./Home.module.css";
import { Data } from "../Home/Data";
import Tranning from "../Tranning";
import Membership from "../Membership";


export default function Home() {
  const [data, setData] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setData((data) => (data + 1) % Data.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [setData]);

  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.poster}>
          <img className={style.posterImg} src={Data[data]} alt="" />
        </div>
        <div className={style.homeAbout}>
          <div className={style.aboutBox}>
            <img
              src="https://images.pexels.com/photos/4164512/pexels-photo-4164512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width="100%"
            />
          </div>
          <div className={style.aboutBox}>
            <h1>About Us</h1>
            <p>
              ybwhidwhddwjd wjudwjnd jhduihiuwdh kjbugdwuig jbugdwuiui
              dwuihiudwidd Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Veniam consequatur possimus eos maxime cumque sint sit,
              molestiae quam! Alias ad eligendi dolorem Et sunt dolor eum! Qui,
              debitis nesciunt eos id quos numquam .....
            </p>

            <button className="btn btn-danger btn-lg" data-bs-toggle="button">
              Learn More
            </button>
          </div>
          <div className={style.aboutBox}>
            <h1>Why Choose Us?</h1>
            <ul>
              <li>
                <h2>Consultations with experts</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
              </li>
              <li>
                <h2>Best workout Facilities</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
              </li>
            </ul>
          </div>
          <div className={style.aboutBox}>
            <img
              src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width="100%"
            />
          </div>
        </div>

        <div className={style.fitnessStudio}>
          <div className={style.fitnessBox}>
            <h1>Explore our Fitness Studio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              laborum soluta dolores reprehenderitos atque.
            </p>
            <button className="btn btn-danger btn-lg">Explore Now</button>
          </div>
          <div className={style.fitnessBox}>
            <img src="https://images.pexels.com/photos/13106586/pexels-photo-13106586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <img src="https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </div>


        <Membership />
        {/* <Tranning /> */}
      </div>
    </>
  );
}
