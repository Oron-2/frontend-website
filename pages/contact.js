import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"
import GoogleAnalytics from "../components/googleAnalytics.js"

export default class extends Component {
    render () {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="Contact | Coding Blog"
                    metaDescription="If you have any comments, ideas, critiques, or want to say hi, don't hesitate to email me at PetarPandzharov@protonmail.ch!"
                />
                <GoogleAnalytics />
                <Header />
                <div className="contact-container">
                    <div className="contact-section">
                        <h1>Contact</h1>
                        <p>If you have any comments, ideas, critiques, or want to say hi, don't hesitate to email me at PetarPandzharov@protonmail.ch!</p>
                    </div>
                    <div className="contact-section">
                        <h2>Around the Web</h2>
                        <ul>
                            <li><strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/petar-pandzharov-1428311a9">Petar Pandzharov</a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}