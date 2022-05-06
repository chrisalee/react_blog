import './single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';

const single = () => {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar />
    </div>
  )
}

export default single;