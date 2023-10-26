import axios from 'axios';

export const dummyApi = () => {
    return axios.get('https://dummyjson.com/products/1');
}
