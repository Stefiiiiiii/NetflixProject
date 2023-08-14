import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

export default function Footer() {
    return (
        <div className="container-footer">
            <footer className="footer">
                <div className="icons-footer">
                    <FacebookIcon className="icon-footer" />
                    <InstagramIcon className="icon-footer" />
                    <YouTubeIcon className="icon-footer" />
                </div>
                <div className="footer-cols">
                    <ul>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Corporate Information</li>
                        <li>Netflix Originals</li>
                    </ul>
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Account</li>
                        <li>Redeem Gift Cards</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                    <ul>
                        <li>Media Center</li>
                        <li>Buy Gift Cards</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
