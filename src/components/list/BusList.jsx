// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const BusList = () => {
//   const [buslist, setBusList] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Replace with your API endpoint
//     const fetchWeatherData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost/pu_bus.php/getbuslist"
//         );
//         console.log(response.data.bus_list);
//         setBusList(response.data.bus_list);
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
//         <button>Delete</button>
//       </div>
//       <div>
//         <table class="table table-bordered">
//           <thead class="table-dark">
//             <tr>
//               <th>ID</th>
//               <th>Bus No</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {buslist.map((data) => (
//               <tr key={data.id}>
//                 <td>{data.bus_id} </td>
//                 <td>{data.bus_no}</td>
//                 <td><a href="#">Delete</a></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BusList;

import React, { useEffect, useState } from "react";
import styles from "./BusList.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const BusList = () => {
  const [buslist, setBusList] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        console.log("h1");

        const response = await axios.get(
          "http://localhost/pu_bus.php/getbuslist"
        );
        console.log("h2");

        console.log(response.data.status);
        console.log("h3");
        setBusList(response.data.bus_list || []); // Ensure the list is always an array
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBusData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="m-5">
      <div>
        {/* <Link to="/add">Add</Link> */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Bus No."
            aria-label="Bus No."
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
              <th className={`${styles.tableDesignCol2}`}>Bus No</th>
              <th className={`${styles.tableDesignCol3}`} colSpan="2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {buslist.length > 0 ? (
              buslist.map((data) => (
                <tr key={data.bus_id}>
                  <td>{data.bus_id}</td>
                  <td>{data.bus_no}</td>
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
                <td colSpan="3">No buses available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusList;
