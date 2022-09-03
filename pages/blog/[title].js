import { Component } from "react"
import Prism from "prismjs" // The PrismJS NPM packages adds syntax highlighting to any code snippets I include in my blog posts.
import moment from "moment"

// The normalizing whitespace plugin will automatically trim all leading and trailing whitespace from the code blocks.
// It will also remove extra indents and trailing whitespace on every line.
import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetadata from "../../components/headMetadata.js"
import GoogleAnalytics from "../../components/googleAnalytics.js"

// Pulling the data into the page by first importing the function responsible for sending
// a request to the REST API for the content and receiving a response with that content
// Now, I need to display all the content
import getBlogPostByUrlTitle from "../../api/getBlogPostByUrlTitle.js"

export default class extends Component {
    static async getInitialProps({ query }) {
        const apiResult = await getBlogPostByUrlTitle(query.title)

        return {
            post: apiResult && apiResult.post,
            getDataError: apiResult && apiResult.getDataError,
            notFoundError: apiResult && apiResult.notFoundError
        }
    }

    // Adding syntax highlighting to each code block on your page once it loads
    // by creating the componentDidMount() method and calling the Prism.highlightAll() function inside of it.
    // This will ensure that all code blocks are syntax highlighted right away when the page loads.
    componentDidMount() {
        Prism.highlightAll()
    }

    render() {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title={this.props.post ? this.props.post.seoTitleTag : "Blog Post | Coding Blog"}
                    metaDescription={this.props.post && this.props.post.seoMetaDescription}
                />
                <GoogleAnalytics />
                <Header />
                <div className="blog-post-container">
                    {
                        this.props.post && !this.props.getDataError && !this.props.notFoundError ?
                            <>
                                <div className="blog-post-top-section">
                                    <h1>{this.props.post.title}</h1>
                                    <div className="blog-post-top-meta">
                                        <span>{moment.unix(this.props.post.dateTimestamp).format("MMMM Do, YYYY")}</span>
                                        {
                                            this.props.post.tags.map((tag, index) => {
                                                return (
                                                    <a
                                                        className="blog-post-top-tag-btn"
                                                        key={index}
                                                        href={`/blog/tags/${tag}`}
                                                    >
                                                        <span>{tag}</span>
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: this.props.post.markdownContent }} className="blog-post-body-content"></div>
                            </> :
                            <div className="blog-post-get-data-error-msg">
                                {
                                    this.props.notFoundError ?
                                        <span>Blog post not found.</span> :
                                        <span>An error occurred.</span>
                                }
                            </div>
                    }
                </div>
                <Footer />
            </div>
        )
    }
}