import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-[80vh] max-w-7xl mx-auto lg:mt-10" style={{backgroundImage:`url(${banner})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div>
            <h1 className="mb-5 text-5xl font-bold">TaskNova</h1>
            <p className="mb-5 text-3xl font-semibold">Seamless Task Management, Limitless Achievements</p>
            <button className="btn btn-primary text-xl uppercase btn-outline">Explore More</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;