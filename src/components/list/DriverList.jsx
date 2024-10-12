// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const DriverList = () => {
//     const [driverlist, setDriverList] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     // Replace with your API endpoint
//     const fetchWeatherData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost/pu_bus.php/getdriverlist"
//         );
//         console.log(response.data.driver_list);
//         setDriverList(response.data.driver_list);
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
//               <th>Driver Name</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {driverlist.map((data) => (
//               <tr key={data.id}>
//                 <td>{data.driver_id} </td>
//                 <td>{data.driver_name}</td>
//                 <td><a href="#">Delete</a></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default DriverList

import React, { useEffect, useState } from "react";
import axios from "axios";

const DriverList = () => {
  const [driverlist, setDriverList] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/pu_bus.php/getdriverlist"
        );
        console.log(response.data.driver_list);
        setDriverList(response.data.driver_list || []); // Ensure it is always an array
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDriverData();
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
              <th>Driver Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {driverlist.length > 0 ? (
              driverlist.map((data) => (
                <tr key={data.driver_id}> {/* Correct key usage */}
                  <td>{data.driver_id}</td>
                  <td>{data.driver_name}</td>
                  <td><a href="#">Delete</a></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No drivers available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverList;
