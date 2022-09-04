import { Component } from "react"
import moment from "moment"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetadata from "../../components/headMetadata.js"
import GoogleAnalytics from "../../components/googleAnalytics.js"

// Importing the getAllBlogPosts.js function to use it and pull real data into the page.
import getAllBlogPosts from "../../api/getAllBlogPosts.js"


export default class extends Component {
    // The keyword await is used when the getAllBlogPosts() is called because it's an async function.
    // Then in the return object, the posts data is passed (in the form of an array of objects {}) as props to the page.
    // So, whenever the page is loaded, an array containing all of the published blog posts (each in the form of an object ())
    // will be available to the React component using this.props.posts. 
    static async getInitialProps() {
        const apiResult = await getAllBlogPosts()

        return {
            posts: apiResult && apiResult.posts,
            getDataError: apiResult && apiResult.getDataError
        }
    }
    render() {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="Blog Posts | Coding Blog"
                    metaDescription="List of all blog posts published on the Petar Pandzharov coding blog."
                />
                <GoogleAnalytics />
                <Header />
                <div className="blog-posts-container">
                    <h1>Blog Posts</h1>
                    <div className="blog-posts-list">
                        {/*
                        For each object in the this.props.posts array, I want to render a blog post inside
                        the <div className="blog-posts-list"> element.
                        A map() method is used again to render a blog post element for each object in the this.props.posts array.
                        Also, real data for each blog post is displayed instead of the placeholder data.
                        And the post.dateTimestamp value for the blog post is made human-readable using the moment NPM package.
                        */}
                        {
                            this.props.posts && !this.props.getDataError ?
                                this.props.posts.map((post, index) => {
                                    return (
                                        <a key={index} href={`/blog/${post.urlTitle}`}>
                                            <div className="blog-posts-list-item">
                                                <div className="blog-posts-thumbnail">
                                                    <img src={post.thumbnailImageUrl} />
                                                </div>
                                                <div className="blog-posts-list-item-title-and-date">
                                                    <h2>{post.title}</h2>
                                                    <div className="blog-posts-list-item-date">
                                                        <span>{moment.unix(post.dateTimestamp).format("MMMM Do, YYYY")}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                }) :
                                <div className="blog-posts-get-data-error-msg">
                                    <span>An error occurred.</span>
                                </div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
