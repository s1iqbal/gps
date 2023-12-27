const geocodeAddress = (address: string) => {
    setTimeout(() => {}, 1000)
    return fetch(`https://geocode.maps.co/search?q=${address}&api_key=${import.meta.env.VITE_GEOCODE_API_KEY}&limit=1`)
    .then((response) => response.json())
    .then((body) => {
        return body[0]
    }); 
};

export default geocodeAddress