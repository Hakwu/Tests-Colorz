import React from 'react';
import useSWR from 'swr';
// import Backend from "@services/Backend";

function useProfile() {
  return null;
  // const {mutate, data} = useSWR('/profile', Backend.fetcher);

  // console.log(data);
  // return {
  //   mutate: mutate,
  //   loading: !data?.status,
  //   profile: data?.profile || null
  // };
}

export default useProfile;
