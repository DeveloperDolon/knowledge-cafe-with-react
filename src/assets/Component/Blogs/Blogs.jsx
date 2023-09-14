import { useEffect, useState } from "react"
import PropTypes from "prop-types";
import Blog from "./Blog";


export default function Blogs({handleBookMarks, handleReadBlog}) {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("../../../../public/data.json")
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])
 
  return (
    <div className="space-y-14 p-5">
        {
            blogs.map((item, idx) => <Blog key={idx} blog={item} handleBookMarks={handleBookMarks} handleReadBlog={handleReadBlog} ></Blog>)
        }
    </div>
  )
}
Blogs.propTypes = {
  handleBookMarks: PropTypes.func,
  handleReadingTime: PropTypes.func,
  handleReadBlog: PropTypes.func
}
