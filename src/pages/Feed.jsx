import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedItem from '../components/features/feed/FeedItem';
import { getDajimFeed } from '../app/module/dajimSlice';
import Loading from '../utils/Loading';

const Feed = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.dajim);

  useEffect(() => {
    dispatch(getDajimFeed());
  }, [dispatch]);

  const { feed } = useSelector((state) => state.dajim);

  return (
    <>
      {loading && <Loading />}
      <h2>오늘의 다짐</h2>
      {feed.map((dj) => {
        return (
          <FeedItem
            key={dj.dajimNumber}
            user={dj.nickname}
            pic={dj.image}
            dajimContent={dj.content}
          />
        );
      })}
    </>
  );
};

export default Feed;
