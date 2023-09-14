import PropTypes from "prop-types";
import { BsFillBookmarkFill } from 'react-icons/bs';

export default function Blog({ blog, handleBookMarks, handleReadBlog }) {

    const { profile_name, profile_image, post_date, time_to_read, hashtags, cover_picture, title } = blog;

    return (
        <div className="border-b space-y-5 pb-5">
            <div>
                <img className="w-full rounded-lg" src={cover_picture} alt="" />
            </div>

            <div className="flex justify-between items-center pt-4 pb-2">
                <div className="flex gap-5">
                    <img className="w-[10%]" src={profile_image} alt="" />
                    <div>
                        <h3 className="text-xl font-bold">{profile_name}</h3>
                        <p className="text-sm">{post_date}</p>
                    </div>
                </div>

                <div className="flex gap-2 items-center w-fit">
                    <p className="w-fit">{time_to_read}min read</p>
                    
                    <button>
                        <BsFillBookmarkFill onClick={() => handleBookMarks(blog)} className="cursor-pointer"></BsFillBookmarkFill>
                    </button>

                </div>
            </div>

            <div>
                <h1 className="text-4xl font-bold">{title}</h1>
            </div>

            <div className="flex gap-4">
                {
                    hashtags.map((item, idx) => <p key={idx}>{item}</p>)
                }
            </div>

            <div>
                <a onClick={() => handleReadBlog(blog.id)} className="font-semibold text-purple-600 underline cursor-pointer">Mark As read</a>
            </div>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object,
    handleBookMarks: PropTypes.func,
    handleReadBlog: PropTypes.func
}