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
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return `${years} y`;
  if (months > 0) return `${months} mo`;
  if (days > 0) return `${days} d`;
  if (hours > 0) return `${hours} h`;
  if (minutes > 0) return `${minutes} m`;
  return `${seconds} s`;
}

export function formatDate(date) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options).toUpperCase();
}
