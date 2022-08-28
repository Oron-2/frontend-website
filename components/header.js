import { Component } from "react"

export default class extends Component {
    render () {
        return (
            <header className="header-wrapper">
                <div className="header-container">
                    <div className="header-logo">
                        <a href="/">
                            <span className="header-logo-icon"><img src="/favicon-32x32.png"/></span>
                            <span className="header-logo-text">Petar Alekseev Pandzharov</span>
                        </a>
                    </div>
                    <div className="header-links">
                        <a href="/blog">Blog</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </header>
        )
    }
}