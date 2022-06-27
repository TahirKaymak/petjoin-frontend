import Header from "../header/header";
import { animateScroll as scroll } from 'react-scroll';
import { useState, useEffect } from 'react';
import Footer from "../footer/footer";

const Layout = ({ children }) => {
    const [showScrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            window.scrollY > 500 ? setScrollToTop(true) : setScrollToTop(false);
        }, false);
    });
    return (
        <div className="layout">
            <Header />
            <main className="main">
                {children}
            </main>
            {showScrollToTop === true ? (
                <button className="scroll-top" onClick={() => scroll.scrollToTop()}>
                    <div className="arrow-up">
                        <svg width={30} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6" /></svg>
                    </div>
                </button>
            ) : ''}
        <Footer />
        </div>
    );
};
export default Layout;