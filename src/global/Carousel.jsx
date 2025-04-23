import React, { useState, useRef, useEffect } from "react";

const Carousel = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  // Default items if none provided
  const carouselItems =
    items.length > 0
      ? items
      : [
          { id: 1, title: "university 1" },
          { id: 2, title: "university 2" },
          { id: 3, title: "university 3" },
          { id: 4, title: "university 4" },
          { id: 5, title: "university 5" },
          { id: 6, title: "university 6" },
          { id: 7, title: "university 7" },
          { id: 8, title: "university 8" },
        ];

  // Check if mobile on initial render and when window is resized
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Calculate items per view based on screen size
  const itemsPerView = isMobile ? 1 : 4;

  // Calculate total number of pages
  const totalPages = Math.ceil(carouselItems.length / itemsPerView);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Determine if we should change slides based on drag distance
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }

    setDragOffset(0);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="w-full max-w-6xl mx-auto px-4"
      style={{ backgroundColor: "#eff0f0" }}
    >
      <div
        ref={carouselRef}
        className="relative overflow-hidden rounded-lg shadow-lg"
        style={{ height: "350px" }}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${
              -(activeIndex * 100) / totalPages
            }%) translateX(${dragOffset}px)`,
            width: `${totalPages * 100}%`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="flex-shrink-0 w-full h-full flex gap-4 "
              style={{ width: `${100 / totalPages}%` }}
            >
              {carouselItems
                .slice(pageIndex * itemsPerView, (pageIndex + 1) * itemsPerView)
                .map((item) => (
                  <div
                    key={item.id}
                    className="h-full flex flex-col items-center justify-center text-white font-bold p-2 rounded-md shadow-md"
                    style={{
                      width: `${100 / itemsPerView}%`,
                      backgroundColor: "#151c4b",
                      borderLeft: "4px solid #69bfef",
                    }}
                  >
                    <h3 className="text-xl md:text-2xl">{item.title}</h3>
                    <button
                      className="text-white px-5 py-2 rounded-md transition-all duration-300 mt-4 hover:shadow-lg"
                      style={{
                        backgroundColor: "#69bfef",
                        border: "1px solid #5a7a9a",
                        boxShadow: "0 2px 4px rgba(106, 122, 154, 0.3)",
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 hover:bg-opacity-75 rounded-full p-1 md:p-2 focus:outline-none focus:ring-2 transition-all z-10"
          onClick={handlePrev}
          aria-label="Previous slide"
          style={{
            backgroundColor: "#5a7a9a",
            color: "#eff0f0",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover/button:rotate-12 transition-transform duration-300"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </button>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-opacity-75 rounded-full p-1 md:p-2 focus:outline-none focus:ring-2 transition-all z-10"
          onClick={handleNext}
          aria-label="Next slide"
          style={{
            backgroundColor: "#5a7a9a",
            color: "#eff0f0",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover/button:-rotate-12 transition-transform duration-300"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all focus:outline-none ${
              index === activeIndex ? "w-6" : "hover:bg-opacity-75 w-2"
            }`}
            style={{
              backgroundColor: index === activeIndex ? "#151c4b" : "#5a7a9a",
            }}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="flex justify-center items-center mt-2">
        <div className="text-sm font-medium" style={{ color: "#151c4b" }}>
          {activeIndex + 1} / {totalPages}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
