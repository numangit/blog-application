export const getRelatedBlogs = async ({ tags, id }) => {
    // http://localhost:9000/blogs?tags_like=nodejs&id_ne=1
    const response = await fetch('http://localhost:9000/blogs');
    const data = await response.json();
    return data;
};