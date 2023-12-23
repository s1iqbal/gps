const geocodeAddress = (address: string) => {
    return fetch(`https://geocode.maps.co/search?q=${address}`)
    .then((response) => response.json())
    .then((body) => {
        return body[0]
    }); 
};

export default geocodeAddress