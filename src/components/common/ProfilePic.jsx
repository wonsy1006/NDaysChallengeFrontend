import React from 'react';
import { ReactComponent as Pic1 } from '../../assets/images/profile_pics/pic1.svg';
import { ReactComponent as Pic2 } from '../../assets/images/profile_pics/pic2.svg';
import { ReactComponent as Pic3 } from '../../assets/images/profile_pics/pic3.svg';
import { ReactComponent as Pic4 } from '../../assets/images/profile_pics/pic4.svg';
import { ReactComponent as Pic5 } from '../../assets/images/profile_pics/pic5.svg';
import { ReactComponent as Pic6 } from '../../assets/images/profile_pics/pic6.svg';

const ProfilePic = props => {
  const picType = props.picType;
  switch (props.picType) {
    case 'pic1':
      return <Pic1 />;
    case 'pic2':
      return <Pic2 />;
    case 'pic3':
      return <Pic3 />;
    case 'pic4':
      return <Pic4 />;
    case 'pic5':
      return <Pic5 />;
    case 'pic6':
      return <Pic6 />;
    default:
      return null;
  }
};

export default ProfilePic;
