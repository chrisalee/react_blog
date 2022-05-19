import './single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import BackToTop from '../../components/backToTop/BackToTop';
import Footer from "../../components/footer/Footer";

const single = () => {
  return (
    <div className='single'>
      <div className="single__container">
        <SinglePost />
        <Sidebar />
      </div>
      <BackToTop />
      <Footer />
    </div>
  )
}

export default single;