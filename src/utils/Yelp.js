const yelpKey = 'zd3gakMjn7YFlPfQihChSPUgEcBeQ5D819szNlB7QQGWIW_ejU35Qz-3bjMK88xs8rWq8K8Bunj2HRiT0AbDV9O3IMToZWiB6V06haOZixhPBhKmvD8k-v8vZY7OZXYx';

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