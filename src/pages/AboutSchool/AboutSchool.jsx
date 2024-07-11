import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {
  useGetPostQuery,
  useSetPostMutation,
} from "../../redux/features/baseApi/baseApi";
import SchoolBlog from "./SchoolBlog";

const AboutSchool = () => {
  const { register, handleSubmit } = useForm();
  const { data: posts, isLoading, isError } = useGetPostQuery();
  const [setPost, { data: postData }] = useSetPostMutation();

  console.log(postData);
  const onSubmit = (data) =>
    setPost({ title: "this is my post", body: data.post });

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (!isLoading && isError) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <div>
      <SectionTitle
        subHeading={"daily About School coming soon"}
        heading={"School"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" className="border" {...register("post")} />
        </div>
        <input className="btn" type="submit" value="Post" />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts?.slice(0, 21).map((post) => (
          <SchoolBlog key={post.id} SchoolBlog={post}></SchoolBlog>
        ))}
      </div>
    </div>
  );
};

export default AboutSchool;
