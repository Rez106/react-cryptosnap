import logo from "/assets/images/logo2.png";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="text-wrapper">
        <h1>
          Welcome to <span className="text-sky-300">CryptoSnap</span> <br />
          Your Ultimate Crypto Price Tracking Companion!
        </h1>
        <p>
          At <span className="text-sky-300">CryptoSnap</span>, we understand
          that navigating the world of cryptocurrencies can be both exciting and
          overwhelming. With the rapidly changing market trends and countless
          coins to keep track of, staying updated is essential for making
          informed decisions. That's where we come in.
        </p>
        <p>
          As a team of passionate crypto enthusiasts, we've created{" "}
          <span className="text-sky-300">CryptoSnap</span> to provide you with a
          seamless and user-friendly platform for tracking the latest
          cryptocurrency prices, trends, and news. Whether you're a seasoned
          investor or just starting your journey into the world of digital
          assets, our platform is designed to cater to all levels of expertise.
        </p>
        <p>
          What sets <span className="text-sky-300">CryptoSnap</span> apart is
          our commitment to accuracy and real-time updates. Our cutting-edge
          technology aggregates data from various reliable sources, ensuring
          that you receive the most up-to-date information on your favorite
          cryptocurrencies. Our intuitive charts and tools empower you to
          analyze market trends, compare historical data, and make well-informed
          decisions.
        </p>
        <p>
          But we're more than just a price tracking website. We're a
          community-driven platform that aims to foster discussions, insights,
          and learning opportunities. Our blog features expert articles, market
          analyses, and valuable resources to help you expand your crypto
          knowledge.
        </p>
        <p>
          Join us on this exciting journey of tracking, learning, and growing
          within the dynamic world of cryptocurrencies. Whether you're
          interested in Bitcoin, Ethereum, or the latest altcoins,{" "}
          <span className="text-sky-300">CryptoSnap</span> is your go-to source
          for staying connected to the crypto market.
        </p>
        <p>
          Thank you for choosing{" "}
          <span className="text-sky-300">CryptoSnap</span> as your crypto price
          tracking companion. Together, let's navigate the crypto landscape with
          confidence!
        </p>
        <h6>
          Stay informed. Stay empowered.{" "}
          <span className="text-sky-300">CryptoSnap</span>.
        </h6>
      </div>
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default About;
