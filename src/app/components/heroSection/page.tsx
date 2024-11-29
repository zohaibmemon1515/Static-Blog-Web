import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-teal-500 to-blue-600 text-white h-auto pb-20">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between max-w-5xl">
        <div className="md:max-w-lg mb-8 md:mb-0 mt-10 lg:ml-12 md:ml-7 ml-3">
          <h1 className="md:text-3xl lg:text-5xl text-3xl font-bold mb-4 text-gray-800">
            Empower Your Mind with Knowledge
          </h1>
          <p className="text-sm lg:text-xl md:text-sm mb-6 lg:mr-16 md:mr-14 mr-10">
            Dive into expertly curated educational content that enlightens and
            inspires. Learn something new every day!
          </p>
          <div className="flex gap-4">
            <Link
              href="/components/blogCards"
              className="lg:px-6 lg:py-3 px-5 py-3 bg-white text-teal-600 rounded-lg shadow-md hover:bg-gray-100 transition md:px-4 md:py-2"
            >
              Explore Articles
            </Link>
            <Link
              href="/components/Contact"
              className="lg:px-6 lg:py-3 px-5 py-1.5 bg-teal-700 text-white rounded-lg shadow-md hover:bg-teal-800 transition md:px-4 md:py-2"
            >
              Subscribe Now
            </Link>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 mt-10 lg:mr-3">
          <Image
            src="/assets/img/Hero.png"
            width={500}
            height={500}
            alt="Hero Image"
            className="rounded-lg shadow-lg mx-auto"
            priority
          />
        </div>
      </div>

      <div className="absolute w-full text-center">
        <span className="text-sm">Scroll for More Knowledge</span>
        <div className="mt-2 animate-bounce text-xl">⬇️</div>
      </div>
    </section>
  );
};

export default Hero;
