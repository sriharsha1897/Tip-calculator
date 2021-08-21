import './Output2.css'
import "bootstrap/dist/css/bootstrap.min.css";

export const Output2 = (props) => {
  return (
    <div className="output2 mt-3 ">
        <div className="row">
            <div className="col-8">
                Total customers
            </div>
            
            <div className="col-4">Tip</div>
        </div>
        <hr/>
        
        <div className="row outputPart2">
        <div className="col-8">
              <p>{props.totalcust}</p>
            </div>
            <div className="col-4">
                <p>{props.totaltip}</p>
            </div>

        </div>
     
    </div>
  );
};

export default Output2;
