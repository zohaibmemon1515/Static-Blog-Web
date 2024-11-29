"use client";

import { useParams } from "next/navigation";
import postData from "@/data/page";
import Image from "next/image";
import CommentSection from "@/app/components/Comments/page";

const BlogPost = () => {
  const { id } = useParams();

  const blogPost = postData.find((post) => post.id === Number(id));

  if (!blogPost)
    return <p className="p-6 text-center text-gray-500">Post not found!</p>;

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          {blogPost.title}
        </h1>
        <p className="text-blue-600 text-sm font-medium mb-2">
          {blogPost.category}
        </p>
        <p className="text-gray-500 text-sm">
          Published on <span className="font-semibold">{blogPost.date}</span> by{" "}
          <span className="font-semibold">{blogPost.author}</span>
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <Image
          src={blogPost.imageUrl}
          alt={blogPost.title}
          width={400}
          height={200}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="text-lg text-gray-700 leading-relaxed space-y-6">
        <p>{blogPost.description}</p>
      </div>

      <div>
        <CommentSection />
      </div>
    </div>
  );
};

export default BlogPost;
