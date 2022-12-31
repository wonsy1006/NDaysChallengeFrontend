import React from 'react';
import { ReactComponent as Pic1 } from '../../assets/images/profile_pics/pic1.svg';
import { ReactComponent as Pic2 } from '../../assets/images/profile_pics/pic2.svg';
import { ReactComponent as Pic3 } from '../../assets/images/profile_pics/pic3.svg';
import { ReactComponent as Pic4 } from '../../assets/images/profile_pics/pic4.svg';
import { ReactComponent as Pic5 } from '../../assets/images/profile_pics/pic5.svg';
import { ReactComponent as Pic6 } from '../../assets/images/profile_pics/pic6.svg';

const ProfilePic = props => {
  const picType = props.picType;
  switch (picType) {
    case 'pic1':
      return <img src={Pic1} />;
    case 'pic2':
      return <img src={Pic2} />;
    case 'pic3':
      return <img src={Pic3} />;
    case 'pic4':
      return <img src={Pic4} />;
    case 'pic5':
      return <img src={Pic5} />;
    case 'pic6':
      return <img src={Pic6} />;
    default:
      return null;
  }
};

export default ProfilePic;
