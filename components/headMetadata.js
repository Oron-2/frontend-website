// Adding <head> metadata will help browsers and search engines know more about what kind of content is on each page of the website.
// The list of data added to each page is: Title tag, Meta description and Favicon icons.
// This component stores all these pieces of information and applies it to each page. 
// Since the title and meta description will be unique for each page, those are passed in as React props data.

// The Head item is a built-in Next.js component used for appending elements into the head section of the HTML page.
// Inside the <Head> component, the three different elements are added.

// The <meta> viewport element gives me control over the dimensions and scaling of the web page.
// width=device-width sets the width of the page to follow the screen-width of the device.
// initial-scale=1: sets the initial zoom level when the page is first loaded by the browser.

// The <title> tag serves multiple purposes, including: 
// Defines a title in the browser toolbar or tab. Gives a title for the page when it's added to favorites. Displays a title for the page in search engine results.
// The value for the <title> tag will be dynamically set for each page via props data.

// The <meta> description element is a snippet of up to 160 characters in length which summarizes 
// the content of the page and is displayed in search engine results underneath the <title> value.

// This React component is built in a way for it to be exported and used on each page of your website.
import { Component } from "react"
import Head from "next/head"

export default class extends Component {
    render () {
        return (
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <title>{this.props.title}</title>
                <meta name="description" content={this.props.metaDescription} />
            </Head>
        )
    }
}






