import axios from 'axios';

export default() => {
    const key = localStorage.getItem('key');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${key}`
        }
    });
};