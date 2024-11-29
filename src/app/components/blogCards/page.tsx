"use client";

import postData from "@/data/page";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogCards = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts =
    activeCategory === "all"
      ? postData
      : postData.filter((post) => post.category === activeCategory);

  return (
    <div className="container p-6 bg-gray-50 min-h-auto max-w-5xl justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Latest Blogs
      </h1>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {[
          { name: "All", key: "all" },
          { name: "Development", key: "Development" },
          { name: "Framework", key: "Framework" },
          { name: "Design & Development", key: "Design-Development" },
          { name: "Ecommerce", key: "E-Commerce" },
          { name: "Digital Marketing", key: "Digital-Marketing" },
        ].map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-4 py-2 rounded ${
              activeCategory === category.key
                ? "bg-[#F86F03] text-white"
                : "bg-white text-[#F86F03]"
            } font-semibold transition-colors duration-200`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.previewText.length > 100
                    ? `${post.previewText.substring(0, 100)}...`
                    : post.previewText}
                </p>
                <Link href={`/posts/${post.id}`}>
                  <span className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No blogs found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogCards;
