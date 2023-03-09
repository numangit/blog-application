export const getBlogDetails = async (id) => {
    const response = await fetch(`http://localhost:9000/blogs/${id}`);
    const data = await response.json();
    return data;
};