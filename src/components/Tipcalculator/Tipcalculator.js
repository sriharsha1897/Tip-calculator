import Output1 from "../Output/Output1"
import Input from "../Input/Input"
import Output2 from "../Output/Output2"
import {useState} from 'react';


export const Tipcalculator = (props) => {
    const [custdata,setCustdata]= useState([]);
    const [totalcust,setTotalcust]=useState(0);
    const [totaltip,setTotaltip]=useState(0);
    const onCustAddItem = (cust) => {
        const data = [...custdata]
        data.push(cust)
        setCustdata(data)
    }

    const tipCalculationHandler = () =>{
        let tip =0
        setTotalcust(custdata.length);
        custdata.forEach((cust) =>{
            
            tip = tip + parseInt(cust.tip)
            // console.log(tip)
            return tip
            
        } )
        // console.log(tip)
        setTotaltip(tip)
    }

    return (
        <div>
            <Input addCustomerDetailHandler={onCustAddItem}/>
            <Output1 custdata={custdata}/>
            <button 
            className="btn btn-success"
            onClick={tipCalculationHandler}
            >Calculate Tip & Customer</button>
            <Output2 totalcust={totalcust} totaltip={totaltip}/>
        </div>
    )
}



export default Tipcalculator
