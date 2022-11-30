//OAuth.js
const REST_API_KEY = '';
const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

//Login.js
import { KAKAO_AUTH_URL } from '../../~~';
<Button href={KAKAO_AUTH_URL}>카카오로 로그인하기</Button>;
