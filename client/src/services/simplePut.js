import axios from 'axios';

export const simplePut = (url, values) => {
    const response = axios.put(url, values);
    return response;
}
