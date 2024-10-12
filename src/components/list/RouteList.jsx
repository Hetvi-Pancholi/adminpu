
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
    <div>
      <div>
        <button>Add</button>
      </div>
      <div>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Route Area No</th>
              <th>Route Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {routelist.length > 0 ? (
              routelist.map((data) => (
                <tr key={data.route_id}> {/* Use the correct key */}
                  <td>{data.route_id}</td>
                  <td>{data.route_area_no}</td>
                  <td>{data.route_name}</td>
                  <td><a href="#">Delete</a></td>
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
