import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';
import { useRouter } from 'next/router';
// import AccessToken from '@services/AccessToken';
// import profileState from '../atom/profile';

const authRoute = ['/app', '/app/[[...section]]'];

function ProfileStore() {
  // const accessToken = AccessToken.get();
  // const router = useRouter();
  // const [state, setState] = useRecoilState(profileState);

  // const { data, error, mutate } = useSWR(accessToken ? '/profile' : null, {
    // onError: () => router.push('/login'),
    // revalidateOnfocus: false
  // });

  // const setProfile = (profile) => {
  //   setState({
  //     ...state,
  //     profile,
  //   });
  // };

  // const logged = async (back = false) => {
  //   if (back) await router.back();
  //   else await router.push('/app/my-profile');
  // };

  // const logout = async () => {
  //   // AccessToken.remove();
  //   setProfile(null);
  //   await mutate();
  // };

  // useEffect(() => {
  //   if (!accessToken && authRoute.includes(router.route)) {
  //     // router.push('/login');
  //   }
  // }, [accessToken]);

  // useEffect(() => {
  //   if (data?.status === 200) {
  //     setProfile(data.data.profile);
  //   } else {
  //     setProfile(null);
  //   }
  // }, [data, router]);

  // const isLoading = !data || !state.profile;

  // return {
  //   isLoading,
  //   state,
  //   mutate,
  //   setProfile,
  //   logged,
  //   logout
  // };
}

export default ProfileStore;
