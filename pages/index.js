import { Component } from "react"

// Importing both the header.js and footer.js files/components makes them
// available for use in this index.js file. 
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"
import GoogleAnalytics from "../components/googleAnalytics.js"

// Importing the below function to pull the data into the page
import getFiveNewestPosts from "../api/getFiveNewestPosts.js"

// The entire page is wrapped in a <div className="layout-wrapper"> element.
// By using the "layout-wrapper" class name,
// the general CSS layout in the /styles/layout.css will be applied to the page.
// Inside that wrapper element, both the header.js and footer.js components are placed
// via <Header /> and <Footer />. Those two components are reusable and will be imported
// and used like this on every page of the website.
// The <div className="homepage-container"> element is placed between the <Header /> and <Footer /> 
// to form the layout for the index page. All content for the index page will be placed inside that <div> element.
export default class extends Component {
    // The keyword await is used when the getFiveNewestPosts() is called because it's an async function.
    // Then in the return object, the posts data is passed (in the form of an array of objects {}) as props to the page.
    // Whenever the homepage is loaded, an array containing the five newest blog posts (each in the form of an object {})
    // will be available to the React component via this.props.posts. For each object in the this.props.posts array,
    // I want to render a blog post in the Latest Blog Posts section of the page.
    // To do that, I'll use the map() function inside the <div className="homepage-latest-blog-posts-list"> section of the React code.
    static async getInitialProps() {
        const apiResult = await getFiveNewestPosts()

        return {
            posts: apiResult && apiResult.posts
        }
    }

    render() {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="Coding Blog"
                    metaDescription="Petar Pandzharov is a computing technologies graduate, sharing things he knows and finds exciting. Mostly related to technology."
                />
                <GoogleAnalytics />
                <Header />
                <div className="homepage-container">
                    <div className="homepage-introduction">
                        <h1>Hi, I'm Petar. I'm a recent computing technologies graduate.</h1>
                        <p>I write about things that have made an impression on me, mostly related to technology.</p>
                    </div>

                    <div className="homepage-latest-blog-posts">
                        <h2>
                            Latest Blog Posts
                            <a className="homepage-latest-blog-posts-view-all" href="/blog">View all</a>
                        </h2>
                        <div className="homepage-latest-blog-posts-list">
                            {
                                this.props.posts ?
                                    this.props.posts.map((post, index) => {
                                        return (
                                            <a key={index} href={`/blog/${post.urlTitle}`}>
                                                <div className="homepage-latest-blog-post">
                                                    <div className="homepage-latest-thumbnail">
                                                        <img src={post.thumbnailImageUrl} />
                                                    </div>
                                                    <div className="homepage-latest-blog-post-title">
                                                        <h3>{post.title}</h3>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    }) : null
                            }
                        </div>
                    </div>

                    <div className="homepage-projects">
                        <h2>My Projects</h2>
                        <div className="homepage-projects-list">
                            <div className="homepage-project">
                                <h3>
                                    <a href="https://github.com/discourse/discourse">
                                        <div className="homepage-project-icon">📞</div>
                                        <div className="homepage-project-title">Discourse</div>
                                    </a>
                                </h3>
                                <p>A platform for community discussion. Free, open, simple.</p>
                                <div className="homepage-project-btns">
                                    <a className="homepage-project-view-btn" href="https://github.com/discourse/discourse">View</a>
                                </div>
                            </div>
                            <div className="homepage-project">
                                <h3>
                                    <a href="https://github.com/showdownjs/showdown">
                                        <div className="homepage-project-icon">⌛</div>
                                        <div className="homepage-project-title">Showdown</div>
                                    </a>
                                </h3>
                                <p>A bidirectional Markdown to HTML to Markdown converter written in Javascript.</p>
                                <div className="homepage-project-btns">
                                    <a className="homepage-project-view-btn" href="https://github.com/showdownjs/showdown">View</a>
                                </div>
                            </div>
                            <div className="homepage-project">
                                <h3>
                                    <a href="https://github.com/showdownjs/showdown">
                                        <div className="homepage-project-icon">⌛</div>
                                        <div className="homepage-project-title">Showdown</div>
                                    </a>
                                </h3>
                                <p>A bidirectional Markdown to HTML to Markdown converter written in Javascript.</p>
                                <div className="homepage-project-btns">
                                    <a className="homepage-project-view-btn" href="https://github.com/showdownjs/showdown">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}