const AdmissionForm = () => {
  return (
    <div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Father name</span>
          </label>
          <input
            type="text"
            placeholder="Father name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Admit Now</button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
