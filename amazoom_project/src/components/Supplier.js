// LET PEOPLE KNOW WHO WE ARE // 
// import { Link } from "react-router-dom";
import "./Supplier.css"

const Supplier = () => {
    return ( 
        <div className="main">
          {/* <h4 className="Name"> Supplier </h4> */}
          <a href="http://localhost:3000/Supplier" id="Supplier" to="/Supplier">
          </a>
          <div className="Amazoom">
            <div className="col">
               <h1>Amazoom</h1>
               <h3>Hello, We are Amazoom. A car selling paradise! 
                <br/>
                <h4>
                  Down below is where are head office is. Feel free to stop by for any questions or looking for a motorible!
                 </h4>
                 
                 </h3>
               <h4 className="list-unstyled">
                 <li>555-5555-5555</li>
                  <li>California</li>
                   <li>123 Street</li>
                </h4>
              </div>
           <hr />
         </div>
      </div>
    )
}

export default Supplier;
