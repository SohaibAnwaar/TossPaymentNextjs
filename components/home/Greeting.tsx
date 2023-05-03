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
              <span className = "paragram" >TosPayments is a company that only supports payment services. To cancel your payment, please contact the store where you purchased the product directly.<br></br>You can check the store contact information on the receipt after checking the payment details.</span>
              <a href="#" className="history-link">What if there is a 'TosPayments' payment history that I don't know about?</a>
              <div className='table-manu'>
                <ul>
                  <li><a href="">credit / check card</a></li>
                  <li><a href="">account transfer</a></li>
                  <li><a href="">Virtual Account</a></li>
                  <li><a href="">cell phone</a></li>
                  <li><a href="">gift card</a></li>
                </ul>
                <div className='horizontal-line-table'></div>
              </div>

              <table className="transaction-table">
                <tr>
                  <th>Inquiry method</th>
                  <td>
                  <label>
                      <input type="radio" name="radioButton" value="option1"/>
                      Search by  card number
                    </label>
                    <label>
                      <input type="radio" name="radioButton" value="option2"/>
                     <span> Inquiry by approva number</span>
                    </label>
                </td>
                  <td > 
                  </td>
                  
                <td>Germany</td>
                </tr>
              
              </table>
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
