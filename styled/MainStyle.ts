import styled from "styled-components";

export const MainSection = styled.div`
  width: 100%;
  margin-left: 3%;
  margin-top: 3%;
  margin-bottom: 1rem;
  position: relative;
  border-radius: 0;
  h2 {
    color: rgb(51, 51, 51);
    font-weight: 500;
  }
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: medium;
    font-weight: 100;
  }
`;
export const Link = styled.a`
  color: #0f85fb;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: medium;
  font-weight: 100;
  text-decoration: none;
`;
export const NavSection = styled.section`
  @media (max-width: 768px) {
    display: none;
  }
  a {
    text-decoration: none;
    background-color: transparent;
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border-bottom: 1px solid #dae1e7;
  margin-bottom: 1rem;
  position: relative;
  border-radius: 0;
`;
export const NavLink = styled.li`
  display: block;
  padding: 0.357rem 0.5rem;
  margin-bottom: -1px;
  a {
    color: rgba(0, 0, 0, 0.5);
    border: none;
    min-width: auto;
    margin: 1px 10px;
    font-size: medium;
    font-weight: 300;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.04);
    }
    &:focus {
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.04);
    }
    &.active {
      border: none;
      position: relative;
      color: #050505;
      transition: all 0.2s ease;
      background-color: transparent;
    }
    &.active::after {
      content: attr(data-before);
      height: 2px;
      width: 100%;
      left: 0;
      position: absolute;
      bottom: 0;
      top: 85%;
      background: black !important;
      box-shadow: 0 0 8px 0 rgba(115, 103, 240, 0.5) !important;
      transform: translateY(0px);
      transition: all 0.2s ease;
    }
  }
`;

export const TabPane = styled.div``;

export const TabContent = styled.div`
  > .tab-pane {
    display: none;
  }

  > .active {
    display: block;
  }
`;
export const Table = styled.table`
  border-collapse: collapse;
  color: rgba(0, 0, 0, 0.5);
  font-size: medium;
  font-weight: 100;
  margin-top: 2%;
  margin-right: 2%;
  width: 100%;

  tr th {
    width: 22%;
    text-align: start;
    padding-left: 20px;
    height: auto;
    background-color: rgba(0, 0, 0, 0.04);
    font-weight: 400;
  }
`;
export const Radio = styled.td`
  width: 33%;
  height: auto;
  text-align: start;
  padding-left: 20px;
  height: 80px;
`;
export const RadioText = styled.span`
  width: 120px;
  height: 60px;
  display: inline-block;
  line-height: 25px;
  margin-top: 10px;
`;
export const RadioSelector = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: -40px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 25px;
  width: 25px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  z-index: 1000;
  display: inline-block;
  border-radius: 50%;
  &:hover {
    background: #d4d5d8;
    border: 2px solid #0f85fb;
  }
  &:checked {
    background: #0f85fb;
    border: 2px solid #0f85fb;
  }
`;
export const CardNumber = styled.input`
  width: 90%;
  height: 100%;
  border-radius: 5px;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  border: none;
`;
export const DatePicker = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  margin-top: 20px;
`;

export const Account = styled.td`
  width: auto%;
  height: auto;
  text-align: start;
  padding-left: 20px;
  height: 80px;
`;

export const AccountToggle = styled.a`
  display: inline-block;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  text-align: left;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 0 solid transparent;
  padding: 0.9rem;
  font-size: 1rem;
  line-height: 1;
  border-radius: 0.4285rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-left: -20px;
`;
export const AccountDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.5rem 0 0;
  font-size: 0.9375rem;
  color: #626262;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(34, 41, 47, 0.15);
  border-radius: 5px;
  width: 26%;
  height: 290px;
  overflow: scroll;
`;
