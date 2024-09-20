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
    async fetchSearchByGlass() {
        const response = await instanceAxios.get('filter.php?g=Champagne_flute');
        return response.data;
    }

    // Коктейлдин ID'сы боюнча ингредиенттерин алуу
    async fetchCocktailDetails(id) {
        const response = await instanceAxios.get(`lookup.php?i=${id}`);
        return response.data;
    }
    // async fetchDrinks() {
    //     const response = await  instanceAxios.get('filter.php?g=');
    //     return response.data;
    // }
}
export default new CocktailApi();