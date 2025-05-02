import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link, Links } from "react-router";

const NewsCard = ({ news }) => {
  const { id, details } =
    news;


  return (
    <div className='w-full overflow-hidden mt-6'>
            {/* header */}
            <div className='flex rounded-t-lg items-center justify-between bg-base-300 py-4 px-5'>
                <div className='flex items-center gap-3'>
                    <img className='w-12 h-12 rounded-full' src={news.author.img} alt={news.author.name} />
                    <div>
                        <p className='font-semibold text-primary'>{news.author.name}</p>
                        <span className='text-sm text-accent'>{news.author.published_date}</span>
                    </div>
                </div>
                <div className='text-3xl text-accent flex items-center gap-2'>
                    <CiBookmark/>
                    <CiShare2/>
                </div>
            </div>
            {/* main */}
            <div className='px-5 border-2 border-base-300 rounded-b-lg py-4'>
                {/* body */}
                <div>
                    {/* title */}
                    <h1 className='text-2xl font-bold leading-9 mb-4'>{news.title}</h1>
                    {/* thumbnaim img */}
                    <div className='mb-8 min-h-60'>
                        <img className='rounded-lg w-full object-cover' src={news.image_url} alt="" />
                    </div>
                    <p className='text-accent leading-6 mb-4'>
                        {details.length > 200 ? (
                            <>
                                {details.slice(0, 200)}...
                                <Link to={`/news-details/${id}`}><h3 className='font-semibold text-[#FF8C47] hover:underline cursor-pointer'>Read More</h3></Link>
                            </>
                        ):(
                            details
                        )
                    }
                    </p>
                </div>
                {/* footer */}
                <div className='border-t border-accent mt-4 pt-4 flex items-center justify-between'>
                    <div className='flex items-baseline text-lg gap-3'>
                        <div className='flex items-center gap-1 text-[#FF8C47]'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        {news.rating.number}
                    </div>
                    <div className='text-accent text-lg flex items-center gap-2'>
                        <FaEye/>
                        {news.total_view}
                    </div>
                </div>
            </div>
        </div>
  );
};

export default NewsCard;


// <Link
//               to={`/news-details/${id}`}
//               className="text-primary font-semibold cursor-pointer hover:underline"
//             >
//               Read More
//             </Link>