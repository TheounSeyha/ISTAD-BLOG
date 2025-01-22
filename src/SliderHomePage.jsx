import { useState } from "react";

const Slider = () => {
  const slides = [
    {
      img: "/image/PhoSlider.jpg", // Fixed path for public folder
      title: "What is Soft Skill?",
      description:
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.",
    },
    {
      img: "/image/PhoSlider1.jpg", // Fixed path for public folder
      title: "Why is Cybersecurity Important?",
      description:
        "Cybersecurity ensures the safety of sensitive information, personal data, and prevents financial losses.",
    },
    {
      img: "/image/PhoSlider2.jpg", // Fixed path for public folder
      title: "How Can You Stay Protected?",
      description:
        "Implement strong passwords, use firewalls, and stay informed about potential threats to stay secure.",
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
    <section className="relative z-[999] w-full h-screen overflow-hidden bg-gray-900">
      <div className="relative w-full h-full">
        <div
          id="slider"
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
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
              <div className="absolute bottom-20 md:bottom-32 left-8 md:left-16 text-blue-600 w-[90%] md:w-[40rem] ">
                <div className=" bg-white/30 backdrop-blur-md border border-white/50 rounded-lg shadow-lg">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2 ">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-lg mb-4 ">
                    {slide.description}
                  </p>
                </div>

                <button className="px-6 py-3 bg-orange-500 text-black text-sm md:text-base rounded-lg hover:bg-orange-600 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-black bg-blue-400 bg-opacity-50 p-3 rounded-full hover:bg-sky-500 transition duration-300 ease-in-out z-10"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-black bg-blue-400 bg-opacity-50 p-3 rounded-full hover:bg-sky-500 transition duration-300 ease-in-out z-10"
        >
          &#8594;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-500"
              } transition duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
