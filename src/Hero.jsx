const HeroSection = () => {
  return (
    <main className=" flex justify-center items-center">
      <div className="hero-content  flex  flex-col gap-y-5  items-center w-[40%]" >
        {" "}
        <h1 className=" text-5xl font-bold">YOUR FEET DESERVE THE BEST</h1>
        <p className="font-bold">
          Email Address Not Verified: If your email address is not verified on
          GitHub, you need to verify it. You should have received an email from
          GitHub with a verification link when you signed up or added the email
          address. Go to your email inbox. Find the verification email from
          GitHub. Click on the verification link in the email.
        </p>
        <div className=" flex gap-3  w-100">
          <button className="font-bold"> shop now </button>
          <button className="font-bold">category</button>
        </div>
        <div className=" flex flex-col w-100">
          <p>Also Available on </p>
          <div className="flex gap-2 items-center">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>

      <div className="w-1/3 flex items-center">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
