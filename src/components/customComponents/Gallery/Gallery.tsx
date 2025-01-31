import React from 'react';
import { BentoGrid } from 'react-bento';

const BentoGallery = () => {
  const bentoItems = [
    {
      id: 1,
      title: "Settings Menu",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/300/300" 
            alt="Settings menu"
            className="w-full h-full object-cover" 
          />
        </div>
      ),
      width: 2,
      height: 2,
    },
    {
      id: 2,
      title: "Email Preview",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/400/200" 
            alt="Email preview"
            className="w-full h-full object-cover" // Removed rounded-2xl
          />
        </div>
      ),
      width: 3,
      height: 2,
    },
    {
      id: 3,
      title: "Today's Recap",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/200/200" 
            alt="Today's recap"
            className="w-full h-full object-cover" // Removed rounded-2xl
          />
        </div>
      ),
      width: 2,
      height: 2,
    },
    {
      id: 4,
      title: "Adidas Card",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/200/200" 
            alt="Adidas promotion"
            className="w-full h-full object-cover" // Removed rounded-2xl
          />
        </div>
      ),
      width: 2,
      height: 3,
    },
    {
      id: 5,
      title: "Hello Luna",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/600/300" 
            alt="Hello Luna notification"
            className="w-full h-full object-cover" // Removed rounded-2xl
          />
        </div>
      ),
      width: 4,
      height: 3,
    },
    {
      id: 6,
      title: "House Listing",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/300/300" 
            alt="House listing preview"
            className="w-full h-full object-cover" // Removed rounded-2xl
          />
        </div>
      ),
      width: 2,
      height: 3,
    },
    {
      id: 7,
      title: "Partnership Email",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/400/200" 
            alt="Partnership email"
            className="w-full h-full object-cover" // Removed rounded-2xl
          />
        </div>
      ),
      width: 3,
      height: 2,
    },
    {
      id: 8,
      title: "Circular Logos",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/300/200" 
            alt="Logo preview"
            className="w-full h-full object-cover" // Removed rounded-2xl
          />
        </div>
      ),
      width: 2,
      height: 2,
    },
    {
      id: 9,
      title: "Inbox Interface",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/300/200" 
            alt="Inbox interface"
            className="w-full h-full object-cover" // Removed rounded-2xl
          />
        </div>
      ),
      width: 2,
      height: 2,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black p-0">
      <BentoGrid
        items={bentoItems}
        gridCols={8}
        rowHeight={80}
        // gap={2} // Added gap prop to reduce spacing between cards
        classNames={{
          container: "max-w-full mx-auto",
          elementContainer: "bg-zinc-900 rounded-none gap-0 overflow-hidden", 
        }}
      />
    </div>
  );
};

export default BentoGallery;