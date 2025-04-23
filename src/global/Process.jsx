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
                  1. Create Account
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
                Get started on your journey by creating a personalized account.
                This allows us to understand your academic background and career
                goals to provide you with the most relevant opportunities.
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
                  2. Take an Eligibility Test
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
                Complete our comprehensive assessment to determine your
                eligibility for various international education opportunities.
                This helps us match you with programs that suit your academic
                profile.
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
                  3. Apply for Free Education
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
                Submit your application for scholarship programs and
                tuition-free opportunities. Our team will guide you through each
                step of the application process to maximize your chances of
                success.
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
                  4. Get Selected to Study in UK for Free
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
                Once selected, we'll support you through the visa process,
                pre-departure orientation, and provide ongoing assistance during
                your studies abroad. Your journey to free education in the UK
                begins here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
