import Link from "next/link";

const BlogList = ({ posts }) => {
  return (
    <div className="mil-blog-list mil-p-0-160">
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div key={post.slug} className="col-xl-4 col-md-6">
              <Link
                href={`/blog/${post.slug}`}
                className="mil-blog-card mil-mb-15 mil-up"
              >
                <div className="mil-card-cover">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-descr">
                  <p className="mil-text-xs mil-accent mil-mb-10">
                    {post.date}
                  </p>
                  <h4>{post.title}</h4>
                  <p className="mil-text-xs mil-author mil-mt-15">
                    {post.author}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mil-text-center mil-mt-30 mil-up">
          <a href="#" className="mil-btn mil-m mil-add-arrow">
            Load more publications
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
