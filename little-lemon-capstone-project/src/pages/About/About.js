import React from "react";
import "./About.css";
import Picture1 from "../../assets/aboutus1.jpg";
import Picture2 from "../../assets/aboutus2.jpg";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1 className="text-center">About Us</h1>
        <h2 className="lemon-primary-lemon">Little Lemon</h2>
        <h3 className="lemon-primary-dark">Chicago</h3>
        <div className="text-content">
          <p>
            Yorem ipsum dolor sit amet consectetur, adipisicing elito. Oy sequi ipsam aspernatur assumenda praesentium eum accusamus,
            consequatur voluptatibus voluptate, quibusdam aliquam odio officiis animi nobis commodi dicta quon. Corrupti praesentium fuga
            perferendis, laborum provident exercitationem qui odio sed incidunt dolores culpa reprehenderit. Soluta, tenetur. Expedita quibusdam
            omnis facilis animi repellon.
          </p>
          <p>
            Hworem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur laborum corporis facilis molestias asperiores illum dicta
            dolorem, quibusdam praesentium consectetur id delectus, rem debitis laborean.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae reprehenderit quod, veniam pariatur quaeho</p>
        </div>
      </div>
      <div className="pd">
        <div className="my-3">
          <img src={Picture1} alt="about-us-1" className="about-pic img-fluid" />
        </div>
        <div>
          <img src={Picture2} alt="about-us-2" className="about-pic img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default About;
