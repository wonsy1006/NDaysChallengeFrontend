import React, { useEffect } from 'react';

useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
  script.async = true;
  document.body.appendChild(script);
  return () => document.body.removeChild(script);
});

export const shareKakaotalk = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
  }

  if (!kakao.isInitialized()) {
    kakao.init('da5e9fcbc7b8f0f142d2ce9ef56bdde5');
  }

  kakao.link.sendDefault({
    objectType: 'feed',
    content: {
      title: '...',
      description: '...',
      imageUrl: '이미지 주소',
      link: {
        mobileWebUrl: 'http://ndayschallenge.com',
        webUrl: 'http://ndayschallenge.com',
      },
    },
  });
};
