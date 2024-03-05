import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: "170482238eb5428caf42e829f0c42302"
}
})