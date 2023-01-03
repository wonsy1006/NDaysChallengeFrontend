import React from 'react';
import {
  // BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import ChallengeDetail from '../pages/ChallengeDetail';
import ChallengeList from '../pages/ChallengeList';
import ChallengeResult from '../pages/ChallengeResult';
import CreateChallenge from '../pages/CreateChallenge';
import EditProfile from '../pages/EditProfile';
import ErrorPage from '../pages/ErrorPage';
import Feed from '../pages/Feed';
import FriendsList from '../pages/FriendsList';
import Login from '../pages/Login';
import Main from '../pages/Main';
import MyPage from '../pages/MyPage';
import OnBoarding1 from '../pages/OnBoarding1';
import OnBoarding2 from '../pages/OnBoarding2';
import OnBoarding3 from '../pages/OnBoarding3';
import SignUp from '../pages/SignUp';
import Welcome from '../pages/Welcome';
import Withdraw from '../pages/Withdraw';
import Report from '../pages/Report';
import GroupChallenge from '../pages/GroupChallenge';
import { useSelector } from 'react-redux';

// 최초 방문 유저 판별
const FirstPage = ({ children }) => {
  if (
    window.localStorage.getItem('firstAccess') === null &&
    window.localStorage.getItem('accessToken') === null
  ) {
    return <Navigate to="/welcome" />;
  }
  return children;
};

const Router = () => {
  const { challenges } = useSelector((state) => state.challenge);

  return (
    // <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <FirstPage>
            <ChallengeList />
          </FirstPage>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/onboarding1" element={<OnBoarding1 />} />
      <Route path="/onboarding2" element={<OnBoarding2 />} />
      <Route path="/onboarding3" element={<OnBoarding3 />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/challenge-list" element={<ChallengeList />} />
        <Route
          path="/challenge-detail/:roomNumber"
          element={<ChallengeDetail />}
        />
        <Route path="/challenge-result" element={<ChallengeResult />} />
        <Route path="/create-challenge" element={<CreateChallenge />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/friends-list" element={<FriendsList />} />
        <Route path="/group-challenge" element={<GroupChallenge />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/report" element={<Report />} />
      </Route>
    </Routes>
    // </BrowserRouter>
  );
};

export default Router;
