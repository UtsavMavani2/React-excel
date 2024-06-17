// import React, { useState, useRef, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [rows, setRows] = useState([{ id: '', name: '', salary: '', address: '' }]);
//   const [savedData, setSavedData] = useState([]);
//   const inputRefs = useRef([[]]);

//   useEffect(() => {
//     // Ensure inputRefs array has the correct length
//     inputRefs.current = rows.map((row, rowIndex) => inputRefs.current[rowIndex] || []);
//   }, [rows]);

//   const handleInputChange = (e, rowIndex, key) => {
//     const updatedRows = [...rows];
//     updatedRows[rowIndex][key] = e.target.value;
//     setRows(updatedRows);
//   };

//   const handleKeyPress = (e, rowIndex, keyIndex) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       const nextKeyIndex = (keyIndex + 1) % 4;

//       if (keyIndex === 3) {
//         // When Enter is pressed on the last column (address), save the row and move to the first field of the next row
//         setSavedData([...savedData, rows[rowIndex]]);
//         if (rowIndex === rows.length - 1) {
//           // Add a new row if we're at the last row
//           setRows([...rows, { id: '', name: '', salary: '', address: '' }]);
//           setTimeout(() => {
//             inputRefs.current[rowIndex + 1][0].focus();
//           }, 0);
//         } else {
//           inputRefs.current[rowIndex + 1][0].focus();
//         }
//       } else {
//         // Focus the next input field in the same row
//         inputRefs.current[rowIndex][nextKeyIndex].focus();
//       }
//     }
//   };

//   const setInputRef = (element, rowIndex, keyIndex) => {
//     if (!inputRefs.current[rowIndex]) {
//       inputRefs.current[rowIndex] = [];
//     }
//     inputRefs.current[rowIndex][keyIndex] = element;
//   };

//   return (
//     <div className="App">
//       <h1>Excel-like Data Entry Table</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Salary</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {Object.keys(row).map((key, keyIndex) => (
//                 <td key={keyIndex}>
//                   {savedData.some((savedRow, savedIndex) => savedIndex === rowIndex) ? (
//                     <span>{row[key]}</span>
//                   ) : (
//                     <input
//                       ref={(el) => setInputRef(el, rowIndex, keyIndex)}
//                       type={key === 'salary' || key === 'id' ? 'number' : 'text'}
//                       value={row[key]}
//                       onChange={(e) => handleInputChange(e, rowIndex, key)}
//                       onKeyPress={(e) => handleKeyPress(e, rowIndex, keyIndex)}
//                       onBlur={() => {
//                         if (row[key] !== '') {
//                           const updatedRows = [...rows];
//                           updatedRows[rowIndex][key] = row[key];
//                           setRows(updatedRows);
//                         }
//                       }}
//                     />
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2>Saved Data</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Salary</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {savedData.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               <td>{row.id}</td>
//               <td>{row.name}</td>
//               <td>{row.salary}</td>
//               <td>{row.address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useRef, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [rows, setRows] = useState(Array.from({ length: 1 }, (_, i) => ({ id: i + 1, name: '', salary: '', address: '' })));
//   const inputRefs = useRef([[]]);

//   useEffect(() => {
//     // Ensure inputRefs array has the correct length
//     inputRefs.current = rows.map((row, rowIndex) => inputRefs.current[rowIndex] || []);
//   }, [rows]);

//   const handleInputChange = (e, rowIndex, key) => {
//     const updatedRows = [...rows];
//     updatedRows[rowIndex][key] = e.target.value;
//     setRows(updatedRows);
//   };

//   const handleKeyPress = (e, rowIndex, keyIndex) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       const nextKeyIndex = (keyIndex + 1) % 4;

//       if (keyIndex === 3) {
//         // When Enter is pressed on the last column (address), move to the first field of the next row
//         if (rowIndex === rows.length - 1) {
//           // Add a new row if we're at the last row
//           setRows([...rows, { id: rows.length + 1, name: '', salary: '', address: '' }]);
//           setTimeout(() => {
//             inputRefs.current[rowIndex + 1][0].focus();
//           }, 0);
//         } else {
//           inputRefs.current[rowIndex + 1][0].focus();
//         }
//       } else {
//         // Focus the next input field in the same row
//         inputRefs.current[rowIndex][nextKeyIndex].focus();
//       }
//     }
//   };

//   const setInputRef = (element, rowIndex, keyIndex) => {
//     if (!inputRefs.current[rowIndex]) {
//       inputRefs.current[rowIndex] = [];
//     }
//     inputRefs.current[rowIndex][keyIndex] = element;
//   };

//   return (
//     <div className="App">
//       <h1>Excel-like Data Entry Table</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Row</th>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Salary</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               <td>{rowIndex + 1}</td>
//               {Object.keys(row).map((key, keyIndex) => (
//                 <td key={keyIndex}>
//                   <input
//                     ref={(el) => setInputRef(el, rowIndex, keyIndex)}
//                     type={key === 'salary' || key === 'id' ? 'number' : 'text'}
//                     value={row[key]}
//                     onChange={(e) => handleInputChange(e, rowIndex, key)}
//                     onKeyPress={(e) => handleKeyPress(e, rowIndex, keyIndex)}
//                   />
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;




// App.js
import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const App = () => {
  const [rows, setRows] = useState(Array.from({ length: 5 }, () => ({ id: '', name: '', salary: '', address: '' })));
  const inputRefs = useRef([[]]);

  useEffect(() => {
    // Ensure inputRefs array has the correct length
    inputRefs.current = rows.map((row, rowIndex) => inputRefs.current[rowIndex] || []);
  }, [rows]);

  const handleInputChange = (e, rowIndex, key) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][key] = e.target.value;
    setRows(updatedRows);
  };

  const handleKeyPress = (e, rowIndex, keyIndex) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextKeyIndex = (keyIndex + 1) % 4;

      if (keyIndex === 3) {
        // When Enter is pressed on the last column (address), move to the first field of the next row
        if (rowIndex === rows.length - 1) {
          // Add a new row if we're at the last row
          setRows([...rows, { id: '', name: '', salary: '', address: '' }]);
          setTimeout(() => {
            inputRefs.current[rowIndex + 1][0].focus();
          }, 0);
        } else {
          inputRefs.current[rowIndex + 1][0].focus();
        }
      } else {
        // Focus the next input field in the same row
        inputRefs.current[rowIndex][nextKeyIndex].focus();
      }
    }
  };

  const setInputRef = (element, rowIndex, keyIndex) => {
    if (!inputRefs.current[rowIndex]) {
      inputRefs.current[rowIndex] = [];
    }
    inputRefs.current[rowIndex][keyIndex] = element;
  };

  return (
    <div className="App">
      <h1>Excel-like Data Entry Table</h1>
      <table>
        <thead>
          <tr>
            <th>Row</th>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowIndex + 1}</td>
              {Object.keys(row).map((key, keyIndex) => (
                <td key={keyIndex}>
                  <input
                    ref={(el) => setInputRef(el, rowIndex, keyIndex)}
                    type={key === 'salary' ? 'number' : 'text'}
                    value={row[key]}
                    onChange={(e) => handleInputChange(e, rowIndex, key)}
                    onKeyPress={(e) => handleKeyPress(e, rowIndex, keyIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
