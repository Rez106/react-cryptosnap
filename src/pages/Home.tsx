import { Link } from "react-router-dom";
import headerImg from "/assets/images/header-banner.svg";

const Home = () => {
  return (
    <>
      <div className="home-header">
        <div className="home-header-top">
          <div className="home-header__desc">
            <h1 className="desc__header">
              Crypto Currency Price Tracking Website
            </h1>
            <p className="desc__info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              unde ipsam, eos earum incidunt libero iusto asperiores voluptas
              tenetur, velit expedita! Eveniet quidem sit, suscipit, hic
              quibusdam ipsam assumenda aspernatur distinctio beatae ullam optio
              dolore illo? Soluta perferendis quam porro.
            </p>
            <div className="desc__button">
              <Link to="/currencies">Let me see</Link>
            </div>
          </div>
          <div className="home-header__banner">
            <img src={headerImg} alt="banner" className="banner__image" />
          </div>
        </div>
        <div className="copyright">
          <p>© 2023 Copyright. Developed by @Rez106</p>
        </div>
      </div>
    </>
  );
};

export default Home;
