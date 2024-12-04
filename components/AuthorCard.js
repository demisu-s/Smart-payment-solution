import Image from "next/image";

function AuthorCard() {
  const author = {
    name: "John Doe",
    description: "An expert in payment processing and financial technologies.",
    photo: "/img/auth/1.webp",
  };

  return (
    <div className="mil-authcard-card">
      <div className="mil-authcard-photoContainer">
        {author.photo && (
          <Image
            src={author.photo}
            alt={`${author.name}'s photo`}
            width={150}
            height={150}
            className="mil-authcard-photo"
          />
        )}
      </div>
      <div className="mil-authcard-info">
        <h2 className="mil-authcard-name">{author.name}</h2>
        <p className="mil-authcard-description">{author.description}</p>
      </div>
    </div>
  );
}

export default AuthorCard;
