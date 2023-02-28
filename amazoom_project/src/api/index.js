const BASE_URL = "http://localhost:3000/api/";

// Products //
async function getAllProductsById(productId) {
    try {
        const fetchURL = await fetch(`${BASE_URL}products/${productId}`);
        const resultURL = await fetchURL.json();

        console.log("done fetching url for products");
        return resultURL;
    } catch (error) {
        console.log("error fetching url for products");
        throw error; 

    }
}