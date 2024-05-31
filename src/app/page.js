import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <main className="flex flex-1 flex-col items-center justify-center px-5 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-5">
          Welcome to <span className="text-blue-600">My Task Site</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Your go-to platform for awesome services and amazing experiences.
        </p>
        <a
          href="/addblog"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Add New Blog
        </a>
      </main>
    </div>
  );
}
