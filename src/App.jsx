import { useState } from 'react';
import { DetailPortal } from './components/DetailPortal';
import { Navbar } from './components/Navbar';
import { PostCard } from './components/PostCard';
import { data } from './utils/data';
import './App.css';

function App() {
  const [posts, setPosts] = useState(data.posts);
  const [postSelectedID, setPostSelectedID] = useState(null);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, postLiked: !post.postLiked } : post
      )
    );
  };

  return (
    <>
      <Navbar />
      <main className="Main">
        <div className="Feed">
          <div className="StoriesContainer"></div>
          <div className="PostsContainer">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                selectPost={() => setPostSelectedID(post.id)}
                setPostLiked={() => handleLike(post.id)}
                {...post}
              />
            ))}
          </div>
        </div>
        <div className="Info"></div>
      </main>
      {postSelectedID ? (
        <DetailPortal
          deselectPost={() => setPostSelectedID(null)}
          postData={posts.find((post) => post.id === postSelectedID)}
          setPostLiked={() => handleLike(postSelectedID)}
        />
      ) : null}
    </>
  );
}

export default App;
