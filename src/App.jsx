// import { FaBeer } from 'react-icons/fa';
import './App.css'
import Blogs from './assets/Component/Blogs/Blogs'
import Header from './assets/Component/Header/Header'

function App() {

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
            <Blogs></Blogs>
          </div>

          <div className='w-1/3'>

          </div>
        </main>

      </div>
    </>
  )
}

export default App
