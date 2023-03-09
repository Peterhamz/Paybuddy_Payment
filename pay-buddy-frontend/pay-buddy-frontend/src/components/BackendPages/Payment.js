import { useContext } from "react";
import { MyContext } from "../../statemanagement/ComponentState";
import "./paymentStyle.css"

import Wallet from '../../assets/icons/Wallet.svg'
import Data from '../../assets/icons/Data.svg'
import Electricity from '../../assets/icons/Electricity.svg'
import Airtime from '../../assets/icons/Payment.svg'
import { Link } from "react-router-dom";

const Payment = () => {
    const { pagename, setPageName } = useContext(MyContext);
    setPageName("Payment");
    return (  
        <section className="payment-copy-section">
            <div className="payment-container-section">
                <div className="payment-item">
                    <div className="payment-svg-div">
                        <img src={ Wallet } alt="Wallet-svg" />
                    </div>
                    <div>
                        <Link to="/pay-buddy/send-money-1" >
                            <h3 className="payment-header-title">Send Money</h3>
                            <p className="payment-header-p">Send money instantly to family and 
                            friends without any hidden charges</p>
                        </Link>
                        
                    </div>
                </div>
                <div className="payment-item">
                    <div className="payment-svg-div">
                        <img src={ Airtime } alt="Payment-svg" />
                    </div>
                    <div>
                        <h3 className="payment-header-title">Buy Airtime</h3>
                        <p className="payment-header-p">Never run out of airtime to reach important people in your life.
                         Get 10% discount on every recharge</p>
                    </div>
                </div>
                <div className="payment-item">
                    <div className="payment-svg-div">
                        <img src={ Data } alt="Data-svg" />
                    </div>
                    <div>
                        <Link to="/pay-buddy/buy-data-1" >
                        <h3 className="payment-header-title">Buy Data</h3>
                        <p className="payment-header-p">Data is life! Buy instant data to stay connected to your world.
                         Get a 20% discount on every data purchase</p>
                        </Link>
                    </div>
                </div>
                <div className="payment-item">
                    <div className="payment-svg-div">
                        <img src={ Electricity } alt="Electricity-svg" />
                    </div>
                    <div>
                        <h3 className="payment-header-title">Buy Electricity</h3>
                        <p className="payment-header-p">Never run out of power! 
                        Prepaid and postpaid services available</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Payment;