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
          <section className="basic-tabs-components">
            <div className="row">
              <div className="col-sm-12">
                <div className="card overflow-hidden">
                  <div className="card-content">
                    <div className="card-body">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#cardcheck"
                            aria-controls="home"
                            role="tab"
                            aria-selected="true">
                            credit / check card
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="profile-tab"
                            data-toggle="tab"
                            href="#account_transfer"
                            aria-controls="account_transfer"
                            role="tab"
                            aria-selected="false">
                            account transfer
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="virtual-account"
                            data-toggle="tab"
                            href="#virtual_account"
                            aria-controls="virtual_account"
                            role="tab"
                            aria-selected="true">
                            Virtual Account
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="about-tab"
                            data-toggle="tab"
                            href="#cell-phone"
                            aria-controls="cell-phone"
                            role="tab"
                            aria-selected="false">
                            cell phone
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="gift_card-tab"
                            data-toggle="tab"
                            href="#gift_card"
                            aria-controls="gift_card"
                            role="tab"
                            aria-selected="false">
                            gift card
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane"
                          id="cardcheck"
                          aria-labelledby="home-tab"
                          role="tabpanel">
                          <table
                            className="transaction-table"
                            suppressHydrationWarning>
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
                                <th>Amount of payment</th>
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
                        </div>
                        <div
                          className="tab-pane active"
                          id="account_transfer"
                          aria-labelledby="account_transfer"
                          role="tabpanel">
                          <table
                            className="transaction-table"
                            suppressHydrationWarning>
                            <tbody>
                              <tr>
                                <th>bank</th>
                                <td className="radio-button-filed">
                                  <section className="dropdown-upword">
                                    <div className="btn-group dropup mr-1 mb-1">
                                      <a
                                        type="button"
                                        className="table-btn"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        Enterprise
                                        <img
                                          src="/down.png"
                                          className="bank-detail"></img>
                                      </a>
                                      <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                          industry
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Enterprise
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          nation
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Jeju
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          nat
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Jeonbuk
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          credit
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          union
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          post
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          cacaoion
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Saemaeul
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Gyeongnam
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          gwangju
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          busan
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          daegu
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          city
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Jeil
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          SC
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          we
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          NH
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Suhyup
                                        </a>
                                      </div>
                                    </div>
                                  </section>
                                </td>
                                <th>account holder name</th>
                                <td>
                                  <input
                                    type=""
                                    id="card_num"
                                    name="card_num"
                                    placeholder="Enter account holder name"
                                    className="card-number-input"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th> Amount of payment</th>
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
                        </div>
                        {/* virtual_account table */}
                        <div
                          className="tab-pane"
                          id="virtual_account"
                          role="tabpanel"
                          aria-labelledby="virtual_account"
                          aria-expanded="false">
                          <table
                            className="transaction-table"
                            suppressHydrationWarning>
                            <tbody>
                              <tr>
                                <th>virtual account bank</th>
                                <td className="radio-button-filed">
                                  <section className="dropdown-upword">
                                    <div className="btn-group dropup mr-1 mb-1">
                                      <a
                                        type="button"
                                        className="table-btn"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        Enterprise
                                        <img
                                          src="/down.png"
                                          className="bank-detail"></img>
                                      </a>
                                      <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                          industry
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Enterprise
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          nation
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Jeju
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          nat
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Jeonbuk
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          credit
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          union
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          post
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          cacaoion
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Saemaeul
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Gyeongnam
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          gwangju
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          busan
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          daegu
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          city
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Jeil
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          SC
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          we
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          NH
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Suhyup
                                        </a>
                                      </div>
                                    </div>
                                  </section>
                                </td>
                                <th>virtual account number</th>
                                <td>
                                  <input
                                    type="number"
                                    id="card_num"
                                    name="card_num"
                                    placeholder="Enter only number without - "
                                    className="card-number-input"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th> depositor name</th>
                                <td>
                                  <input
                                    type=""
                                    id="card_num"
                                    name="card_num"
                                    placeholder="Enter depositor name"
                                    className="card-number-input"
                                  />
                                </td>
                                <th>Amount of payment</th>
                                <td>
                                  <input
                                    type="number"
                                    id="card_num"
                                    name="card_num"
                                    placeholder="Enter number only"
                                    className="card-number-input"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th>payment date</th>
                                <td>
                                  <input
                                    id="date"
                                    type="date"
                                    required
                                    className="datepicker"
                                  />
                                </td>
                                <th></th>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* cell phone table */}
                        <div
                          className="tab-pane"
                          id="cell-phone"
                          role="tabpanel"
                          aria-labelledby="cell-phone-tab"
                          aria-expanded="false">
                          <table
                            className="transaction-table"
                            suppressHydrationWarning>
                            <tbody>
                              <tr>
                                <th>phone number</th>
                                <td>
                                  <input
                                    type="number"
                                    id="card_num"
                                    name="card_num"
                                    placeholder="Enter phone number without -"
                                    className="card-number-input"
                                  />
                                </td>
                                <th> birth date</th>
                                <td>
                                  <input
                                    type=""
                                    id="card_num"
                                    name="card_num"
                                    placeholder="(e.g 800101)"
                                    className="card-number-input"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th> Amount of payment</th>
                                <td>
                                  <input
                                    type=""
                                    id="card_num"
                                    name="card_num"
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
                        </div>
                        {/* gift card table */}
                        <div
                          className="tab-pane"
                          id="gift_card"
                          aria-labelledby="gift_card-tab"
                          role="tabpanel">
                          <table
                            className="transaction-table"
                            suppressHydrationWarning>
                            <tbody>
                              <tr>
                                <th>gift certificate type</th>
                                <td colSpan="3" className="gift-radio-button">
                                  <label>
                                    <input
                                      type="radio"
                                      className="option-input radio"
                                      name="example"
                                      checked
                                    />
                                    <span>cultural gift certificate</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      className="option-input radio"
                                      name="example"
                                    />
                                    <span>Game Culture Gift Certificate</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      className="option-input radio"
                                      name="example"
                                    />
                                    <span>Book Culture Gift Certificate</span>
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <th>Culture Land ID</th>
                                <td>
                                  <input
                                    type=""
                                    id="card_num"
                                    name="card_num"
                                    placeholder="Enter the ID of www.cultureland.co.kr"
                                    className="card-number-input"
                                  />
                                </td>
                                <th>Amount of payment</th>
                                <td>
                                  <input
                                    type="number"
                                    id="card_num"
                                    name="card_num"
                                    className="card-number-input"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th>payment date</th>
                                <td>
                                  <input
                                    id="date"
                                    type="date"
                                    required
                                    className="datepicker"
                                  />
                                </td>
                                <th></th>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* mobile view section */}
          <section className="mobile-view">
            <div className="row">
              <div className="col-sm-12">
                <div className="card overflow-hidden">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="tab-content">
                        <div
                          className="tab-pane active"
                          id="account_transfer"
                          aria-labelledby="account_transfer"
                          role="tabpanel">
                          <table
                            className="transaction-table"
                            suppressHydrationWarning>
                            <tbody>
                              <tr>
                                <td>
                                  <input
                                    type="number"
                                    id="card_num"
                                    name="card_num"
                                    placeholder="card number"
                                    className="card-number-input"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input
                                    type=""
                                    id="card_num"
                                    name="card_num"
                                    placeholder="Approval number"
                                    className="card-number-input"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input
                                    type="number"
                                    id="card_num"
                                    name="card_num"
                                    placeholder="Amount of payment"
                                    className="card-number-input"
                                  />
                                </td>
                              </tr>
                              <tr>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
