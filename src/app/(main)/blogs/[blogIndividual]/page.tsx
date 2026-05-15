import blogData from "../blogData";
import BlogDetails from "./BlogDetails";

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    blogIndividual: blog.url,
  }));
}

export default function Page() {
  return (
    <>
      <BlogDetails />
    </>
  );
}
