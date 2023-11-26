import { useRef, useState } from 'react';
import { Icon } from '../Icon';
import { ICONS } from '../../utils/constants';
import { createRandomID, formatLikes, timeAgo } from '../../utils/helpers';
import './PostCard.css';

export function PostCard({
  author,
  comments,
  createdAt = new Date(),
  description,
  imageUrl,
  likes,
  location,
  selectPost,
}) {
  const [commentValue, setCommentValue] = useState('');
  const [postLiked, setPostLiked] = useState(false);
  const [postComments, setPostComments] = useState(comments);

  const commentInput = useRef(null);

  const handleCommentValue = () => setCommentValue(commentInput.current.value);
  const handleLike = () => setPostLiked((previousValue) => !previousValue);
  const handleFocusInput = () => commentInput.current.focus();
  const handleNewComment = (event) => {
    event.preventDefault();
    setPostComments((prevComments) => [
      ...prevComments,
      {
        author: { username: 'kevinjzea', verified: true },
        message: commentValue,
        id: createRandomID(10),
      },
    ]);
    setCommentValue('');
  };

  return (
    <article className="PostCard">
      <div className="PostCard--header">
        <img
          className="PostCard--profile-pic"
          src={author.profilePic}
          width={32}
          height={32}
          alt={author.username}
        />
        <div className="PostCard--header-info-container">
          <div className="PostCard--header-user-info-container">
            <span className="PostCard--username">{author.username}</span>
            {author.verified ? <Icon name={ICONS.VERIFICATION} /> : null}
            <span className="PostCard--header-separator">•</span>
            <span className="PostCard--timeago">{timeAgo(createdAt)}</span>
          </div>
          <span className="PostCard--location">{location}</span>
        </div>
      </div>

      <button
        className="PostCard--image-container"
        onClick={selectPost}
      >
        <img
          className="PostCard--main-image"
          src={imageUrl}
          width={490}
          height={490}
          alt="Image"
        />
      </button>
      <section className="PostCard--info-container">
        <div
          className={`PostCard--icons-container ${postLiked ? 'liked' : ''}`}
        >
          <button
            className="PostCard--icon-button"
            type="button"
            onClick={handleLike}
          >
            {postLiked ? (
              <Icon name={ICONS.HEART_FILLED} />
            ) : (
              <Icon name={ICONS.HEART} />
            )}
          </button>
          <button
            className="PostCard--icon-button"
            type="button"
            onClick={handleFocusInput}
          >
            <Icon name={ICONS.BUBBLE_CHAT} />
          </button>
          <button
            className="PostCard--icon-button"
            type="button"
          >
            <Icon name={ICONS.SEND} />
          </button>
        </div>
        <div className="PostCard--likes-container">
          {formatLikes(likes + (postLiked ? 1 : 0))} Likes
        </div>
        <div className="PostCard--description-container">
          <span className="PostCard--username">{author.username}</span>
          {author.verified ? <Icon name={ICONS.VERIFICATION} /> : null}
          <p className="PostCard--description">{description}</p>
        </div>
        <div className="PostCard--comments-container">
          {postComments.map(({ id, author, message }) => (
            <div
              key={id}
              className="PostCard--comment"
            >
              <span className="PostCard--username">{author.username}</span>
              {author.verified ? <Icon name={ICONS.VERIFICATION} /> : null}
              <p className="PostCard--comment-message">{message}</p>
            </div>
          ))}
        </div>
        <form
          className="PostCard--form"
          onSubmit={handleNewComment}
        >
          <textarea
            autoComplete="off"
            autoCorrect="off"
            className="PostCard--input"
            placeholder="Add a comment..."
            ref={commentInput}
            type="text"
            value={commentValue}
            onChange={handleCommentValue}
          ></textarea>
          <button
            className={`PostCard--post-button ${
              commentValue ? '' : 'invisible'
            }`}
            type="submit"
          >
            Post
          </button>
        </form>
      </section>
    </article>
  );
}
