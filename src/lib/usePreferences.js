import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const preferenceState = atom({
    key: 'preferences',
    default: {
      theme: "light",
      privateMode: false,
      currency: "$",
    },
  effects_UNSTABLE: [persistAtom],
});

function usePreferences() {
  const [preferences, setPreferences] = useRecoilState(preferenceState);

  const toggleThemeMode = () => {
    const mode = preferences.theme === "dark" ? "light" : "dark";
    setPreferences({
      ...preferences,
      theme: mode
    });
  };

  const togglePrivateMode = () => {
    setPreferences({
      ...preferences,
      privateMode: !preferences.privateMode
    });
  };

  return {
    togglePrivateMode,
    toggleThemeMode,
    preferences
  };
}

export default usePreferences;
