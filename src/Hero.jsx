const HeroSection = () => {
    return(
        <main className="container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES 
                </p>
            </div>
            <div className="hero-btn">
                <button> shop now </button>
                <button>category</button>
            </div>
            <div className="shopping">
                <p>also available on </p>
                <div>
                    <img src="/images/amazon.png" alt="" />
                    <img src="/images/flipkart.png" alt="" />
                </div>
            </div>
            <div className="hero-image">
            <img src="/images/shoe_image.png" alt="" />
            </div>

        </main>
    );
};

export default HeroSection;