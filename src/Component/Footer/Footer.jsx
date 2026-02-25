import React from 'react'
import './footer.css'
import Image from '../MiniComponent/Image'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            {/* LEFT */}
            <div className='footer-left-div'>
                <div>
                    <Image src={'/git_branch.svg'} />
                    <p>main</p>
                </div>
                <div>
                    <Image src={'/cross.svg'} />
                    <p>0</p>
                </div>
                <div>
                    <Image src={'/warning.svg'} />
                    <p>0</p>
                </div>
            </div>

            {/* CENTER */}
            <div className='footer-center-div'>
                <Link to="/About" className="footer-link">About</Link>
                <span className="footer-divider">|</span>
                <Link to="/PrivacyPolicy" className="footer-link">Privacy Policy</Link>
                <span className="footer-divider">|</span>
                <Link to="/Contact" className="footer-link">Contact</Link>
            </div>

            {/* RIGHT */}
            <div className='footer-right-div'>
                <div>
                    <Image src={'/react-svgrepo-com.svg'} />
                    <p className='powered-by-react'>Powered By React</p>
                </div>
                <div>
                    <Image src={'/double-tic.svg'} />
                    <p>Prettier</p>
                </div>
                <div>
                    <Image src={'/bell.svg'} />
                </div>
            </div>
        </footer>
    )
}