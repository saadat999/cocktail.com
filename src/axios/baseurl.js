import axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/'
});

export default instanceAxios;
