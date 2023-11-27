const characters = '0123456789abcdefhijklmnopqrstuvwxyz';
export function createRandomID(length = 5) {
  let uuid = '';

  for (let i = 0; i < length; i++) {
    if (i > 0 && i % 8 === 0) uuid += '-';
    uuid += characters[Math.floor(Math.random() * characters.length)];
  }

  return uuid;
}

export function formatLikes(likes = 0) {
  const likesString = String(likes);
  const [integerPart] = likesString.split('.');
  const formattedNumber = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedNumber;
}

export function timeAgo(date) {
  const now = new Date();
  const timeDifference = now - date;

  const seconds = Math.floor(timeDifference / 1000);
  if (seconds < 60) return `${seconds}s`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d`;

  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks}w`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo`;

  const years = Math.floor(months / 12);
  return `${years}y`;
}

export function formatDate(date) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options).toUpperCase();
}
