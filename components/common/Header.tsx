import styled from "styled-components";
import {
  Container,
  Nav,
  Logo,
  NavbarWrapper,
  Link,
  DropdownMenu,
  DropDownWrapper,
  DropdownLink,
  NavbarCollapse,
  HorizontalLine,
  DropdownItemSub,
  Login,
} from "styled/HeaderStyle";
import { Toggler } from "styled/TogglerStyle";
import { Button } from "styled/ButtonStyle";
const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Nav>
          <Logo href="#">
            <i />
            <span>payments</span>
          </Logo>
          <Toggler
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse">
            <span />
          </Toggler>
          <NavbarCollapse id="navbarCollapse">
            <NavbarWrapper>
              <DropDownWrapper>
                <Link href="#">business start</Link>
                <DropdownMenu>
                  <DropdownLink href="#">
                    Application for business registration
                  </DropdownLink>
                  <DropdownLink href="#">
                    Direct application for mail-order business
                  </DropdownLink>
                  <DropdownLink href="#">sales ledger</DropdownLink>
                  <DropdownLink href="#">
                    Safety number for business
                  </DropdownLink>
                </DropdownMenu>
              </DropDownWrapper>
              <DropDownWrapper>
                <Link href="#">payment service</Link>
                <DropdownMenu>
                  <DropdownLink href="#">basic payment service</DropdownLink>
                  <HorizontalLine></HorizontalLine>
                  <DropdownLink href="#">
                    <span>Brand Pay</span>
                    <DropdownItemSub>
                      <br />
                      Self-simple payment that easily interlocks
                    </DropdownItemSub>
                  </DropdownLink>
                  <DropdownLink href="#">
                    <span>Issuance of free cash receipts</span>
                    <DropdownItemSub>
                      <br />
                      IRS issuance agency service
                    </DropdownItemSub>
                  </DropdownLink>
                </DropdownMenu>
              </DropDownWrapper>
              <Link href="usage_fee.html">usage fee</Link>
              <DropDownWrapper>
                <Link href="#" data-toggle="dropdown">
                  customer service center
                </Link>
                <DropdownMenu>
                  <DropdownLink href="#">Use inquiry</DropdownLink>
                  <DropdownLink href="#">announcement</DropdownLink>
                </DropdownMenu>
              </DropDownWrapper>
              <Link href="#">Developer Center</Link>
              <Link href="#">Check payment details</Link>
              <Login href="">log in</Login>
              <Button href="contact.html">Apply for electronic payment</Button>
            </NavbarWrapper>
          </NavbarCollapse>
        </Nav>
      </Container>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.header`
  text-align: center;

  nav {
    a {
      text-decoration: none;
      display: inline-block;
    }
  }
`;
