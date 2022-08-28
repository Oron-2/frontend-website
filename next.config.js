// The next.config.js file is a file that Next.js handles and will allow me to export process.env variables
// throughout the entire application. In this file, I'll store different URL values and credentials.
// As I start referencing these different things more in the code,
// it'll make things easier if there's one central location where they can be managed.
// The module.exports binding is an object that holds another objects inside of it. 
// These two variables will be exported throughout the application via the process.env object.
// The example.com domain is a placeholder and will be replaced with the real domain before the application is deployed.
module.exports = {
    env: {
        "DEV_API_URL": "http://localhost:5000",
        "PRODUCTION_API_URL": "https://www.api.petarpandzharov.com"
    }
}