import { Link } from "react-router-dom";
import "./BuyOptions.css"

const BuyOptions = () => {
    return ( 
        <div className="BuyOptions-container">
          <h1> Finance </h1>
            <a href="http://localhost:3000/BuyOptions" id="Finance" to="/BuyOptions">
            </a>
            <p id="finance"> Finance any car for 300/month !</p>
          <h1> Sell/Trade </h1>
            <a href="http://localhost:3000/BuyOptions"id="SellTrade" to="/BuyOptions">
            
             </a><p>Sell any car that you want or trade it in for a new/used one !</p>
            <h1> How It Works </h1>
            <a href="http://localhost:3000/Buyoptions" id="HowItWorks" to="/BuyOptions">
            </a>
            <p>
               Just contact us and we will reach out with available options !
            </p>
        </div>
    )
}
export default BuyOptions;