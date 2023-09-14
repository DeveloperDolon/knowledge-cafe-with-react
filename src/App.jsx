// import { FaBeer } from 'react-icons/fa';
import { useState } from 'react'
import './App.css'
import Blogs from './assets/Component/Blogs/Blogs'
import Header from './assets/Component/Header/Header'
import BookMark from './assets/Component/BookMarks/BookMark';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookMarks = (blog) => {
    const newArray = [...bookmarks, blog];
    setBookmarks(newArray);
    handleReadingTime(blog.time_to_read);
  }

  const handleReadingTime = (time) => {
    const newTime = readTime + parseInt(time);
    setReadTime(newTime);
  }

  const minusReadingTIme = (time) => {
    const newTime = readTime - parseInt(time);
    setReadTime(newTime);
  }

  const handleReadBlog = (id) => {
    const recentObj = bookmarks.find(item => id === item.id);
    
    const newArray = bookmarks.filter(item => id !== item.id);
    setBookmarks(newArray);
    minusReadingTIme(recentObj.time_to_read);
  }
 
  return (
    <>
      <div>
        {/* header section is here */}
        <header className='max-w-7xl mx-auto' >
          <Header></Header>
        </header>

        {/* main section is here */}
        <main className='max-w-7xl mx-auto flex mt-6'>
          <div className='w-2/3'> 
            <Blogs handleBookMarks={handleBookMarks} handleReadBlog={handleReadBlog}></Blogs>
          </div>

          <div className='w-1/3 p-5'>
            <h1 className='font-semibold text-2xl text-center bg-[#3C47EC1A] text-[#6047EC] py-3 border rounded-md'>Spent time on read : {readTime} min</h1>

            <div className='py-7 px-5 bg-[#1111110D] mt-8 rounded-md'>
              <h1 className='font-bold text-xl'>Bookmarked Blogs : {bookmarks.length}</h1>

              <div className='space-y-5 mt-6'>
                {
                  bookmarks.map((item, idx) => <BookMark key={idx} item={item}></BookMark>)
                }
              </div>
            </div>
          </div>
        </main>

      </div>
    </>
  )
}

export default App
