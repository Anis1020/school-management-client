const SchoolBlog = ({ SchoolBlog }) => {
  const { title, body, id } = SchoolBlog;
  return (
    <>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <h2 className="card-title">
            {id} . {title}
          </h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolBlog;
