import React from 'react';
import Icon from '../assets/live-chat.png';
import styled from "styled-components";

function Brand() {
  return (
    <BrandStyle>
      <img src={Icon} alt="Live Chat Icon" />
      <div>
        <span>Live</span>
        <span>Chat</span>
      </div>
    </BrandStyle>
  );
}

export default Brand;

const BrandStyle = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 20px;
    margin-right: 10px;
  }

  div {
    font-size: 1.2rem; /* Adjust the font size as needed */
    font-weight: bold;
  }

  span {
    padding: 0 5px; /* Add some spacing between "Live" and "Chat" */
  }
`;


