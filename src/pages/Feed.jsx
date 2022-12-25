import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedItem from '../components/features/feed/FeedItem';
import { getDajimFeed } from '../app/module/dajimSlice';

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDajimFeed());
  }, [dispatch]);

  const { dajim } = useSelector((state) => state.dajim);

  return (
    <>
      <h2>오늘의 다짐</h2>
      {dajim.map((dj) => {
        return (
          <FeedItem key={dj.id} user="user1" dajimContent={dj.dajimContent} />
        );
      })}
      {/* <FeedItem user="user1" dajimContent="깃허브 커밋하기" />
      <FeedItem user="user2" dajimContent="퇴근하면 바로 운동 가기" />
      <FeedItem user="user3" dajimContent="요미 산책시키기" /> */}
    </>
  );
};

export default Feed;
