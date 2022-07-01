import Link from 'next/link';


const Header = () => {
    return (
        <header className="header">
            <div className='row'>
                <Link href='https://www.petjoin.com/'>
                    <a className="logo">
                        <img src='/petjoin-logo.png' />
                    </a>
                </Link>
                <ul className="menu-list">
                    <li className="menu-item">
                        <Link href='/'>
                            <a className='link'>
                                Home Page
                            </a>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href='/about-us'>
                            <a className='link'>
                                About Us
                            </a>
                        </Link>
                    </li>
                    <button className='app-btn'>Get the App</button>
                </ul>
            </div>
        </header>
    )
}
export default Header;