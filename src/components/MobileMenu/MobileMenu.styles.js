import styled from 'styled-components'

export const MobileMenu = styled.div`

@media (min-width: 48em) {
  display: none;
}

.menu-icon {
  width: 60px;
  height: 45px;
  position: absolute;
  transform: rotate(0deg) scale(0.5);
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 2;
  top: 1em;
  right: 1em;
}

.menu-icon span {
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #000;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.menu-icon.open span {
  background: #eee;
}

.menu-icon span:nth-child(1) {
  top: 0px;
}

.menu-icon span:nth-child(2),.menu-icon span:nth-child(3) {
  top: 18px;
}

.menu-icon span:nth-child(4) {
  top: 36px;
}

.menu-icon.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.menu-icon.open span:nth-child(2) {
  transform: rotate(45deg);
}

.menu-icon.open span:nth-child(3) {
  transform: rotate(-45deg);
}

.menu-icon.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.menu { 
  opacity: 0;
  transition: .25s ease-in-out;
  background: #000;
  color: #fff;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.menu.open {
  opacity: 0.9;
}

.menu ul {
  list-style: none;
}

.menu li  { 
  text-align: center;
  font-size: 2em;
}

.menu li + li { 
  padding-top: 1em;
}
  
`