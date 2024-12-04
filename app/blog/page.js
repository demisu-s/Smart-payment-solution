import clientPromise from "@/lib/mongodb";
import BlogList from "@/components/BlogList";
import Head from "next/head";
import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";

export default async function BlogPage() {
  let posts = [];
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("ppn-site-dev");
    const collection = db.collection("blogs");

    // Fetch all blog posts
    posts = await collection
      .find(
        {},
        { projection: { slug: 1, title: 1, coverImage: 1, date: 1, author: 1 } }
      )
      .toArray();

    // Convert MongoDB documents to plain JavaScript objects
    posts = posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      coverImage: post.coverImage,
      date: post.date,
      author: post.author,
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }

  return (
    <PlaxLayout>
      <Head>
        <title>Blog | Process Payments Now</title>
        <meta
          name="description"
          content="Read the latest blogs from Process Payments Now"
        />
      </Head>
      <PageBanner
        pageName="Blog"
        title="Your Source of Financial Information"
      />
      <BlogList posts={posts} />
    </PlaxLayout>
  );
}
