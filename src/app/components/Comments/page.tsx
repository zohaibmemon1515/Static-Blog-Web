"use client"
import { useState } from "react";

interface Comment {
  id: number;
  name: string;
  message: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleAddComment = () => {
    if (name.trim() && message.trim()) {
      const newComment: Comment = {
        id: Date.now(),
        name,
        message,
      };
      setComments((prev) => [...prev, newComment]);
      setName("");
      setMessage("");
    }
  };
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Write your comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          onClick={handleAddComment}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Post Comment
        </button>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <h3 className="font-semibold text-gray-700">{comment.name}</h3>
            <p className="text-gray-600">{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CommentSection;