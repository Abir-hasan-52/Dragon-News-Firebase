import { FaEye, FaStar } from "react-icons/fa";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id,
    title,
    author,
    thumbnail_url,

    details,
    rating,
    total_view,
  } = news;

  const formattedDate = new Date(
    news.author.published_date
  ).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md border border-gray-100 rounded-xl">
      {/* Card Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-xl text-gray-600">
          <BsBookmark className="cursor-pointer hover:text-accent" />
          <BsShare className="cursor-pointer hover:text-accent" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-3 text-neutral">{title}</h2>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-52 object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-700 mb-3">
          {details.length > 150 ? details.slice(0, 150) + "... " : details}
          <Link to={`/news-details/${id}`} className="text-blue-600 font-medium cursor-pointer hover:underline">
            Read More
          </Link>
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex justify-between items-center px-4 pb-4 mt-auto text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-gray-800">{rating.number.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
