import instanceAxios from "../axios/baseurl.js";

class CocktailApi {
    async fetchSearch() {
        const response = await instanceAxios.get('filter.php?c=Ordinary_Drink');
        return response.data;
    }
    async fetchSearchLet(val) {
        const response = await instanceAxios.get(`search.php?f=${val}`);
        return response.data;
    }
}

export default new CocktailApi();
