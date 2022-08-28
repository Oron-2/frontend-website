import axios from "axios"

import apiBaseUrl from "../utils/apiBaseUrl"

// The below async function takes a tag parameter and includes it as part
// of the URL query to the REST API. The REST API will receive that query value 
// and use it to retrieve the correct blog posts from the database.
// Once the function is written, I should import it into the blog posts by tag page and put it to use. 
export default async function (tag) {
    try {
        const response = await axios(`${apiBaseUrl}/posts/get-blog-posts-by-tag?tag=${tag}`)
        return response.data
    } catch (error) {
        return { getDataError: true }
    }
}

