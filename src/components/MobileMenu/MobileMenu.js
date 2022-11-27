/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay as={Overlay} isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContent as={Content}>
        <CloseAction>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={2}/>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </UnstyledButton>
        </CloseAction>
        <Menu>
          <MenuLink style={{'--color': COLORS.secondary }} href="/sale">Sale</MenuLink>
          <MenuLink href="/new">New&nbsp;Releases</MenuLink>
          <MenuLink href="/men">Men</MenuLink>
          <MenuLink href="/women">Women</MenuLink>
          <MenuLink href="/kids">Kids</MenuLink>
          <MenuLink href="/collections">Collections</MenuLink>
        </Menu>
        <Footer>
          <FooterLinks href="/terms">Terms and Conditions</FooterLinks>
          <FooterLinks href="/privacy">Privacy Policy</FooterLinks>
          <FooterLinks href="/contact">Contact Us</FooterLinks>
        </Footer>
      </DialogContent>
    </DialogOverlay>
  );
};

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  left: 0;
  top: 0;

  background: rgba(96, 100, 108, 0.8);
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: calc(300/16 * 1rem);
  min-height: 100vh;
  top: 0;
  right: 0;
  background: ${COLORS.white};
  padding: 32px;
  padding-right: 22px;
`

const CloseAction = styled.div`
  align-self: flex-end;
`

const Menu = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
`

const MenuLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: calc(18 / 16 * 1rem);
  text-transform: uppercase;
  color: var(--color, ${COLORS.gray['900']});
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const FooterLinks = styled.a`
  color: ${COLORS.gray['700']};
  text-decoration: none;
  font-size: calc(14 / 16 * 1rem);
  font-weight: 500;
`

export default MobileMenu;
