import Link from 'next/link';
import Header from "../components/header/header"
import Layout from '../components/layout/layout';

const Home = () => {
  return (
    <Layout>
      <section className='hero'>
        <div className='container'>
          <div className='contents'>
            <div className='heading'>
              Lorem ipsum dolor sit amet
            </div>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className='media'>
              <img src='/backgraund.jpg' alt='/' />
            </div>
            <div className="buttons-row">
              <Link href={"/"}>
                <a className="btn bg-primary">
                  <div className="icon">
                    <svg width={25} viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 12.791V.75M12.916 9.863L10 12.791 7.084 9.863" />
                        <path d="M14.633 5.483h.933a3.684 3.684 0 013.684 3.685v4.884a3.675 3.675 0 01-3.675 3.675H4.435A3.685 3.685 0 01.75 14.042V9.157a3.675 3.675 0 013.675-3.674h.942" />
                      </g>
                    </svg>
                  </div>
                  <span>Download Client</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <div className='content'>
              <div className='heading'>
                Try it.
                <br />
                Learn it.
                <br />
                Master it.
              </div>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare accumsan orci
              </p>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare accumsan orci
              </p>
              <div className='mobile-apps'>
                <Link href={"/"}>
                  <a className='app'>
                    <img src='/app.svg' alt='/' />
                  </a>
                </Link>
                <Link href={"/"}>
                  <a className='app'>
                    <img src='/store.svg' alt='/' />
                  </a>
                </Link>
              </div>
            </div>
            <div className='media-content'>
              <div className='media'>
                <img src='phone.png' alt="/" />
              </div>
              <div className='media'>
                <img src='phone2.png' alt="/" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='column'>
            <div className='row'>
              <div className='blog-card'>
                <div className='card-image'>
                  <img src='/blogcard.png' alt="/" />
                </div>
                <div className='blog-card-heading'>
                  Lorem ipsum dolor sit amet
                </div>
                <p className='blog-card-paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare accumsan orci,
                </p>
              </div>
              <div className='blog-card'>
                <div className='card-image'>
                  <img src='/blogra.png' alt="/" />
                </div>
                <div className='blog-card-heading'>
                  Lorem ipsum dolor sit amet
                </div>
                <p className='blog-card-paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare accumsan orci,
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='blog-card'>
                <div className='card-image'>
                  <img src='/blogcard3.png' alt="/" />
                </div>
                <div className='blog-card-heading'>
                  Lorem ipsum dolor sit amet
                </div>
                <p className='blog-card-paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare accumsan orci,
                </p>
              </div>
              <div className='blog-card'>
                <div className='card-image'>
                  <img src='/blogcard3.png' alt="/" />
                </div>
                <div className='blog-card-heading'>
                  Lorem ipsum dolor sit amet
                </div>
                <p className='blog-card-paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare accumsan orci,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='partner-section'>
        <div className='partner-container'>
          <div className='partner-column'>
            <div className='partner-heading'>
              Lorem ipsum dolor sit amet
            </div>
            <div className='partner-media'>
              <img src='adv.png' alt='/' />
            </div>
            <div className='partner-btn-primary'>
              <button className='partner-btn'>
                Meet The Team
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='app-screen-section'>
        <div className='app-screen'>
          <img src='/app-screen.png' alt='/' />
        </div>
      </section>
    </Layout >

  )
}
export default Home;

