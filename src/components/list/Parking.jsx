// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Parking = () => {
//     const [parkinglist, setParkingList] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//       // Replace with your API endpoint
//       const fetchWeatherData = async () => {
//         try {
//           const response = await axios.get(
//             "http://localhost/pu_bus.php/getparkinglist"
//           );
//           console.log(response.data.parking_list);
//           setParkingList(response.data.parking_list);
//           setLoading(false);
//         } catch (err) {
//           setError(err.message);
//           setLoading(false);
//         }
//       };

//       fetchWeatherData();
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;
//     return (
//       <div>
//         <div>
//           <button>Add</button>

//         </div>
//         <div>
//           <table class="table table-bordered">
//             <thead class="table-dark">
//               <tr>
//                 <th>ID</th>
//                 <th>Section</th>
//                 <th>Slot</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {parkinglist.map((data) => (
//                 <tr key={data.id}>
//                   <td>{data.parking_id} </td>
//                   <td>{data.section}</td>
//                   <td>{data.slot_no}</td>
//                   <td><a href="#">Delete</a></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
// }

// export default Parking

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Parking = () => {
//   const [parkinglist, setParkingList] = useState([]); // Set an empty array initially
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchParkingData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost/pu_bus.php/getparkinglist"
//         );
//         console.log(response.data.parking_list);
//         setParkingList(response.data.parking_list); // Set the fetched data
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchParkingData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <div>
//         <button>Add</button>
//       </div>
//       <div>
//         <table className="table table-bordered">
//           <thead className="table-dark">
//             <tr>
//               <th>ID</th>
//               <th>Section</th>
//               <th>Slot</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {parkinglist.length > 0 ? (
//               parkinglist.map((data) => (
//                 <tr key={data.id}>
//                   <td>{data.parking_id}</td>
//                   <td>{data.section}</td>
//                   <td>{data.slot_no}</td>
//                   <td><a href="#">Delete</a></td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4">No parking data available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Parking;

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BusList.module.css";

const Parking = () => {
  const [parkinglist, setParkingList] = useState([]); // Set an empty array initially
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/pu_bus.php/getparkinglist"
        );
        const parkingData = response.data?.parking_list || []; // Ensure the data is an array
        setParkingList(parkingData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchParkingData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="m-5">
      <div>
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Section"
            aria-label="Section"
            aria-describedby="basic-addon2"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Slot"
            aria-label="Slot"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-prepend ">
            <span class="input-group-text" id="">
              Add
            </span>
          </div>
        </div>
      </div>
      <div>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th className={`${styles.tableDesignCol1}`}>ID</th>
              <th className={`${styles.tableDesignCol2}`}>Section</th>
              <th className={`${styles.tableDesignCol2}`}>Slot</th>
              <th className={`${styles.tableDesignCol3}`} colSpan="2">
                Action
              </th>
            </tr>
          </thead>
          <tbody style={{ overflowY: "auto" }}>
            {parkinglist.length > 0 ? (
              parkinglist.map((data) => (
                <tr key={data.parking_id}>
                  {" "}
                  {/* Use correct key */}
                  <td>{data.parking_id}</td>
                  <td>{data.section}</td>
                  <td>{data.slot_no}</td>
                  <td>
                    <button class="btn btn-outline-secondary" type="button">
                      Delete
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-outline-secondary" type="button">
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No parking data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Parking;
