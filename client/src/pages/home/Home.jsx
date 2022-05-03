import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';

import './home.css';

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <div className="home__container">
          <Posts />
          <Sidebar />

        </div>
        homepage
    </div>
  )
}

export default Home