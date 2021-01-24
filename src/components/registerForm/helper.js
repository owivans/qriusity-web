import { CONNECTIONS } from '../../config';

const { AVATAR_API } = CONNECTIONS;

const generateAvatar = () => {
  return `${AVATAR_API}/${Math.random()}.svg`;
};

export default generateAvatar;
