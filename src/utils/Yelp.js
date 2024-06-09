const yelpKey = '1zetuec0KVMS7nV4MFS9m8ryQB9dv8oLmozthIYS2CNBmjdxUZbOvRAM7WUl70TM2_ht4kngjVCN51xxbo2C-VGe-rbuujurKs5Um3hVldMC7FuomXo11iMl_9JjZnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
      {
        headers: {
          Authorization: `Bearer ${yelpKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      }); 
  },
};

export default Yelp;