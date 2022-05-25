import Post from '../../components/post/Post';
import './posts.css';

const Posts = ({ posts }) => {
  return (
    <div className='posts'>
        {
          posts.slice(0).reverse().map((post) => (
            <Post post={post} key={post._id} />
          ))
        }
    </div>
  )
}

export default Posts;