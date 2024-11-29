"use client";

import { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleAlert = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you for your response!");
    console.log("Button clicked");

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="bg-gradient-to-b from-teal-500 to-blue-600 text-white flex flex-col justify-center items-center h-auto lg:h-[700px] pb-20 font-sans px-4">
      <h1 className="text-gray-800 font-semibold text-2xl sm:text-3xl mb-10 sm:mb-16 border-b-2 border-gray-800 pt-20 sm:pt-20 lg:mt-14">
        Contact
      </h1>
      <div className="w-full max-w-3xl p-6 md:p-12 lg:p-16 rounded-lg bg-gray-800 shadow-lg">
        <form onSubmit={handleAlert} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 h-28 rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-teal-600 transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
