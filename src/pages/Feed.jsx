import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedItem from '../components/features/feed/FeedItem';
import styled from 'styled-components';
import { getDajimFeed } from '../app/module/dajimSlice';
import Loading from '../utils/Loading';

const Feed = () => {
  // const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.dajim);

  // useEffect(() => {
  //   dispatch(getDajimFeed());
  // }, [dispatch]);

  // const { feed } = useSelector((state) => state.dajim);
  // const nickname = useSelector((state) => state.user.nickname);

  const feed = [
    {
      dajimNumber: 1,
      nickname: '닉네임1',
      image: 1,
      content: '내용1',
      updatedDate: '2023-01-23',
      sticker: [],
    },
    {
      dajimNumber: 2,
      nickname: '닉네임2',
      image: 2,
      content: '내용2',
      sticker: [],
    },
    {
      dajimNumber: 3,
      nickname: '닉네임3',
      image: 3,
      content: '내용3',
      sticker: [],
    },
    {
      dajimNumber: 4,
      nickname: '닉네임4',
      image: 4,
      content: '내용4',
      sticker: [],
    },
  ];

  const pagination = ({ feed }) => {};

  return (
    <>
      <h2>오늘의 다짐</h2>
      {/* {loading && <Loading />} */}
      {/* {feed.map((dj) => {
        return (
          <FeedItem
            key={dj.dajimNumber}
            dajimNumber={dj.dajimNumber}
            user={dj.nickname}
            pic={dj.image}
            dajimContent={dj.content}
          />
        );
      })} */}
      <Pagination />
    </>
  );
};

export default Feed;

const Pagination = styled.div`
  display: flex;
  width: 100%;
`;
