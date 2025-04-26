import { useLayoutEffect, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { UserPlus, FileText, GraduationCap, Award } from "lucide-react";

const Process = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline animation
    gsap.to(".ball-container", {
      scrollTrigger: {
        trigger: ".blocks-container",
        scrub: true,
        start: "top 50%",
        end: "bottom 50%",
      },
      ease: "linear",
      top: "100%",
    });

    // Card animations - fade up when in view
    const cards = document.querySelectorAll(".process-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="process-section  mt-2">
      <div id="art-of-influence" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#5a7a9a] max-w-2xl mx-auto">
            Follow these simple steps to begin your journey towards free
            education in the UK
          </p>
        </div>

        <div className="blocks-container relative">
          {/* Timeline vertical line */}
          <div className="absolute left-[5px] md:left-1/2 h-full w-1 bg-[#69bfef] transform md:-translate-x-1/2"></div>

          {/* Ball container with drop shadow */}
          <div
            className="ball-container absolute left-[-4px] md:left-1/2 top-0 w-6 h-6 bg-[#151c4b] rounded-full transform md:-translate-x-1/2"
            style={{
              boxShadow: "0 0 5px 5px rgba(105, 191, 239, 0.3)",
            }}
          ></div>

          {/* Step 1 */}
          <div className="block one mb-20 md:flex md:flex-row">
            <div className="process-card text ml-10 md:ml-0 md:w-[calc(50%-20px)] md:mr-20 bg-white p-8 rounded-lg shadow-lg border-b-4 border-[#69bfef]">
              <div className="flex flex-col w-fit  mb-2">
                <div className="icon-wrapper bg-[#151c4b] p-4 w-fit  rounded-lg shadow-md mb-4">
                  <UserPlus className="h-10 w-10 text-[#ffff]" />
                </div>
                <h4 className="heading text-xl font-semibold text-[#151c4b] ">
                  Step 1: Register with Rs. 888
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
                Secure your spot and get a unique registration number.
              </p>
            </div>
            <div className="md:w-[calc(50%-20px)]"></div>
          </div>

          {/* Step 2 */}
          <div className="block two mb-20 md:flex md:flex-row">
            <div className="md:w-[calc(50%-20px)]"></div>
            <div className="process-card text ml-10 md:ml-20 md:w-[calc(50%-20px)] bg-white p-8 rounded-lg shadow-lg border-b-4 border-[#69bfef]">
              <div className="flex flex-col  mb-2">
                <div className="icon-wrapper bg-[#151c4b] p-4 rounded-lg w-fit shadow-md mb-4">
                  <FileText className="h-10 w-10 text-[#fff]" />
                </div>
                <h4 className="heading text-xl font-semibold text-[#151c4b] ">
                  Step 2: Take a Quiz (15-20 Questions)
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
                2.1 Questions based on study in the UK (see sample below).
                2.2 Designed to prepare and assess your intent and knowledge.

              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="block three mb-20 md:flex md:flex-row">
            <div className="process-card text ml-10 md:ml-0 md:w-[calc(50%-20px)] md:mr-20 bg-white p-8 rounded-lg shadow-lg border-b-4 border-[#69bfef]">
              <div className="flex flex-col  mb-2">
                <div className="icon-wrapper bg-[#151c4b] p-4 rounded-lg w-fit shadow-md mb-4">
                  <GraduationCap className="h-10 w-10 text-[#fff] " />
                </div>
                <h4 className="heading text-xl font-semibold text-[#151c4b] ">
                Step 3: Enter Lottery Draw 
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
              Every intake, 3 lucky winners are selected via a transparent lottery system. 
              </p>
            </div>
            <div className="md:w-[calc(50%-20px)]"></div>
          </div>

          {/* Step 4 */}
          <div className="block four md:flex md:flex-row">
            <div className="md:w-[calc(50%-20px)]"></div>
            <div className="process-card text ml-10 md:ml-20 md:w-[calc(50%-20px)] bg-white p-8 rounded-lg shadow-lg border-b-4 border-[#69bfef]">
              <div className="flex flex-col  mb-2">
                <div className="icon-wrapper bg-[#151c4b] p-4 rounded-lg w-fit shadow-md mb-4">
                  <Award className="h-10 w-10 text-[#fff]" />
                </div>
                <h4 className="heading text-xl font-semibold text-[#151c4b] ">
                Step 4: Full Sponsorship 
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
              We pay their tuition, application, and visa fees for a UK master’s course. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
