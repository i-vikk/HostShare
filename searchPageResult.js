import React from 'react';
import ListingGrid from './listingGrid';

const SearchResultsPage = ({ listings }) => {
  return (
    <><div className="flex items-center justify-between p-4 bg-green-500">
          <div>Hostshare logo</div>
          <div>
              <input type="text" placeholder="Search" className="p-2 mr-2" />
              <button className="p-2 bg-white">Search</button>
              <div>Placeholder user avatar and menu</div>
          </div>
      </div><ListingGrid listings={listings} /></>
  );
};

export default SearchResultsPage;
