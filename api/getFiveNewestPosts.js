import axios from "axios"

// Importing the apiBaseUrl file 
import apiBaseUrl from "../utils/apiBaseUrl.js"

// Inside the async function, the axios NPM package is used to make a request
// to the "/post/get-give-newest-posts" endpoint on the REST API
// By using the keyword await, I'll hold off returning the result of the function 
// until the requested data is received. As a result,
// the five newest published blog posts from the database will be returned.
// Also, the API request is wrapped inside a try...catch statement so any errors that may occur are catched.
// When I deploy the code in a production environment, the URL for the REST API will be different 
// than "http://localhost:5000" URL that is used in development.
// To make my live easier when I deploy the application, I will create a function checks the current
// application environment (development vs production) and dynamically supplies
// the correct base URL to make a request to. 
// The request URL used by axios is updated to use the apiBaseUrl variable value
export default async function () {
    try {
        const response = await axios(`${apiBaseUrl}/posts/get-five-newest-posts`)
        return response.data
    } catch (error) {
        return { getDataError: true }
    }
}