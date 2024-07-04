const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-[50%] mx-auto text-center">
      <hr />
      <h1 className="text-3xl">{heading}</h1>
      <p className="">{subHeading}</p>
      <hr />
    </div>
  );
};

export default SectionTitle;
