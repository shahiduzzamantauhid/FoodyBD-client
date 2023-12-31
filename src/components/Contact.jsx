const Contact = () => {
  return (
    <div>
      <section className=" bg-secondary -mt-24 py-32">
        <div className=" lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900 ">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-base-100  sm:text-xl">
            Got any issue? Want to send feedback about a food? Need details
            about our chef? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-xl font-medium text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
                placeholder="name@example.com"
                required
              />
            </div>
            
            <div className="sm:col-span-2">
              <label className="block mb-2 text-xl font-medium text-gray-900 ">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-5000 focus:ring-primary-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-wide btn-outline mx-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
