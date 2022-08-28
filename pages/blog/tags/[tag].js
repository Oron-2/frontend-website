import { Component } from "react"
import moment from "moment"

import Header from "../../../components/header.js"
import Footer from "../../../components/footer.js"
import HeadMetadata from "../../../components/headMetadata.js"

// Importing the below function to pull the data into the page
import getBlogPostsByTag from "../../../api/getBlogPostsByTag.js"

export default class extends Component {
    // Next.js will run the getInitialProps() function before loading the content of the page,
    // enabling server-side rendering. Therefore, the page will already have the data loaded when it initially loads.
    // This allows for initial data population where the page is loaded with the data already populated from the server,
    // which is especially useful for SEO.
    // Inside the getInitialProps() function, I the query from the URL ([tag].js)
    // and pass it down to the React component via props.
    // After the REST API is created, the query.tag will be used to get the correct blog posts from the database.
    static async getInitialProps({ query }) {
        const apiResult = await getBlogPostsByTag(query.tag)

        return {
            posts: apiResult && apiResult.posts,
            tag: query.tag,
            getDataError: apiResult && apiResult.getDataError
        }
    }

    render() {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title={`Blog posts tagged as "${this.props.tag}" | Coding Blog`}
                    metaDescription={`All blog posts tagged as "${this.props.tag}".`}
                />
                <Header />
                <div className="blog-posts-container">
                    <h1>Blog posts tagged as <u>{this.props.tag}</u></h1>
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
                <Footer />
            </div>
        )
    }
}