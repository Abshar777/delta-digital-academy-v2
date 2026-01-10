const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-foreground px ">
      <div className="bg-background grid-bg px-20 py-10 rounded-t-[4rem] h-screen">
        <div className="grid grid-cols-2 mt-5 w-full">
          <div className="flex flex-col  justify-center gap-2">
            <p className=" w-fit bg-primary px-6 text-center  rounded-full text-foreground bg text-md py-2 font-semibold font-poppins">
              About Us
            </p>
            <h1 className="text-5xl capitalize  font-bold font-poppins">
              Dubai's{" "}
              <span className="text-primary  color-flicker-text ">Best</span>{" "}
              Academy <br />
              for Digital Marketing
            </h1>
            <p className="text-sm mt-2 font-semibold font-poppins">
              Delta Digital Academy is a powerhouse of creative thinkers,
              marketers, and strategists dedicated to helping brands grow
              online.From smart ads to stunning websites and engaging content we
              build everything your digital presence needs.
            </p>
            <div className="mt-5 w-full grid grid-cols-2 gap-4">
              <div className="w-full h-full bg-primary border-2 border-foreground  p-6 shadow-[3px_3px_0_0_#000] rounded-2xl">
                <h3 className="text-2xl font-bold font-poppins">Vision</h3>
                <p className="text-xs mt-2 font-semibold font-poppins">
                  To make digital education accessible to
                  everyone—students, professionals, homemakers, and
                  entrepreneurs—no matter their time or situation. We aim to
                  build confident future marketers by offering flexible,
                  high-quality digital marketing education that removes the
                  limits of traditional learning in Dubai and supports anyone
                  who wants to grow.
                </p>
              </div>
              <div className="w-full h-full bg-primary border-2 border-foreground  p-6 shadow-[3px_3px_0_0_#000] rounded-2xl">
                <h3 className="text-2xl font-bold font-poppins">Mission</h3>
                <p className="text-xs mt-2 font-semibold font-poppins">
                  To make digital marketing a skill that everyone can learn,
                  understand, and confidently use. Our mission is to offer
                  flexible, practical, and affordable digital marketing training
                  that empowers every individual—regardless of their
                  background—to become digitally capable.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-end px-10">
            <div className="w-3/4 aspect-[1/1.3] bg-black rounded-2xl overflow-hidden">
              <video
                src="/1.mp4"
                autoPlay
                muted
                loop
                className="w-full opacity-65 h-full object-cover "
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
