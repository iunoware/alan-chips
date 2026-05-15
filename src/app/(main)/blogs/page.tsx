import { Metadata } from "next";
import BlogList from "./blogList";

export const metadata: Metadata = {
  title: "Alan Chips Blogs | Chips, Snacks & Food Trends",
  description:
    "Read the Alan Chips blog for snack ideas, traditional chips insights, healthy snacking tips, food trends, and updates on potato, tapioca, and banana chips.",
};

export default function Page() {
  return <BlogList />;
}
