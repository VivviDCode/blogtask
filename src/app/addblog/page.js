"use client";
import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AddBlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        content,
        author,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      setMessage("Blog added successfully!");
      setTitle("");
      setContent("");
      setAuthor("");
    } catch (error) {
      console.error("Error adding blog: ", error);
      setMessage("Error adding blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Blog"}
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
