
const Subscrib = () => {
    return (
        <div className="w-10/12 mx-auto py-12">
            <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center text-xl font-semibold text-center" data-aos="fade-left">Subscribe for Getting Our New Announcement</div> 
  <div className="divider lg:divider-horizontal" data-aos="zoom-in"></div> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center" data-aos="fade-right"><form>
          <div className="form-control">
            <div className="input-group w-auto mx-auto my-6">
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered"
                name="search"
              />
              <button className="btn btn-primary">
                subscribe
              </button>
            </div>
          </div>
        </form></div>
</div>
        </div>
    );
};

export default Subscrib;