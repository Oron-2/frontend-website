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
                    title="About Me | Coding Blog"
                    metaDescription="Petar Alekseev Pandzharov is a recent computing technologies graduate who writes about things mostly related to technology."
                />
                <GoogleAnalytics />
                <Header />
                <div className="about-container">
                    <div className="about-section">
                        <h1>About Me</h1>
                        <p>I'm Petar, a recent computing technologies graduate.</p>
                        <p>I started this website as a place to document everything I learn while going through a career change. I learn in public and write about everything I know.</p>
                    </div>
                    <div className="about-section">
                        <h2>My Projects</h2>
                        <ul>
                            <li><a href="https://github.com/discourse/discourse">Discrouse</a> - A platform for community discussion. Free, open, simple.</li>
                            <li><a href="https://github.com/showdownjs/showdown">Showdown</a> - A bidirectional Markdown to HTML to Markdown converter written in Javascript.</li>
                            <li><a href="https://github.com/node-schedule/node-schedule">Node Schedule</a> - A cron-like and not-cron-like job scheduler for Node.</li>
                        </ul>
                    </div>
                    <div className="about-section">
                        <h2>Hardware Currently in Use</h2>
                        <ul>
                            <li><strong>Computer</strong>: MacBook Pro (Retina, 13-inch, Early 2015)</li>
                            <li><strong>Keyboard</strong>: Keychron K8 Wireless Mechanical Keyboard - RGB Backlight / Gateron (Hot-swappable) / Red</li>
                            <li><strong>Mouse</strong>: Logitech MX Master 2S</li>
                            <li><strong>Monitor</strong>: Huawei MateView 28.2 inch Monitor, 4K UHD(3840x2560), 3:2 Aspect Ratio </li>
                        </ul>
                    </div>
                    <div className="about-section">
                    <h2>Some Technologies Used to Create the Blog</h2>
                        <ul>
                            <li><strong>Web Hosting</strong>: <a href="https://www.digitalocean.com/">DigitalOcean</a></li>
                            <li><strong>Code Editor</strong>: <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                            <li><strong>Frontend Coding Framework</strong>: <a href="https://nextjs.org/">Next.js</a></li>
                            <li><strong>Backend Coding Framework</strong>: <a href="https://expressjs.com/">Express.js</a></li>
                            <li><strong>Database and Object Document Mapper</strong> <a href="https://www.mongodb.com/">MongoDB</a> and <a href="https://mongoosejs.com/">Mongoose</a></li>
                            <li><strong>Syntax Highlighting</strong>: <a href="https://prismjs.com">PrismJS</a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}