import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedItem from '../components/features/feed/FeedItem';
import styled from 'styled-components';
import { getDajimFeed } from '../app/module/dajimSlice';
import Loading from '../utils/Loading';
import Button from '../components/common/Button';
import { RowWrapper } from '../components/common/Wrapper';

const Feed = () => {
  const dispatch = useDispatch();
  const { loading, feed } = useSelector((state) => state.dajim);

  const pageNumber = 0;

  useEffect(() => {
    dispatch(getDajimFeed(pageNumber));
  }, [dispatch]);

  const feedItems = feed && feed.content;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h2>오늘의 다짐</h2>
      {feedItems &&
        feedItems.map((dj) => {
          return (
            <FeedItem
              key={dj.dajimNumber}
              dajimNumber={dj.dajimNumber}
              user={dj.nickname}
              pic={dj.image}
              dajimContent={dj.content}
              allStickers={dj.allStickers}
              loginSticker={dj.loginSticker}
              updateDate={dj.updateDate}
            />
          );
        })}
      <ButtonWrapper>
        <Button skeleton>+ 더 보기</Button>
      </ButtonWrapper>
    </>
  );
};

export default Feed;

const Pagination = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonWrapper = styled(RowWrapper)`
  justify-content: center;
  align-items: center;
`;
