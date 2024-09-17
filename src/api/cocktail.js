import axios from "axios";

class CocktailApi {
    async fetchSearch() {
        const response = await axios.get('search.php?f=a');
        return response.data;
    }
}

export default new CocktailApi();

