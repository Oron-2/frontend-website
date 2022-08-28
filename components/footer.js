import { Component } from "react"

export default class extends Component {
    render () {
        return (
            <footer className="footer-wrapper">
                <div className="footer-links">
                    <a href="/blog">Blog</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-bottom-msg">
                    <p>"The rate at which a person can mature is directly proportional to the embarrassment he can tolerate." ~ <strong>Douglas Engelbart</strong></p>
                </div>
            </footer>
        )
    }
}