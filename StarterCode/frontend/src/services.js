const API_BASE_URL = "http://localhost:3001"; // To update on production


export function fetchProducts() {
    return fetch(`${API_BASE_URL}/api/products`, {
        method: "GET",
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        throw error;
    });
}


export function deleteProduct(id) {
    return fetch(`${API_BASE_URL}/api/products/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete product');
        }
        return response.json(); 
    })
    .catch(error => {
        throw error;
    });
}
