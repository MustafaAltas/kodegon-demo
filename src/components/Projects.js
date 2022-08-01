import React from "react";
import { BsBox } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { products } from "../helper/contains";

function Projects() {
  return (
    <div className="projects">
      <h2>Suspendisse Tempus</h2>
      <section className="project-div">
        {products?.map((item) => {
          return (
            <div className="project">
              <img
                src={item.img}
                alt=""
              />
              <div className="project-content">
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.author}</p>
                </div>
                <div>
                  <p>
                    {item.text}
                  </p>
                </div>
                <div className="project-footer">
                  <div>
                    <BsBox />
                    <p>{item.date}</p>
                  </div>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
