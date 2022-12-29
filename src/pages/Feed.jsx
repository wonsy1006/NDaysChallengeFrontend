import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedItem from '../components/features/feed/FeedItem';
import { getDajimFeed } from '../app/module/dajimSlice';

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDajimFeed());
  }, [dispatch]);

  const { feed } = useSelector((state) => state.dajim);
  console.log(feed);

  return (
    <>
      <h2>오늘의 다짐</h2>
      {/* {feed.map((dj) => {
        return (
          <FeedItem key={dj.id} user="user1" dajimContent={dj.dajimContent} />
        );
      })} */}
    </>
  );
};

export default Feed;
