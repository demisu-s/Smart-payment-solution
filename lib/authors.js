import fs from "fs";
import path from "path";
import matter from "gray-matter";

const authorsDirectory = path.join(process.cwd(), "content/authors");

export function getAuthorData(authorName) {
  const authorSlug = authorName.toLowerCase().replace(/ /g, "-");
  const fullPath = path.join(authorsDirectory, `${authorSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null; // handle missing author gracefully
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    name: data.name,
    image: data.image,
    description: data.description,
  };
}
