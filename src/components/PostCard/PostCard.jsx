import { useState } from 'react';
import { Icon } from '../Icon';
import { ICONS } from '../../utils/constants';
import { formatLikes, timeAgo } from '../../utils/helpers';
import './PostCard.css';

export function PostCard({
  author,
  createdAt = new Date(),
  description,
  imageUrl,
  likes,
  location,
}) {
  const [commentValue, setCommentValue] = useState('');
  const [postLiked, setPostLiked] = useState(false);

  const handleCommentValue = (event) => setCommentValue(event.target.value);
  const handleLike = () => setPostLiked((previousValue) => !previousValue);

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

      <picture className="PostCard--image-container">
        <img
          className="PostCard--main-image"
          src={imageUrl}
          width={490}
          height={490}
          alt="Image"
        />
      </picture>
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
        <form className="PostCard--form">
          <textarea
            autoComplete="off"
            autoCorrect="off"
            className="PostCard--input"
            placeholder="Add a comment..."
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
