import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      title: "Unlocking Bancassurance Horizons: A Diverse Exploration of Strategic Models.",
      description: "Embark on a transformative journey through the dynamic terrain of bancassurance models. In this exploration, we delve into the intricacies of strategic insights that not only redefine financial partnerships but also play a pivotal...",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "Revolutionizing Finance: A Closer Look at How Open Finance Sparks Product Innovation.",
      description: "Embark on a journey through the financial frontier as we dissect the revolutionary impact of Open Finance, delving into the intricacies of how it ignites product innovation. Explore real-world examples, transformative...",
      bgColor: "bg-gray-50",
      textColor: "text-green-600"
    },
    {
      title: "Cracking the Code: The Crucial Link Between Transparency, Trust, and Open Data.",
      description: "Dive into the intricate web of transparency, trust, and open data, exploring how the symbiotic relationship among these elements becomes the key to unlocking new dimensions of reliability and credibility in various...",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      title: "Innovation Echo: Charting the Unseen Waves of Transformation by FIDA & PSD3.",
      description: "Embark on a journey through the dynamic world of financial innovation as we explore the seismic shifts ushered in by FIDA & PSD3. Dive into the unseen waves of transformation, unraveling how these regulatory forces...",
      bgColor: "bg-lime-400",
      textColor: "text-green-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-black">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Our Latest Blog</h1>
        <p className="text-white-600">
          A Gateway to Insightful Stories and Expertise, Unveiling a Tapestry of Ideas and Inspiration.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <div 
            key={index}
            className={`${blog.bgColor} rounded-lg p-6 h-full flex flex-col justify-between ${
              index === 2 ? 'md:col-span-1' : ''
            }`}
          >
            <div>
              <h2 className={`text-xl font-semibold mb-4 ${
                blog.bgColor === 'bg-navy-900' ? 'text-white' : 'text-gray-800'
              }`}>
                {blog.title}
              </h2>
              <p className={`mb-4 ${
                blog.bgColor === 'bg-navy-900' ? 'text-white-300' : 'text-gray-600'
              }`}>
                {blog.description}
              </p>
            </div>
            <button className={`${blog.textColor} font-medium hover:underline`}>
              Read More...
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;