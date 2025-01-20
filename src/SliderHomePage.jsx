import { useState } from "react";

const Slider = () => {
  const slides = [
    {
      img: "/image/PhoCard.jpg", // Fixed path for public folder
      title: "What is cyber security?",
      description:
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks",
    },
    {
      img: "/image/PhoCard1.jpg", // Fixed path for public folder
      title: "What is cyber security?",
      description:
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks",
    },
    {
      img: "/image/PhoCard2.jpg", // Fixed path for public folder
      title: "What is cyber security?",
      description:
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <div
          id="slider"
          className="flex w-full h-full transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative h-full">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-32 left-16 text-blue-200 w-[40rem]">
                <div className=" p-3 rounded-md">
                  <h2 className="text-3xl font-bold">{slide.title}</h2>
                  <p className="mt-2 text-lg">{slide.description}</p>
                </div>
                <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          id="prev"
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out"
        >
          &#8592;
        </button>
        <button
          id="next"
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Slider;
