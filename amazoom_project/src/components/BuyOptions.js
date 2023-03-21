import { Link } from "react-router-dom";
import "./BuyOptions.css"

const BuyOptions = () => {
    return ( 
        <div className="BuyOptions-container">
          <h1> Finance </h1>
        <a href="http://localhost:3000/BuyOptions" id="Finance" to="/BuyOptions">
            Learn More
        </a>
        <h1> Sell/Trade </h1>
        <a href="http://localhost:3000/BuyOptions"id="SellTrade" to="/BuyOptions">
            Learn More
        </a>
        <h1> How It Works </h1>
        <a href="http://localhost:3000/Buyoptions" id="HowItWorks" to="/BuyOptions">
            Learn More
        </a>
        </div>
    )
}
export default BuyOptions;