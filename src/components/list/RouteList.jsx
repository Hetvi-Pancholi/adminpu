// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const RouteList = () => {
//     const [routelist, setRouteList] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//       // Replace with your API endpoint
//       const fetchWeatherData = async () => {
//         try {
//           const response = await axios.get(
//             "http://localhost/pu_bus.php/getroutelist"
//           );
//           console.log(response.data.route_list);
//           setRouteList(response.data.route_list);
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
//                 <th>Route Area No</th>
//                 <th>Route Name</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {routelist.map((data) => (
//                 <tr key={data.id}>
//                   <td>{data.route_id} </td>
//                   <td>{data.route_area_no}</td>
//                   <td>{data.route_name}</td>
//                   <td><a href="#">Delete</a></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
// }

// export default RouteList

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BusList.module.css";

const RouteList = () => {
  const [routelist, setRouteList] = useState([]); // Set an empty array initially
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRouteData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/pu_bus.php/getroutelist"
        );
        console.log(response.data.route_list);
        setRouteList(response.data.route_list || []); // Ensure data is an array
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRouteData();
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
          placeholder="Route Area No."
          aria-label="Route Area No."
          aria-describedby="basic-addon2"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Route Name"
          aria-label="Route Name"
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
        <table className={`table ${styles.tableBorder}`}>
          <thead className="table-dark">
            <tr>
              <th className={`${styles.tableDesignCol1}`}>ID</th>
              <th className={`${styles.tableDesignCol2}`}>Route Area No</th>
              <th className={`${styles.tableDesignCol2}`}>Route Name</th>
              <th className={`${styles.tableDesignCol3}`} colSpan="2">
                Action
              </th>
            </tr>
          </thead>
          <tbody style={{ overflowY: "auto" }}>
            {routelist.length > 0 ? (
              routelist.map((data) => (
                <tr key={data.route_id}>
                  {" "}
                  {/* Use the correct key */}
                  <td>{data.route_id}</td>
                  <td>{data.route_area_no}</td>
                  <td>{data.route_name}</td>
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
                <td colSpan="4">No route data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RouteList;
