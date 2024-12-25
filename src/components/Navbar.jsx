import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white text-2xl font-bold">K A F K A - W E B</a>
          </div>
          <div className="flex space-x-4 items-center">
            <a
              href="/home"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Home
            </a>
            <a
              href="/topics"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Topics
            </a>
            <a
              href="/producer"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Producer
            </a>
            <a
              href="/consumer"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Consumer
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
