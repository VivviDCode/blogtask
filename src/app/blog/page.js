// page.js
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import Image from "next/image";
import img from "../../../public/free-nature-images.jpg";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef);
        const querySnapshot = await getDocs(q);
        const blogsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogsList);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
console.log(blogs)
  return (
    <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-8">Latest Blogs</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <div key={blog.id} className="bg-white shadow-md rounded-md overflow-hidden">
          <Link href={`/specificblog/${blog.id}`}>
            <div className="block">
              <Image
                src={img} 
                alt={blog.title}
                height={500}
                width={500}
                className="w-full h-44 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 line-clamp-3">{blog.content}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
}
