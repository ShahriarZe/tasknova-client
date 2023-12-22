

const Feedback = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Give Us Feedback!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body border-primary border">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input type="text" placeholder="Message" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary btn-outline">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Feedback;