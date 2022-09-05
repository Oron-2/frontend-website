import { Component } from "react"
import Head from "next/head"

// Creating a React component that will only render if the process.env.NODE_ENV
// environment variable is equal to "production". I only want Google Analytics to track
// data when the application is running in production mode. If the code is running in production mode,
// I place the code for the component inside the <Head> element. This will add the code to the head of the page.
// I also instruct the component to only render if the typeof window value is true. This ensures
// that the code only runs in the browser environment (as opposed to the code Next.js runs on the client-side).
// By doing this, I stop the script from being called more than once on each page load.
// Then, the <script> tag is used to initiate the Google Tag Manager script. This makes the Google Tag Manager script
// available to the component. Notice that the process.env.GOOGLE_ANALYTICS_ID environment variable is included.
// The dangerouselySetInnerHTML method is used to inject the Google Analytics script into the page. That code will send the data
// to Google Analytics. The process.env.GOOGLE_ANALYTICS_ID environment variable is included in the script, which will tell 
// Google what site the data belongs to. Now, the component can be imported and used on any page I want Google Analytics to track.
export default class extends Component {
    render() {
        return (
            <>
                {
                    process.env.NODE_ENV === "production" && typeof window ?
                        <Head>
                            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}></script>
                            <script
                                async
                                dangerouslySetInnerHTML={{
                                    __html: `window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag("js", new Date());

                                    gtag("config", "${process.env.GOOGLE_ANALYTICS_ID}");`
                                }}
                            />
                        </Head> : null
                }
            </>
        )
    }
}