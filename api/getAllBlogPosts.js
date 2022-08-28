import axios from "axios"

import apiBaseUrl from "../utils/apiBaseUrl"

// This async function uses axios to make a request to
// /posts/get-all-blog-posts REST API endpoint and returns the response data it receives back
// The try...catch statement provides error handling in the scenario that one occurs. 
export default async function () {
    try {
        const response = await axios(`${apiBaseUrl}/posts/get-all-blog-posts`)
        return response.data
    } catch (error) {
        return { getDataError: true }
    }
}