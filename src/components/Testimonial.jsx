const Testimonial = () => {
  return (
    <div className="relative">
      <div className="bg-[url('asset/testimonials-bg.webp')] bg-center bg-cover bg-no-repeat h-[600px] mb-20 ">
        <div className="w-10/12 mx-auto mt-20 mb-20">
          <div className="w-auto h-[100px]"></div>
          <div className="lg:w-5/12 h-[500px] bg-secondary lg:p-12 p-2">
            <h2 className="font-bold text-4xl lg:text-6xl text-base-100 mb-8 ">
              Testimonials-
            </h2>
            <p className="font-semibold text-3xl lg:text-5xl text-base-100 leading-snug mb-8">
              Founded 20 years ago - in 1999 at a small shop, today
              we have open more than 15 outlet and online service.
            </p>
            <p className="font-semibold text-xl text-base-100 leading-snug">
              Jenna Smith
            </p>
            <p className="font-semibold text-xl text-base-100 leading-snug">
              Germany, 28
            </p>
          </div>
          <div className="lg:w-5/12 bg-primary hover:bg-secondary hover:text-base-100 text-center py-6 duration-300 z-50">
            <a href="#" className="w-full text-xl font-bold">
              Meet Our Teachers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
