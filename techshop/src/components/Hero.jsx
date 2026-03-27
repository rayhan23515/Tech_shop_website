const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="line">Future</span>
          <span className="line">
            <span className="hero-highlight">Tech</span> Hub
          </span>
        </h1>
        <p className="hero-subtitle">
          Explore cutting-edge gadgets and premium electronics. Elevate your digital lifestyle with the latest innovations.
        </p>
        <button className="hero-cta" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
          <span>Discover Now</span>
        </button>
      </div>
      <div className="hero-glow"></div>
    </section>
  );
};

export default Hero;