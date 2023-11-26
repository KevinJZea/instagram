import { Navbar } from './components/Navbar';
import { PostCard } from './components/PostCard';
import { data } from './utils/data';
import './App.css';

function App() {
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
                {...post}
              />
            ))}
          </div>
        </div>
        <div className="Info"></div>
      </main>
    </>
  );
}

export default App;
