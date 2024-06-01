import Image from "next/image";
import React from "react";

export default function Card({ product }) {
  return (
    <div className="flex flex-col justify-between max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-10">
      <div
        className="bg-cover bg-center h-56 p-4"
        style={{ backgroundImage: `url(${product.images[0]})` }}
      >
       <div
        className="bg-cover bg-center h-56 p-4"
        style={{ backgroundImage: `url(${product.images[0]})` }}
      >
          <Image
            className="h-10 w-10 rounded-full border-2 border-white"
            src={product.thumbnail}
            alt={product.title}
            height={200}
            width={200}
           loading="lazy"
          />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-2xl">{product.title}</h2>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        <div className="flex items-center mt-4">
          <h3 className="text-gray-900 font-bold text-lg">${product.price}</h3>
          <span className="ml-2 text-gray-600 text-sm line-through">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </span>
          <span className="ml-2 text-green-500 text-sm">
            ({product.discountPercentage}% off)
          </span>
        </div>
        <div className="flex items-center mt-4">
          <span
            className={`text-white text-sm font-semibold py-1 px-3 rounded-full ${
              product.availabilityStatus === "Low Stock"
                ? "bg-red-500"
                : "bg-green-500"
            }`}
          >
            {product.availabilityStatus}
          </span>
          <span className="ml-2 text-gray-600 text-sm">
            Stock: {product.stock}
          </span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-yellow-500 text-sm font-semibold py-1 px-3 rounded-full">
            {product.rating}★
          </span>
        </div>
      </div>
      <div className="px-4 pt-3 pb-4 bg-gray-100">
        <div
          className="group flex flex-col rounded-lg  text-myblack border"
          tabIndex="1"
        >
          <div className="flex cursor-pointer items-center justify-between px-5 py-3 bg-mylightbg ">
            <h3 className="font-medium xxl:text-xl xl:text-xl lg:text-xl md:text-lg max-md:text-lg text-myblack">
            Reviews
            </h3>
            <div className="rotate-0">
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
            </div>
          </div>
          <div className="invisible w-11/12 h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
          {product.reviews.map((review, index) => (
            <div key={index} className="text-sm">
              <p className="font-semibold">{review.reviewerName}</p>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-yellow-500">{review.rating}★</p>
              <p className="text-gray-400 text-xs">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
          </div>

      </div>
        </div>
      </div>
  
  );
}
