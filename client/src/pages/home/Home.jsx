import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import axios from 'axios';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';
import './home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts" + search);
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className='home'>
        <Header />
        <div className="home__container">
          <Posts posts={posts}/>
          <Sidebar />
        </div>
    </div>
  )
}

export default Home