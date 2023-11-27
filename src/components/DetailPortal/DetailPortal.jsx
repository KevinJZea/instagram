import { useEffect } from 'react';
import { Icon } from '../Icon';
import { ICONS } from '../../utils/constants';
import { formatDate, formatLikes } from '../../utils/helpers';
import './DetailPortal.css';

export function DetailPortal({ postData, deselectPost, setPostLiked }) {
  const handleClickOnPortal = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const validateKey = (event) => {
      if (event.key === 'Escape') deselectPost();
    };

    window.addEventListener('keyup', validateKey);

    return () => {
      window.removeEventListener('keyup', validateKey);
    };
  }, [deselectPost]);

  return (
    <>
      <div
        className="DetailPortal--background"
        onClick={deselectPost}
      >
        <button
          className="DetailPortal--close-button"
          type="button"
          onClick={deselectPost}
        >
          <Icon name={ICONS.CLOSE} />
        </button>

        <div
          className="DetailPortal--container"
          onClick={handleClickOnPortal}
        >
          <article
            className="DetailPortal"
            role="dialog"
          >
            <header className="DetailPortal--header">
              <img
                className="DetailPortal--profile-pic"
                src={postData.author.profilePic}
                width={32}
                height={32}
                alt={postData.author.username}
              />
              <div className="DetailPortal--header-info-container">
                <div className="DetailPortal--header-user-info-container">
                  <span className="DetailPortal--username">
                    {postData.author.username}
                  </span>
                  {postData.author.verified ? (
                    <Icon name={ICONS.VERIFICATION} />
                  ) : null}
                </div>
              </div>
            </header>
            <picture className="DetailPortal--image-container">
              <img
                alt="Image"
                className="DetailPortal--main-image"
                src={postData.imageUrl[0]}
              />
            </picture>
            <section className="DetailPortal--info-container">
              <div
                className={`PostCard--icons-container ${
                  postData.postLiked ? 'liked' : ''
                }`}
              >
                <button
                  className="PostCard--icon-button"
                  type="button"
                  onClick={setPostLiked}
                >
                  {postData.postLiked ? (
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
              <div className="DetailPortal--likes-container">
                <span className="DetailPortal--likes">
                  {formatLikes(postData.likes + (postData.postLiked ? 1 : 0))}{' '}
                  likes
                </span>
              </div>
              <div className="DetailPortal--timestamp-container">
                <span className="DetailPortal--timestamp">
                  {formatDate(postData.createdAt)}
                </span>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
