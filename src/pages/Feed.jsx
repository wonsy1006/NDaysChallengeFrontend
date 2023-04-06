import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedItem from '../components/features/feed/FeedItem';
import styled from 'styled-components';
import { getDajimFeed } from '../app/module/dajimSlice';
import Loading from '../utils/Loading';

const Feed = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.dajim);

  useEffect(() => {
    dispatch(getDajimFeed());
  }, [dispatch]);

  const { feed } = useSelector((state) => state.dajim);
  const nickname = useSelector((state) => state.user.nickname);

  const pagination = ({ feed }) => {};

  return (
    <>
      <h2>오늘의 다짐</h2>
      {loading && <Loading />}
      {feed.map((dj) => {
        return (
          <FeedItem
            key={dj.dajimNumber}
            dajimNumber={dj.dajimNumber}
            user={dj.nickname}
            pic={dj.image}
            dajimContent={dj.content}
          />
        );
      })}
      <Pagination />
    </>
  );
};

export default Feed;

const Pagination = styled.div`
  display: flex;
  width: 100%;
`;
