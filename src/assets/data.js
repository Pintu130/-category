import axios from 'axios';

export const fetchPrducts = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/products?skip=0&limit=100")
        return response?.data
    } catch (error) {
        return error
    }
}