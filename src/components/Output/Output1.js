import './Output1.css'

export const Output1 = (props) => {
    const {custdata} = props;
    console.log(custdata)

    const listCustomers =custdata.map((cust) =>
        <li key={cust.id}>
          {cust.name} offering a tip of {cust.tip} rupee.
        </li>
      )

    // const listCustomers= custdata.map((list,index) => (<li key={index}>{list}</li>))
    return (
        <div className="output1">
            <h3 className="mt-4 cstlist">CUSTOMER LIST</h3>
            <hr/>
            <ul>
               {listCustomers}
            </ul>
        </div>
    )
}



export default Output1