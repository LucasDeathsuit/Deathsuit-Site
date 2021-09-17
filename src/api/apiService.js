import axios from "axios";

const API_URL = 'http://wp.deathsuit.com.br/wp-json/wp/v2/';

async function getNewsPage(page, newsPerPage) {
    const url = API_URL+`news?page=${page}&per_page=${newsPerPage}&_embed`
    const res = await axios.get(url);
    return res
}

export { getNewsPage }