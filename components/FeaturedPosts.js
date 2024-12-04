"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    const fetchRandomPosts = async () => {
      try {
        // Fetching all blog posts from the database
        const response = await axios.get("/api/blogs");
        const allPosts = response.data;

        // Shuffle and select 3 random posts
        const shuffledPosts = allPosts.sort(() => 0.5 - Math.random());
        const selectedPosts = shuffledPosts.slice(0, 3);

        setFeaturedPosts(selectedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchRandomPosts();
  }, []);

  return (
    <div className="featured-posts">
      <h2>Featured Posts</h2>
      <div className="posts-container">
        {featuredPosts.map((post) => (
          <div key={post._id} className="post">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.slug}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
