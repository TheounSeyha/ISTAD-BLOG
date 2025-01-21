import React from 'react'

export default function About() {
  return (
    <>
      <main className="mx-10 lg:mx-[100px] mt-10">
        <section className="lg:grid grid-cols-2 bg-[#1a6aff] rounded-2xl p-6 text-white my-8">
          <div className="content-center space-y-4">
            <h2 className="text-2xl lg:text-[32px]">Education and Technology Blog</h2>
            <p className="text-sm lg:text-base">
              Get knowledge about education and technology from our site
              Postpen.We'll connect and bring you many experiences around the
              world from different people. You can also be the one who share those
              experiences to other by joining us through sign up button. Pick your
              pen, write what you want to share and post in our website.
            </p>
          </div>
          <img
            src="/Asset/business,-entrepreneurship-and-growth.png"
            alt=""
            className="w-full h-full"
          />
        </section>
        <h2 className="text-2xl lg:text-[32px] text-center">Join Us</h2>
        <section className="block md:flex mb-10 mt-5">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="lg:grid grid-cols-2 bg-[#FF5983] text-white rounded-2xl p-6">
              <div>
                <h3 className="text-xl lg:text-2xl mb-4">Learn</h3>
                <p className="text-sm lg:text-base">
                  Explore something new from other users who has share what they
                  know about education and technology.
                </p>
              </div>
              <img
                src="/Asset/person-learning-online.png"
                alt="person-learning-online" className="lg:w-full lg:h-full lg:pt-10"
              />
            </div>
            <div className="lg:grid grid-cols-2 bg-[#BF9DFF] text-white rounded-2xl p-6">
              <div c>
                <h3 className="text-xl lg:text-2xl mb-4">Share</h3>
                <p className="text-sm lg:text-base">
                  Write your own blog in the categories that you like post it to
                  share with everyone. Everything you know might can help the
                  others.
                </p>
              </div>
              <img src="/Asset/administrator-working-at-desk.png" alt="" className="lg:w-full lg:h-full lg:pt-10" />
            </div>
          </div>
        </section>
        <h2 className="text-2xl lg:text-[32px] text-center">How?</h2>
        <section className="md:grid grid-cols-2 gap-[100px] bg-[#ff7f50] rounded-2xl py-6 px-6 text-white list-none mb-10 mt-5 lg:px-14">
          <img src="/Asset/person-working-online.png" alt="" className="place-self-center" />
          <div className="place-self-center">
            <h3 className="text-xl lg:text-2xl mb-2">To Learn</h3>
            <div className="text-sm lg:text-base">
              <li><i className="fa-solid fa-circle-check"></i> Sign up or Login</li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Navigate through blog page
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Click on the it and read
              </li>
              <li><i className="fa-solid fa-circle-check"></i> Like or Commend</li>
            </div>
            <h3 className="text-xl lg:text-2xl my-2">To Share</h3>
            <div className="text-sm lg:text-base">
              <li><i className="fa-solid fa-circle-check"></i> Sign up or Login</li>
              <li><i className="fa-solid fa-circle-check"></i> Create new post</li>
              <li><i className="fa-solid fa-circle-check"></i> Edit text</li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Add hastag and click on
                Public to post
              </li>
            </div>
          </div>
        </section>
        <h2 className="text-2xl lg:text-[32px] text-center">Team</h2>
        <p className="text-center text-[#383838]">This project could not be done if there's no our members.</p>
        <section className="mx-auto mb-10 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="h-4/5">
                <img src="/Asset/liza.jpg" alt="Heng Liza" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/5 p-2 flex justify-center items-center">
                <h3 className="text-center text-lg font-semibold">Heng Liza</h3>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="h-4/5">
                <img src="/Asset/bothy.jpg" alt="So Bothy" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/5 p-2 flex justify-center items-center">
                <h3 className="text-center text-lg font-semibold">So Bothy</h3>
              </div>
            </div>
        
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="h-4/5">
                <img src="/Asset/panha.jpg" alt="Pech Panha" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/5 p-2 flex justify-center items-center">
                <h3 className="text-center text-lg font-semibold">Pech Panha</h3>
              </div>
            </div>
        
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="h-4/5">
                <img src="/Asset/rith.jpg" alt="Him Sophearith" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/5 p-2 flex justify-center items-center">
                <h3 className="text-center text-lg font-semibold">Him Sophearith</h3>
              </div>
            </div>
        
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="h-4/5">
                <img src="/Asset/seyha.jpg" alt="Theoun Seyha" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/5 p-2 flex justify-center items-center">
                <h3 className="text-center text-lg font-semibold">Theoun Seyha</h3>
              </div>
            </div>
        
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="h-4/5">
                <img src="/Asset/sokkay.jpg" alt="Thoeurn Sokkay" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/5 p-2 flex justify-center items-center">
                <h3 className="text-center text-lg font-semibold">Thoeurn Sokkay</h3>
              </div>
            </div>
        
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="h-4/5">
                <img src="/Asset/yanut.jpg" alt="Soeng Yanut" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/5 p-2 flex justify-center items-center">
                <h3 className="text-center text-lg font-semibold">Soeng Yanut</h3>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="h-4/5">
                <img src="/Asset/sohoung.jpg" alt="Chhon Sohoung" className="w-full h-full object-cover"/>
              </div>
              <div className="h-1/5 p-2 flex justify-center items-center">
                <h3 className="text-center text-lg font-semibold">Chhon Sohoung</h3>
              </div>
            </div>
          </div>
        </section>
        <h2 className="text-2xl lg:text-[32px] text-center">Mentors</h2>
        <p className="text-center text-[#383838]">Guidance of our project.</p>
        <section className="block space-y-6 lg:space-y-0 lg:flex gap-8 mb-10 mt-5">

            <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">

              <img src="/Asset/t.chhaya.jpg" alt="Mentor" className="w-full md:w-2/4 object-cover"/>
              
              <div className="md:w-2/4 space-y-4 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800">T.Chan Chhaya</h2>
                <p className="text-gray-600 mt-2">Help with:</p>
                <span className="bg-gray-200 text-gray-700 text-center text-sm px-4 py-2 rounded-full inline-block mt-2">UX/UI Design</span>
                <hr className="border border-gray-400"/>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-twitter"></i>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-facebook"></i>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-instagram"></i>
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
              <img src="/Asset/t.keo (1).jpg" alt="Person 2" className="w-full md:w-2/4 object-cover"/>
              
              <div className="md:w-2/4 space-y-4 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800">T.Kay Keo</h2>
                <p className="text-gray-600 mt-2">Help with:</p>
                <span className="bg-gray-200 text-gray-700 text-center text-sm px-4 py-2 rounded-full inline-block mt-2">Backend</span>
                <hr className="border border-gray-400"/>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-twitter"></i>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-facebook"></i>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-instagram"></i>
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
        
        </section>
        <h2 className="text-2xl lg:text-[32px] text-center">Organized By</h2>
        <section className="bg-[#F0F0F0] p-6 space-y-4 rounded-lg shadow-lg mb-[50px] mt-5">
          <div className="flex justify-center">
            <img src="/Asset/Istad.png" alt="ISTAD Logo" className="w-40 h-40"/>
          </div>
          <h3 className="text-xl lg:text-2xl text-center">Institute of Scient and Technology Advanced Development</h3>
          <p className="text-sm lg:text-base text-justify text-[#383838]">
            ISTAD is a noteworthy science and technology Institute in Cambodia.
            INSTITUTE has routed Cambodian students to advanced science and
            technology, research, and develop digital skills and our graduates
            have been guaranteed excellent job opportunities with the Top IT
            company. INSTITUTE will continue to provide high-quality training with
            the latest methodology, and roadmap as well as the best choice for
            those who want to be an IT expert in Cambodia.
          </p>
          <hr className="border border-gray-400"/>
          <div className="flex justify-center gap-4 text-[#383838]">
            <div className="flex items-center gap-2"><i className="fa-brands fa-twitter"></i> <p className="hidden md:block">Twitter</p></div>
            <div className="flex items-center gap-2"><i className="fa-brands fa-facebook"></i> <p className="hidden md:block">Facebook</p></div>
            <div className="flex items-center gap-2"><i className="fa-brands fa-instagram"></i> <p className="hidden md:block">Instagram</p></div>
            </div>
        </section>
      </main>
    </>
  )
}
