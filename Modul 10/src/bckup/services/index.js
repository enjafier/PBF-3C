import GetApi from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";


const getNewsBlog = () => GetApi('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYngDiKirim) => PostAPI('posts',dataYngDiKirim);
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;