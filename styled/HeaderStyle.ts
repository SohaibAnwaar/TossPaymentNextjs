import styled from "styled-components";

export const Container = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .collapse:not(.show) {
    display: none;
  }

  .collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .collapsing {
      transition: none;
    }
  }

  .navbar-text {
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .navbar-text {
    color: rgba(0, 0, 0, 0.5);
  }

  .navbar-text a {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-text a:hover,
  .navbar-text a:focus {
    color: rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 991.98px) {
    > .container,
    > .container-fluid,
    > .container-sm,
    > .container-md,
    > .container-lg,
    > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 992px) {
    nav {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }

    > .container,
    > .container-fluid,
    > .container-sm,
    > .container-md,
    > .container-lg,
    > .container-xl {
      flex-wrap: nowrap;
    }
  }
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  @media (min-width: 992px) {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
  }
`;
export const NavbarCollapse = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
`;
export const Logo = styled.a`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  font-size: 20px;
  margin-left: 1em;
  line-height: inherit;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.9);

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 70px;
  margin-bottom: 0;
  list-style: none;
  font-size: small;
  width: 100%;
  @media (max-width: 992px) {
    flex-direction: column;
    padding-left: 0px;
  }
`;

export const Link = styled.a`
  padding-right: 0;
  padding-left: 0;
  color: rgba(0, 0, 0, 0.5);
  margin-left: 15px;
  margin-top: 7px;
  padding: 12px;
  border-radius: 8px;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
    background-color: rgba(0, 0, 0, 0.04);
  }
  @media (min-width: 992px) {
    margin-left: 5px;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0.5rem;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #666666;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (min-width: 992px) {
    position: absolute;
  }
`;
export const DropdownLink = styled.a`
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  color: rgba(0, 0, 0, 0.5);
  font-size: small;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover {
    text-decoration: none;
    background-color: #eceef0;
    border-radius: 5px;
  }
`;
export const DropDownWrapper = styled.div`
  position: relative;
  width: auto;

  &:hover ${DropdownMenu} {
    display: block;
  }
`;

export const HorizontalLine = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-top: 1px;
  margin-bottom: 1px;
`;
export const DropdownItemSub = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;
export const Login = styled.a`
  color: #1e90ff;
  margin-left: 8px;
  padding: 12px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 1rem;
  margin-top: 6px;
`;
