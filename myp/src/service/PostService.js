import http from "../Interceptors";

const getPosts = (page=0)=>{
    return http.get(`https://academics.newtonschool.co/api/v1/linkedin/post?limit=20`);
}

const likeIds =(id) =>{
    return http.post(`https://academics.newtonschool.co/api/v1/linkedin/like/:{postid}/'${id}`);
}
const commentIds =(id) =>{
    return http.get(`https://academics.newtonschool.co/api/v1/linkedin/post/:{postid}/comments`);
}



const addPost=(formData)=>{
    return http.post(`https://academics.newtonschool.co/api/v1/linkedIn/post/`(formData));
}

const editPost =(id)=>{
    return http.post(`https://academics.newtonschool.co/api/v1/linkedIn/post/:postId/${id}`)
}



const PostService={
    getPosts,
    likeIds,
    commentIds,
    addPost,
    editPost
}

export default PostService;