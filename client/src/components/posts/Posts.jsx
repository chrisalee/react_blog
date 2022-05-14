import './posts.css';
import Post from '../../components/post/Post';

const Posts = ({ posts }) => {
  return (
    <div className='posts'>
        {
          posts.map((post) => (
            <Post post={post} />
          ))
        }
    </div>
  )
}

export default Posts