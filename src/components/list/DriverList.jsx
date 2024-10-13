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
import styles from "./BusList.module.css";

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
    <div className="m-5">
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Driver Name"
            aria-label="Driver Name"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Add
            </button>
          </div>
        </div>
      </div>
      <div>
        <table className={`table ${styles.tableBorder}`}>
          <thead className="table-dark">
            <tr>
              <th className={`${styles.tableDesignCol1}`}>ID</th>
              <th className={`${styles.tableDesignCol2}`}>Driver Name</th>
              <th className={`${styles.tableDesignCol3}`} colSpan="2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {driverlist.length > 0 ? (
              driverlist.map((data) => (
                <tr key={data.driver_id}>
                  {" "}
                  {/* Correct key usage */}
                  <td>{data.driver_id}</td>
                  <td>{data.driver_name}</td>
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
