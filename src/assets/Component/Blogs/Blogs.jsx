import { useEffect, useState } from "react"
import Blog from "./Blog";


export default function Blogs() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("../../../../public/data.json")
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])
 
  return (
    <div className="space-y-14 p-5">
        {
            blogs.map((item, idx) => <Blog key={idx} blog={item}></Blog>)
        }
    </div>
  )
}
