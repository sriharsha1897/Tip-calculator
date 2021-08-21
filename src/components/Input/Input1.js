import  './Input.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import Select from 'react-select';



export const Input = (props) => {
  
  var discountList=[
    {
      value:20,
      label:'Excellent 20%'
    },
    {
      value:10,
      label:'Moderate 10%'
    },
    {
      value:5,
      label:'Bad 5%'
    }
  ]

  
  var id = "id" + Math.random().toString(16).slice(2);
  const [customer,setCustomer]=useState({id:id,name:'',amount:'',tip:''});
  const [discount,setDiscount]=useState(discountList.value)

const changeCustomerData = (e) => {
  setCustomer({...customer,[e.target.name]:e.target.value})
}

const changeDiscountvalue = e =>{
  // customer.discount=e.value
  setDiscount(e.value)
  console.log(`Option selected:`, e);
}
const onButtonClickHandler = () => {
  if(customer.name && customer.amount){
  const tip = parseInt(customer['amount'])/parseInt(discount);
  customer['tip']=tip;
   console.log(customer)
   props.addCustomerDetailHandler(customer);
   setCustomer({id:id,name:'',amount:'',tip:''});
   setDiscount(null)
  }

}



  return (
    <div className="inputCalc">
      <div className="d-flex justify-content-center flex-column mt-4 inputPart1">
        <label htmlFor="" className="mb-5">
          Enter the bill amount
        </label>
        <input type="number" name="amount" onChange={changeCustomerData} value={customer.amount}/>
        <hr />
      </div>
      <div className="d-flex flex-row justify-content-center bd-highlight mt-4 ">
        <label htmlFor="">How was the service</label>
        <Select
          
          className="tipRating"
          onChange={changeDiscountvalue}
          options={discountList}
        />
          
        <input 
        type="text"  
        name="name"
        className="cstName"
        onChange={changeCustomerData}
        value={customer.name}
        />
        <button 
        className="btnName btn btn-primary"
        onClick={onButtonClickHandler}
        >
          Add Customer</button>
      </div>
     
    </div>
  );
};

export default Input;
