const users = [
  {
    email: 'grogu50@test.com',
    password: '123456',
    nickname: '그로구',
    profilePic: 'pic1',
  },
  {
    email: 'DinDjarin@test.com',
    password: 'asdfwe',
    nickname: '딘자린',
    profilePic: 'pic2',
  },
  {
    email: 'LSkywalker@test.com',
    password: 'wejkwe',
    nickname: '뤀스카이워커',
    profilePic: 'pic3',
  },
];

export const signIn = ({ email, password }) => {
  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (user === undefined) throw new Error();
  return user;
};
