export const createGuestNickname = () => {
  const randomNumber = (Math.random() * 100000).toFixed();
  const nickname = `guest-${randomNumber}`;
  return nickname;
};
