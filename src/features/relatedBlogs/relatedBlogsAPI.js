export const getRelatedBlogs = async ({ tags, id }) => {
    const response = await fetch('http://localhost:9000/blogs');
    const data = await response.json();
    return data;
};