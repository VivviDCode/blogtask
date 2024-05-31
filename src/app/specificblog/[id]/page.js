"use client"
import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import {  doc, getDoc } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import img from "../../../../public/free-nature-images.jpg";
import Image from 'next/image';

export default function SpecificBlog() {
  const [blog, setBlog] = useState(null);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogDocRef = doc(db, 'blogs', id);
        const blogDocSnap = await getDoc(blogDocRef);
        if (blogDocSnap.exists()) {
          setBlog(blogDocSnap.data()); 
        } else {
          console.log('Blog not found');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    if (id) {
      fetchBlog(); 
    }
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      {blog ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">Topic : <span className='text-3xl font-semibold mb-4'>{blog.title}</span></h1>
          <div className="mb-4">
            <Image src={img} alt={blog.title} width={1200} height={600} />
          </div>
          <p className="text-gray-600">{blog.content}</p>
          <h1 className="text-xl font-bold mt-2 text-gray-600">Author : <span className='text-2xl font-semibold mb-4 '>{blog.author}</span></h1>
          <p className="text-gray-600 mb-4">Posted on: {new Date(blog.createdAt?.toDate()).toLocaleDateString()}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
