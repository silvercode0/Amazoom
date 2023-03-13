// LET PEOPLE KNOW WHO WE ARE // 
import { Link } from "react-router-dom";


const Supplier = () => {
    return ( 
        <div className="supplier-container">
          <h1> Supplier </h1>
          <Link id="Supplier" to="/Supplier">
            About Us
          </Link>
        </div>
    )
}

export default Supplier;
