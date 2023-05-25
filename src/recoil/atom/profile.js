import { atom } from 'recoil';

const profileState = atom({
  key: 'profileState',
  default: {
    profile: null
  }
});

export default profileState;
