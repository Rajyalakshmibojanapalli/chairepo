import { useLayoutEffect, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { Award, BookOpen, Globe, Users } from "lucide-react";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline animation
    gsap.to(".benefits-ball-container", {
      scrollTrigger: {
        trigger: ".benefits-container",
        scrub: true,
        start: "top 50%",
        end: "bottom 50%",
      },
      ease: "linear",
      top: "100%",
    });

    // Card animations - fade up when in view
    const cards = document.querySelectorAll(".benefit-card");
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
    <section ref={sectionRef} className="why-choose-us-section mt-20">
      <div id="why-choose-us" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">Why Choose Us</h2>
          <p className="text-[#5a7a9a] max-w-2xl mx-auto">
            We offer unparalleled support and opportunities for students seeking free education in the UK
          </p>
        </div>

        <div className="benefits-container relative">
          {/* Timeline vertical line */}
          <div className="absolute left-[5px] md:left-1/2 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600 transform md:-translate-x-1/2"></div>

          {/* Ball container with drop shadow */}
          <div
            className="benefits-ball-container absolute left-[-4px] md:left-1/2 top-0 w-6 h-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transform md:-translate-x-1/2"
            style={{
              boxShadow: "0 0 5px 5px rgba(236, 180, 81, 0.3)",
            }}
          ></div>

          {/* Benefit 1 */}
          <div className="benefit-block one mb-20 md:flex md:flex-row">
            <div className="benefit-card ml-10 md:ml-0 md:w-[calc(50%-20px)] md:mr-20 bg-white p-8 rounded-lg shadow-lg border-b-4 border-amber-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-60 pointer-events-none"></div>
              <div className="flex flex-col w-fit mb-2">
                <div className="icon-wrapper bg-gradient-to-r from-amber-400 to-amber-600 p-4 w-fit rounded-lg shadow-md mb-4">
                  <Award className="h-10 w-10 text-[#ffff]" />
                </div>
                <h4 className="heading text-xl font-semibold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Proven Track Record
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
                Our success rate speaks for itself with hundreds of students successfully placed in top UK universities with full scholarships and financial support.
              </p>
            </div>
            <div className="md:w-[calc(50%-20px)]"></div>
          </div>

          {/* Benefit 2 */}
          <div className="benefit-block two mb-20 md:flex md:flex-row">
            <div className="md:w-[calc(50%-20px)]"></div>
            <div className="benefit-card ml-10 md:ml-20 md:w-[calc(50%-20px)] bg-white p-8 rounded-lg shadow-lg border-b-4 border-amber-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-60 pointer-events-none"></div>
              <div className="flex flex-col mb-2">
                <div className="icon-wrapper bg-gradient-to-r from-amber-400 to-amber-600 p-4 rounded-lg w-fit shadow-md mb-4">
                  <BookOpen className="h-10 w-10 text-[#fff]" />
                </div>
                <h4 className="heading text-xl font-semibold text-[#151c4b]">
                  Comprehensive Support
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
                From application to graduation, we provide end-to-end support including application guidance, visa assistance, pre-departure orientation, and ongoing mentorship.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="benefit-block three mb-20 md:flex md:flex-row">
            <div className="benefit-card ml-10 md:ml-0 md:w-[calc(50%-20px)] md:mr-20 bg-white p-8 rounded-lg shadow-lg border-b-4 border-amber-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-60 pointer-events-none"></div>
              <div className="flex flex-col mb-2">
                <div className="icon-wrapper bg-gradient-to-r from-amber-400 to-amber-600 p-4 rounded-lg w-fit shadow-md mb-4">
                  <Globe className="h-10 w-10 text-[#fff]" />
                </div>
                <h4 className="heading text-xl font-semibold text-[#151c4b]">
                  Exclusive Partnerships
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
                We have established exclusive relationships with UK universities and scholarship providers, giving our students access to opportunities not available elsewhere.
              </p>
            </div>
            <div className="md:w-[calc(50%-20px)]"></div>
          </div>

          {/* Benefit 4 */}
          <div className="benefit-block four md:flex md:flex-row">
            <div className="md:w-[calc(50%-20px)]"></div>
            <div className="benefit-card ml-10 md:ml-20 md:w-[calc(50%-20px)] bg-white p-8 rounded-lg shadow-lg border-b-4 border-amber-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-60 pointer-events-none"></div>
              <div className="flex flex-col mb-2">
                <div className="icon-wrapper bg-gradient-to-r from-amber-400 to-amber-600 p-4 rounded-lg w-fit shadow-md mb-4">
                  <Users className="h-10 w-10 text-[#fff]" />
                </div>
                <h4 className="heading text-xl font-semibold text-[#151c4b]">
                  Alumni Network
                </h4>
              </div>
              <p className="text-[#5a7a9a]">
                Join our thriving community of successful graduates who have secured prestigious careers after completing their free education in the UK through our program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;