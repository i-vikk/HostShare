import React from 'react';

const ListingGrid = ({ listings }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="p-4 border border-gray-200 rounded-md"
        >
          <img src={listing.image} alt={listing.title} className="w-full" />
          <div>{listing.location}</div>
          <div>{listing.nightlyRate}</div>
        </div>
      ))}
    </div>
  );
};

export default ListingGrid;
