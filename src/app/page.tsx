import BlogCards from "./components/blogCards/page";
import React from "react";
import Hero from "./components/heroSection/page";
import Contact from "./components/Contact/page";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <BlogCards />
     <Contact/>
    </div>
  );
}
