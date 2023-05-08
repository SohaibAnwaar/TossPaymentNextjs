import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
      <div className="footer">
        <div className="footer-body">
          <div className="about-us-section">
            <div className="about-us-section-1">
              <span>guide</span>
              <a href="#">announcement</a>
              <a href="#">Frequently Asked Questions</a>
            </div>
            <div className="about-us-section-2">
              <span>team</span>
              <a href="#">About Us</a>
              <a href="#">blog</a>
              <a href="#">employment</a>
            </div>
            <div className="about-us-section-3">
              <span>customer service center</span>
              <a href="#">Phone: 1544-7772</a>
              <a href="#">Email: support@tosspayments.com</a>
              <a href="#">Go to payment error support</a>
              <a href="#">1:1 chat consultation</a>
            </div>
          </div>
          <div className="Copyright-section">
            <span className="Copyright-section-heading">
              Copyright ⓒ Toss Payments. All Rights Reserved
            </span>
            <p className="Copyright-section-body">
              Business registration number: 411-86-01799 | Representative: Kim
              Min-
              <br />
              Pyo Hosting Service: TosPayments Co., Ltd. | Mail-order business
              report number: 2020-Seoul Gangnam-01164 Check business information
              <br />
              15th floor, 131 Teheran-ro, Gangnam-gu, Seoul (Yeoksam-dong, Korea
              Intellectual Property Center)
            </p>
          </div>
          <div className="term-and-condition-section">
            <span className="term-and-condition-section-heading">
              TosPayments Basic Terms and Conditions
            </span>
            <div className="term-and-condition-section-body">
              <a href="#"> Terms of Service</a>
              <a href="#">privacy policy</a>
              <a href="#">
                Electronic Financial Transaction Basic Terms and Conditions
              </a>
              <a href="#">User notice</a>
            </div>
            <div className="term-and-condition-section-body">
              <a href="#">Telecom billing terms and conditions</a>
            </div>
          </div>
          <div className="social-media-section">
            <ul className="p-footer__social-list">
              <li className="p-footer__social-list-item">
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
              <li className="p-footer__social-list-item">
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
              <li className="p-footer__social-list-item">
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
          </div>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  text-align: center;
`;
