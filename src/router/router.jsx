import React from 'react';
import {
  // BrowserRouter,
  Routes,
  Route,
  Navigate,
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
import Onboarding from '../pages/Onboarding';
import SignUp from '../pages/SignUp';
import Welcome from '../pages/Welcome';
import Withdraw from '../pages/Withdraw';
import Report from '../pages/Report';
import GroupChallenge from '../pages/GroupChallenge';

// 최초 방문 유저 판별
const FirstPage = ({ children }) => {
  if (
    window.localStorage.getItem('firstAccess') === null &&
    window.localStorage.getItem('userToken') === null
  ) {
    return <Navigate to="/welcome" />;
  }
  return children;
};

// 챌린지 보유 유저 판별

const Router = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <FirstPage>
            <Main />
          </FirstPage>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route path="/challenge-list" element={<ChallengeList />} />
        <Route path="/challenge-detail" element={<ChallengeDetail />} />
        <Route path="/challenge-result" element={<ChallengeResult />} />
        <Route path="/create-challenge" element={<CreateChallenge />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/friends-list" element={<FriendsList />} />
        <Route path="/group-challenge" element={<GroupChallenge />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/report" element={<Report />} />
      </Route>
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
    // </BrowserRouter>
  );
};

export default Router;
