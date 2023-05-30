import React from 'react';

const ListingPage = ({ listing }) => {
  return (
    <div>
      <div>Header and title</div>
      <div>Images and easy way to view them all</div>
      <div>
        <div>Home title with Host image</div>
        <div>Description section</div>
        <div>Amenities section</div>
        <div>Location section</div>
      </div>
      <div>
        Reservation widget sticky on the right side beneath images
        {/* Add check-in and check-out dates */}
      </div>
    </div>
  );
};

export default ListingPage;
