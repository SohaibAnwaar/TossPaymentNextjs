import styled from "styled-components";

export const FooterSection = styled.footer`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.04);
`;
export const FooterBody = styled.div`
  margin-left: 15%;
  margin-right: 15%;
`;
export const AboutUsSection = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;
export const Section = styled.div`
  height: auto;
  width: 20%;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-top: 05%;
  @media (max-width: 768px) {
    width: auto;
  }
  span {
    font-size: 15px;
    font-weight: 100;
    color: rgb(0, 0, 0);
    font-weight: 500;
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
    line-height: 25px;
    &:hover {
      color: #0f85fb;
      text-decoration: underline;
    }
  }
`;
export const CopyrightSection = styled.div`
  text-align: left;
  margin-top: 05%;
  span {
    font-size: 15px;
    font-weight: 100;
    color: rgb(0, 0, 0);
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    line-height: 20px;
  }
`;

export const TermAndConditionSection = styled.div`
  text-align: left;
  margin-top: 05%;
  span {
    font-size: 15px;
    font-weight: 100;
    color: rgb(0, 0, 0);
    font-weight: 500;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    flex-direction: row;
    height: auto;
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.5);
      font-size: 15px;
      margin: 20px 50px 0px 0px;
      width: auto;
      height: auto;
      &:hover {
        color: #0f85fb;
        text-decoration: underline;
      }
    }
  }
`;
export const SocialMediaSection = styled.div`
  margin-top: 01%;
  display: flex;
  flex-direction: row;
  text-align: left;
  ul {
    display: flex;
    flex-direction: row;
    margin-left: -40px;
    text-align: left;
    width: 100%;
    margin-bottom: 10%;
  }
  li {
    width: 37px;
    height: 37px;
    list-style: none;
    margin-left: 5px;
    text-align: left;
  }
`;
