export const getRelatedBlogs = async ({ tags, id }) => {
    let queryString =
        tags?.length > 0
            ? tags.map(tag => `tags_like${tag}`).join('&') + `&id_ne=${id}`
            : `id_ne=${id}`;

    const response = await fetch(`http://localhost:9000/blogs?${queryString}`);
    const data = await response.json();
    return data;
};