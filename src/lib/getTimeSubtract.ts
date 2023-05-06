export const getTimeSubtract = (isoString: string) => {
  const now = new Date();
  const then = new Date(isoString);
  const diffMilliseconds = now.getTime() - then.getTime();

  if (diffMilliseconds < 60000) {
    return 'たった今';
  }

  const diffMinutes = Math.ceil(diffMilliseconds / 60000);

  if (diffMinutes < 60) {
    return `${diffMinutes}分前`;
  }

  const diffHours = Math.ceil(diffMinutes / 60);

  if (diffHours < 24) {
    return `${diffHours}時間前`;
  }

  const diffDays = Math.ceil(diffHours / 24);

  return `${diffDays}日前`;
};
