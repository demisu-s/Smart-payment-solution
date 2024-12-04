import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { CallToAction2 } from "@/components/CallToAction";
import AuthorCard from "@/components/AuthorCard";
import FeaturedPosts from "@/components/FeaturedPosts";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;
const collectionName = process.env.MONGODB_BLOG;

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription || ""} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription || ""} />
        <meta property="og:image" content={post.coverImage} />
      </Head>

      <PlaxLayout>
        <div className="mil-banner mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <div className="mil-text-m blog-accent mil-mb-20">Blog</div>
                  <h1 className="mil-mb-60 blog-title">{post.title}</h1>
                  <ul className="mil-breadcrumbs mil-pub-info mil-center">
                    <li>
                      <Link href="/" className="blog-accent">
                        {post.date}
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="blog-accent">
                        {post.author}
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="blog-accent">
                        {post.category}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner end */}
        {/* publication */}
        <div className="mil-blog-list mil-p-0-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="mil-pub-cover mil-mb-60 mil-up">
                  <img
                    src={post.coverImage}
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-mb-15 mil-up">
                  <blockquote className="mil-text-xl mil-blog-quote mil-mb-15">
                    {post.quote.text}
                  </blockquote>
                  <p className="mil-text-m"> {post.quote.author}</p>
                </div>
              </div>
              <div className="col-xl-9 mil-p-80-80">
                <h2 className="mil-mb-60 mil-up">{post.subTitle}</h2>
                <div className="blog-content">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* publication end */}
        <div className="mil-mb-80">
          <AuthorCard />
        </div>
        <FeaturedPosts />
        <CallToAction2 />
      </PlaxLayout>
    </>
  );
}

export async function generateStaticParams() {
  // Connect to MongoDB and fetch slugs for all posts
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const posts = await collection
    .find({}, { projection: { slug: 1 } })
    .toArray();
  await client.close();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPostBySlug(slug) {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const post = await collection.findOne({ slug });
  await client.close();

  if (!post) {
    throw new Error(`Post with slug "${slug}" not found`);
  }

  return post;
}
