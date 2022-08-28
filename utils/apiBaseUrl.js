// Using an if...else statement to checks which environment the code is running in (development or production)
// If I am running the Next.js application in development mode, the development API URL will be exported
// (http://localhost:5000). And if not, the production API URL will be exported (https://www.api.example.com)
let apiBaseUrl

if (process.env.NODE_ENV === "development") {
    apiBaseUrl = process.env.DEV_API_URL
} else {
    apiBaseUrl = process.env.PRODUCTION_API_URL
}

export default apiBaseUrl