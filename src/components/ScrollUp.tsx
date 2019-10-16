import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

interface ScrollProps {
    icon: any
    onClick: () => void;
}

class ScrollUp extends React.Component<ScrollProps> {

  scrollToTop = () => {
    scroll.scrollToTop(); 
  };

  render() {
    return(
      <Content>
        <UpLink >
          <StyledIcon icon={faAngleUp} onClick={this.scrollToTop} />        
        </UpLink>
      </Content>
    );
  }

}

export default ScrollUp;

const Content = styled.div`
  position: fixed;
  right: 53px;
  bottom: 33px;
`

const UpLink = styled(props => <Link {...props} />)`
  display: block;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: #EF75BE;
  text-align: center;
  animation: bounce 2s infinite;
  transition: 0.2s ease;
  &:hover {
    background: rgba(239,117,190,0.8);
    transition: 0.2s ease;
  }
`

const StyledIcon = styled(props => <FontAwesomeIcon {...props} />)`
  font-size: 48px;
  color: #FFFFFF;
  margin-top: 8px;
`
