import { useState } from 'react';
import { DetailPortal } from './components/DetailPortal';
import { Navbar } from './components/Navbar';
import { PostCard } from './components/PostCard';
import { data } from './utils/data';
import './App.css';

function App() {
  const [postSelected, setPostSelected] = useState(null);

  return (
    <>
      <Navbar />
      <main className="Main">
        <div className="Feed">
          <div className="StoriesContainer"></div>
          <div className="PostsContainer">
            {data.posts.map((post) => (
              <PostCard
                key={post.id}
                selectPost={() => setPostSelected(post)}
                {...post}
              />
            ))}
          </div>
        </div>
        <div className="Info"></div>
      </main>
      {postSelected ? (
        <DetailPortal
          deselectPost={() => setPostSelected(null)}
          postData={postSelected}
        />
      ) : null}
    </>
  );
}

export default App;
