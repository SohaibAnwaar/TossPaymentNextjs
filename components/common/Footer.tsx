import styled from "styled-components";
import {
  FooterSection,
  FooterBody,
  AboutUsSection,
  Section,
  CopyrightSection,
  TermAndConditionSection,
  SocialMediaSection,
} from "styled/FooterStyle";
const Footer = () => {
  return (
    <FooterSection>
      <FooterBody>
        <AboutUsSection>
          <Section>
            <span>guide</span>
            <a href="#">announcement</a>
            <a href="#">Frequently Asked Questions</a>
          </Section>
          <Section>
            <span>team</span>
            <a href="#">About Us</a>
            <a href="#">blog</a>
            <a href="#">employment</a>
          </Section>
          <Section>
            <span>customer service center</span>
            <a href="#">Phone: 1544-7772</a>
            <a href="#">Email: support@tosspayments.com</a>
            <a href="#">Go to payment error support</a>
            <a href="#">1:1 chat consultation</a>
          </Section>
        </AboutUsSection>
        <CopyrightSection>
          <span>Copyright ⓒ Toss Payments. All Rights Reserved</span>
          <p>
            Business registration number: 411-86-01799 | Representative: Kim
            Min-
            <br />
            Pyo Hosting Service: TosPayments Co., Ltd. | Mail-order business
            report number: 2020-Seoul Gangnam-01164 Check business information
            <br />
            15th floor, 131 Teheran-ro, Gangnam-gu, Seoul (Yeoksam-dong, Korea
            Intellectual Property Center)
          </p>
        </CopyrightSection>
        <TermAndConditionSection>
          <span>TosPayments Basic Terms and Conditions</span>
          <div>
            <a href="#"> Terms of Service</a>
            <a href="#">privacy policy</a>
            <a href="#">
              Electronic Financial Transaction Basic Terms and Conditions
            </a>
            <a href="#">User notice</a>
          </div>
          <div>
            <a href="#">Telecom billing terms and conditions</a>
          </div>
        </TermAndConditionSection>
        <SocialMediaSection>
          <ul>
            <li>
              <a
                aria-label="TossPayments KakaoTalk"
                target="_blank"
                href="http://pf.kakao.com/_jtceK?utm_source=kakaochannel&amp;utm_medium=link&amp;utm_campaign=homepage">
                <img
                  src="https://static.toss.im/assets/homepage/safety/icn-kakao.svg"
                  alt="TossPayments KakaoTalk"
                />
              </a>
            </li>
            <li>
              <a
                aria-label="TossPayments Naver Post"
                target="_blank"
                href="https://post.naver.com/toss_business?utm_source=naverpost&amp;utm_medium=link&amp;utm_campaign=homepage">
                <img
                  src="https://static.toss.im/assets/homepage/safety/icn-naver.svg"
                  alt="TossPayments Naver Post"
                />
              </a>
            </li>
            <li>
              <a
                aria-label="TossPayments Instagram"
                target="_blank"
                href="https://www.instagram.com/toss.business/?utm_source=instagram&amp;utm_medium=link&amp;utm_campaign=hompage">
                <img
                  src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg"
                  alt="TossPayments Instagram"
                />
              </a>
            </li>
          </ul>
        </SocialMediaSection>
      </FooterBody>
    </FooterSection>
  );
};

export default Footer;
