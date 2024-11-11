import axios from "axios"

export const fetchData = async () => {
    try {
        const result = await axios.get("https://www.bestbuyads.com/wp-json/wp/v2/pages/?page=1");
        return result.data
    } catch (error) {
        return error
    }
}