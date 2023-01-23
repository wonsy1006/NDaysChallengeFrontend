import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedItem from '../components/features/feed/FeedItem';
import { getDajimFeed } from '../app/module/dajimSlice';
import Loading from '../utils/Loading';

const Feed = () => {
  // const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.dajim);

  // useEffect(() => {
  //   dispatch(getDajimFeed());
  // }, [dispatch]);

  // const { feed } = useSelector((state) => state.dajim);

  const feed = [
    {
      dajimNumber: 1,
      nickname: '닉네임1',
      image: 1,
      content: '내용1',
      updatedDate: '2023-01-23',
      stickersList: [],
    },
    { dajimNumber: 2, nickname: '닉네임2', image: 2, content: '내용2' },
    { dajimNumber: 3, nickname: '닉네임3', image: 3, content: '내용3' },
    { dajimNumber: 4, nickname: '닉네임4', image: 4, content: '내용4' },
  ];

  return (
    <>
      <h2>오늘의 다짐</h2>
      {/* {loading && <Loading />} */}
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
    </>
  );
};

export default Feed;
