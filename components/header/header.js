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
                                Log in
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
                <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>

                    <ul class="menu__box">
                        <li><a class="menu__item" href="#">Главная</a></li>
                        <li><a class="menu__item" href="#">Проекты</a></li>
                        <li><a class="menu__item" href="#">Команда</a></li>
                        <li><a class="menu__item" href="#">Блог</a></li>
                        <li><a class="menu__item" href="#">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;