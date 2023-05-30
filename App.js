// Import required dependencies
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const IndexPage = () => {
  const listings = [
    {
      id: 1,
      image: "image-url-1",
      location: "Location 1",
      nightlyRate: 100,
      amenities: ["Amenity 1", "Amenity 2"],
    },
    {
      id: 2,
      image: "image-url-2",
      location: "Location 2",
      nightlyRate: 120,
      amenities: ["Amenity 3", "Amenity 4"],
    },
    // Add more listings as needed
  ];
  const categories = [
    {
      id: "8678",
      type: "rooms",
      title: "Rooms",
    },
    {
      id: "677",
      type: "amazing-pools",
      title: "Amazing pools",
    },
    {
      id: "5348",
      type: "cabins",
      title: "Cabins",
    },
    {
      id: "4104",
      type: "countryside",
      title: "Countryside",
    },
    {
      id: "7765",
      type: "skiing",
      title: "Skiing",
    },
    {
      id: "8144",
      type: "lake",
      title: "Lake",
    },
    {
      id: "789",
      type: "beachfront",
      title: "Beachfront",
    },
  ];

  return (
    <BrowserRouter>
      <div>
        {/* Header */}
        <header className="flex justify-between items-center p-4">
          <div>Hostshare Logo</div>
          <div>Search Component</div>
          <div>Placeholder User Avatar and Menu</div>
        </header>

        {/* Categories */}
        <div className="p-4">
          <ul className="flex space-x-4">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/category/${category.type}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Grid of listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {listings.map((listing) => (
            <Link key={listing.id} to={`/listing/${listing.id}`}>
              <div className="bg-white shadow-md rounded p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                <img
                  src={listing.image}
                  alt="Listing"
                  className="w-full mb-4 rounded"
                />
                <div className="font-bold mb-2">{listing.location}</div>
                <div className="text-gray-600">
                  Nightly Rate: ${listing.nightlyRate}
                </div>
                <div className="text-gray-600">
                  Amenities: {listing.amenities.join(", ")}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default IndexPage;
