// I need to import the .css files into this /pages/_app.js file for the CSS to apply to
// the component when I use it in my pages. 

// layout
import "../styles/layout.css"

// components
import "../styles/components/header.css"
import "../styles/components/footer.css"

// pages
import "../styles/pages/homepage.css"
import "../styles/pages/blog-posts.css"
import "../styles/pages/post.css"
import "../styles/pages/contact.css"
import "../styles/pages/about.css"
import "../styles/pages/_error.css"

// external import
import "../styles/prismjs.css"

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}