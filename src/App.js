import './App.css';
import Page from './Pages/Page';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
      <div className="col-1"></div>  
      <div className="col-10">
          <Page/>
      </div>
      <div className="col-1"></div>

      </div>
      
      
    </div>
  );
}


// import React, { useState } from 'react';
// import Select from 'react-select';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

// export default function App() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const buttonHandler= () => {
//     setSelectedOption()
//   }
//   return (
//     <div className="App">
//       <Select
//         defaultValue={selectedOption}
//         onChange={setSelectedOption}
//         options={options}
//       />
//       <button onClick={buttonHandler}>Submit</button>
//     </div>
//   );
// }



export default App;
