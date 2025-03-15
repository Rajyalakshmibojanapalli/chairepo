import { useEffect, useLayoutEffect, useState } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import "./process.css";
import Student from "../assets/student.png"

const Process = () => {
  useLayoutEffect(() => {
    let httpRequest;
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    gsap.to(".scroll-marquee ", {
      scrollTrigger: {
        trigger: ".scroll-marquee",
        scrub: true,
        start: "-800px 20%",
        end: "800px 50%",
      },
      marginLeft: "-1000px",
    });

    gsap.to(".who .ball-container", {
      scrollTrigger: {
        trigger: ".who .blocks-container",
        scrub: true,
        start: "top 50%",
        end: "bottom 50%",
      },
      ease: "linear",
      top: "100%",
    });
  });
  return (
    <section className="who">
    <div id="art-of-influence" />
    
    <div className="blocks-container">
      <div className="line-container"></div>
      <div className="ball-container" />
      <div className="block one">
        <div className="text">
          <h4 className="heading">1. create account </h4>
          <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus tenetur atque excepturi autem repudiandae nulla soluta explicabo culpa, quis numquam, porro mollitia quasi accusantium, iure ipsam quae blanditiis. 
          </p>
        </div>
        <img src="https://i.pinimg.com/736x/33/44/4c/33444ceea0812e54115799635d28f16e.jpg"  className="h-[200px] object-cover"   alt="INU_CHOOSE_INTERNATIONAL_EDUCATION" title="INU_CHOOSE_INTERNATIONAL_EDUCATION"/>
      </div>
      <div className="block two">
      <img src="https://i.pinimg.com/736x/33/44/4c/33444ceea0812e54115799635d28f16e.jpg"  className="h-[200px] object-cover"   alt="INU_CHOOSE_INTERNATIONAL_EDUCATION" title="INU_CHOOSE_INTERNATIONAL_EDUCATION"/>
        <div className="text">
          <h4 className="heading">
            2. Take a Eligibilty Test
          </h4>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reiciendis ipsam sit quaerat facere vitae modi dolores, cupiditate hic sapiente amet magnam. Cupiditate quam nemo dignissimos ratione praesentium qui nisi!
          </p>
        </div>
      </div>
      <div className="block three">
        <div className="text">
          <h4 className="heading">3. Apply for Free Education</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vero, reiciendis ipsam iure accusamus consequuntur aperiam exercitationem laboriosam? Minus tenetur 
          </p>
        </div>
        <img src="https://i.pinimg.com/736x/33/44/4c/33444ceea0812e54115799635d28f16e.jpg"  className="h-[200px] object-cover"   alt="INU_CHOOSE_INTERNATIONAL_EDUCATION" title="INU_CHOOSE_INTERNATIONAL_EDUCATION"/>
      </div>
      <div className="block four">
      <img src="https://i.pinimg.com/736x/33/44/4c/33444ceea0812e54115799635d28f16e.jpg"  className="h-[200px] object-cover"   alt="INU_CHOOSE_INTERNATIONAL_EDUCATION" title="INU_CHOOSE_INTERNATIONAL_EDUCATION"/>
        <div className="text">
          <h4 className="heading">4. Get Selected to study in uK for free</h4>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quae dolorem natus animi corrupti dicta quibusdam voluptas ab! 
          </p>
        </div>
      </div>
   
    </div>
  </section>
  );
};

export default Process;
