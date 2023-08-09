import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-white.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img src={Logo} alt="logo-footer" className="footer-logo" />

                <div className="footer-site-map">
                    <p className="footer-title">Site Map</p>
                    <Link to="/" className="footer-item">Home</Link>
                    <Link to="/about" className="footer-item">About</Link>
                    <Link to="/menu" className="footer-item">Menu</Link>
                    <Link to="/reserve" className="footer-item">Reserve</Link>
                </div>

                <div className="footer-contact">
                    <p className="footer-title">Contact</p>
                    <p className="footer-item">Phone: 123-456-7890</p>
                    <p className="footer-item">Email: little.lemon@lemon.com</p>
                    <p className="footer-item">Address: 123 Lemon Street, Lemon, CA 12345</p>
                </div>

                <div className="footer-social">
                    <p className="footer-title">Social</p>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-item">Facebook</a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-item">Instagram</a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="footer-item">Twitter</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;


