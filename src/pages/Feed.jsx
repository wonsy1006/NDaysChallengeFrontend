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
  const { loading } = useSelector((state) => state.dajim);

  useEffect(() => {
    dispatch(getDajimFeed());
  }, [dispatch]);

  const { feed } = useSelector((state) => state.dajim);
  const nickname = useSelector((state) => state.user.nickname);

  return (
    <>
      <h2>오늘의 다짐</h2>
      {loading && <Loading />}
      {dajim.map((dj) => {
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
