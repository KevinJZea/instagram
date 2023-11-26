import { Icon } from '../Icon';
import { ICONS } from '../../utils/constants';
import { formatDate, formatLikes } from '../../utils/helpers';
import './DetailPortal.css';

export function DetailPortal({ postData, closePortal }) {
  return (
    <>
      <div
        className="DetailPortal--background"
        onClick={closePortal}
      ></div>
      <div className="DetailPortal--container">
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
            <div className="DetailPortal--icons-container">
              <button
                className="PostCard--icon-button"
                type="button"
                /* onClick={handleLike} */
              >
                {
                  /* postLiked ? (
              <Icon name={ICONS.HEART_FILLED} />
            ) : */ <Icon name={ICONS.HEART} />
                }
              </button>
              <button
                className="PostCard--icon-button"
                type="button"
                /* onClick={handleFocusInput} */
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
                {formatLikes(postData.likes)} likes
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
    </>
  );
}
