import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import {rhythm} from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Myeonghwan Cho`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{maxWidth: 310}}>
          Personal blog by{' '}
          <a href='https://github.com/hellomh'>Myeonghwan Cho</a>. Engineer
          👨‍💻&nbsp;&nbsp;currently in Japan 🇯🇵
        </p>
      </div>
    );
  }
}

export default Bio;
