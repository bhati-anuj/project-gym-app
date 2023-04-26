import React from "react";
import style from "./Blogs.module.css";
import "./Blogs.module.css";
import BlogsCard from "./BlogsCard";

export default function Blogs() {
  return (
    <>
      <div className={style.blogContainer}>
        <div className={style.banner}>
          <img
            src="https://images.pexels.com/photos/4397841/pexels-photo-4397841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
          />
        </div>
        <div className={style.searchBar}>
          <h1>Here we Go </h1>

          <div className={style.search}>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <br/>
        <br/>
        <h2>Popular Article</h2>
        <div className={style.popularArticle}>
          
          <div className={style.popularBox}>
            <img src="https://images.pexels.com/photos/4164512/pexels-photo-4164512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
            width="100%"
            />
          </div>
          <div className={style.popularBox}>
            <h1>Name of the Article</h1>
            <p>ybwhidwhddwjd wjudwjnd jhduihiuwdh kjbugdwuig jbugdwuiui   dwuihiudwidd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam consequatur possimus eos maxime cumque sint sit, molestiae quam! Alias ad eligendi dolorem  Et sunt dolor eum! Qui, debitis nesciunt eos id quos numquam exercitationem, quis ut porro unde voluptates, sit necessitatibus ipsam ipsum magnam culpa tenetur excepturi aspernatur esse. Eveniet illum pariatur quisquam! Sunt voluptate nulla fuga aspernatur eos magni? Quam repellendus, minus nemo excepturi rem obcaecati odio maxime veritatis.....</p>
            <h6>11 April 2023</h6>
            <h6>Albet</h6>
            <button className="btn btn-danger btn-lg" data-bs-toggle="button">Read Article</button>
          </div>
          <div className={style.popularBox}>
          <h1>Heading of the article</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit beatae similique possimus enim aliquam quos id, molestiae quod iure dicta dolorum modi fugiat fuga commodi ea maxime explicabo ipsa dolore quaerat consequatur eos hic velit. Quis qui repudiandae cupiditate repellendus corporis ipsam, explicabo  ab quisquam. Iste doloribus quia similique sed repellendus totam voluptates nam harum atque rerum eum, id minus praesentium nihil impedit blanditiis eligendi aspernatu....</p>
            <h6>11 April 2023</h6>
            <h6>Albet</h6>
            <button className="btn btn-danger btn-lg" data-bs-toggle="button" >Read Article</button>
          </div>
          <div className={style.popularBox}>
           <img src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           width="100%" />
          </div>
        </div>

        <div className={style.recentArticle} >
          <h2>Recent Articles</h2>
          <BlogsCard />
        </div>
      </div>
    </>
  );
}
