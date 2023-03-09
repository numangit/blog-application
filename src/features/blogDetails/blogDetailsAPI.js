//API call to get blog details
export const getBlogDetails = async (id) => {
    const response = await fetch(`http://localhost:9000/blogs/${id}`);
    const data = await response.json();
    return data;
};

//API call to update liked blog details
export const incrementLike = async ({ id, likes }) => {
    console.log(id, likes);
    const response = await fetch(`http://localhost:9000/blogs/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json; charset:UTF-8" },
        body: JSON.stringify({
            likes: likes++
        })
    });
    const data = await response.json();
    return data;
};

//API call to update saved blog details
export const updateSaved = async ({ id, isSaved }) => {
    console.log(id, isSaved);
    const response = await fetch(`http://localhost:9000/blogs/${id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json; charset:UTF-8" },
        body: JSON.stringify({
            isSaved: !isSaved
        })
    });
    const data = await response.json();
    return data;
};