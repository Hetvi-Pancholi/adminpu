// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const ShiftList = () => {
//     const [shiftlist, setShiftList] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Replace with your API endpoint
//     const fetchWeatherData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost/pu_bus.php/getshift"
//         );
//         console.log(response.data.shift_list);
//         setShiftList(response.data.shift_list);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchWeatherData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   return (
//     <div>
//       <div>
//         <button>Add</button>
        
//       </div>
//       <div>
//         <table class="table table-bordered">
//           <thead class="table-dark">
//             <tr>
//               <th>ID</th>
//               <th>Shift Name</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* {shiftlist.map((data) => (
//               <tr key={data.id}>
//                 <td>{data.shift_id} </td>
//                 <td>{data.shift_name}</td>
//                 <td><a href="#">Delete</a></td>
//               </tr>
//             ))} */}

//             {shiftlist.length > 0 ? (
//               shiftlist.map((data) => (
//                 <tr key={data.id}>
//                   <td>{data.shift_id}</td>
//                   <td>{data.shift_name}</td>
//                   <td><a href="#">Delete</a></td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3">No shifts available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default ShiftList

import React, { useEffect, useState } from "react";
import axios from "axios";

const ShiftList = () => {
  const [shiftlist, setShiftList] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShiftData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/pu_bus.php/getshift"
        );
        console.log(response.data.shift_list);
        setShiftList(response.data.shift_list || []); // Ensure it's always an array
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchShiftData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div>
        <button>Add</button>
      </div>
      <div>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Shift Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shiftlist.length > 0 ? (
              shiftlist.map((data) => (
                <tr key={data.shift_id}> {/* Correct key usage */}
                  <td>{data.shift_id}</td>
                  <td>{data.shift_name}</td>
                  <td><a href="#">Delete</a></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No shifts available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShiftList;
