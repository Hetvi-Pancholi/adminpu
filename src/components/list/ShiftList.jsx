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
import styles from "./BusList.module.css";

const ShiftList = () => {
  const [shiftlist, setShiftList] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchShiftData = async () => {
    try {
      const response = await axios.get("http://localhost/pu_bus.php/getshift");
      console.log(response.data.shift_list);
      setShiftList(response.data.shift_list || []); // Ensure it's always an array
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShiftData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const remove_shift = async (shift_id) => {
    await fetch("http://localhost/pu_bus.php/removeshiftlist", {
      method: "POST",
      headers: {
        Accept: "applicatiion/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shift_id: shift_id }),
    });
    await fetchShiftData();
  };

  return (
    <div className="m-5">
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Shift Name"
            aria-label="Shift Name"
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
              <th className={`${styles.tableDesignCol2}`}>Shift Name</th>
              <th className={`${styles.tableDesignCol3}`} colSpan="2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {shiftlist.length > 0 ? (
              shiftlist.map((data) => (
                <tr key={data.shift_id}>
                  {" "}
                  {/* Correct key usage */}
                  <td>{data.shift_id}</td>
                  <td>{data.shift_name}</td>
                  <td>
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      onClick={() => {
                        remove_shift(data.shift_id);
                      }}
                    >
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
