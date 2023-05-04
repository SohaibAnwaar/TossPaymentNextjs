import Image from "next/image";
import styled from "styled-components";
interface Props {
  message: string;
}

function Greeting({ message }: Props) {
  return (
    <GreetingSection>
      <div className="main-section">
        <div className="main-section-heading">
          <h2>Check payment details</h2>
          <span className="paragram">
            TosPayments is a company that only supports payment services. To
            cancel your payment, please contact the store where you purchased
            the product directly.<br></br>You can check the store contact
            information on the receipt after checking the payment details.
          </span>
          <a href="#" className="history-link">
            What if there is a 'TosPayments' payment history that I don't know
            about?
          </a>
          <div className="table-manu">
            <ul>
              <li>
                <a href="">credit / check card</a>
              </li>
              <li>
                <a href="">account transfer</a>
              </li>
              <li>
                <a href="">Virtual Account</a>
              </li>
              <li>
                <a href="">cell phone</a>
              </li>
              <li>
                <a href="">gift card</a>
              </li>
            </ul>
            <div className="horizontal-line-table"></div>
          </div>

          <table className="transaction-table" suppressHydrationWarning>
            <tbody>
              <tr>
                <th>Inquiry method</th>
                <td className="radio-button-filed">
                  <label>
                    <input
                      type="radio"
                      className="option-input radio"
                      name="example"
                      checked
                    />
                    <span>
                      Search by card number
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      className="option-input radio"
                      name="example"
                    />
                    <span>Inquiry by approval number</span>
                  </label>
                </td>
                <th>card number</th>
                <td>
                  <input
                    type="number"
                    id="card_num"
                    name="card_num"
                    placeholder="Enter only number without -"
                    className="card-number-input"
                  />
                </td>
              </tr>
              <tr>
                <th> ss Amount of payment</th>
                <td>
                  <input
                    type="number"
                    id="card_num"
                    name="card_num"
                    placeholder="Enter number only"
                    className="card-number-input"
                  />
                </td>
                <th>payment date</th>
                <td>
                  <input
                    id="date"
                    type="date"
                    required
                    className="datepicker"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="table-footer">
            <span>
              ✱ If you have used a BC card or paid for a vending machine or
              cable TV, please use the approval number.
            </span>
          </div>
          <div className="personal-information-section">
            <span className="personal-Information-data">
              <a href="#" className="history-link">
                <u>Personal Information Collection and Terms of Use</u>
              </a>
              consent is required
            </span>
            <button className="agree-button" type="button">
              View after agreeing
            </button>
          </div>
        </div>
        <div className="result-section">
          <div className="result-section-body">
            <img src="/file.png" className="result-section-image" />
            <h3>There are no search results.</h3>
          </div>
        </div>
      </div>
    </GreetingSection>
  );
}

const GreetingSection = styled.div`
  min-height: 90vh;
  display: flex;
  color: var(--primary-Color);
  font-size: 20px;
  margin: 1% 10%;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const CompanyLogo = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  text-align: center;
`;

export default Greeting;
