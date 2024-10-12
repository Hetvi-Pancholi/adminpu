import React,{useEffect,useState} from "react";
import axios from 'axios';


const ShiftData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('http://localhost/pu_bus.php/getshift');
        console.log(response.data.shift_list);
        setWeatherData(response.data.shift_list);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    
    fetchWeatherData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="w-100">
      
      <div>
  {weatherData.map((data) => (
    <div key={data.id}> {/* Wrapping in a parent div */}
      <p>{data.shift_id}</p> {/* Printing shift_id */}
      <p>{data.shift_name}</p> {/* Printing shift_name */}
    </div>
  ))}
</div>



      <h1 className="text-center fw-light fst-normal fs-1 mt-5 text-body-emphasis">
        Shift Data Managment
      </h1>
      <div className="container text-center">
        <div className="row m-5">
          <div className="col text-center fw-light fst-normal fs-4">
            Shift Name
          </div>
          <div className="col">
            <div className="btn-group w-50">
              <button className="btn btn-secondary btn-lg" type="button">
                Select Shift
              </button>
              <button
                type="button"
                className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">...</ul>
            </div>
          </div>
        </div>
        <div className="row m-5">
          <div className="col text-center fw-light fst-normal fs-4">
            Bus No. :{" "}
          </div>
          <div className="col">
            <div className="btn-group w-50">
              <button className="btn btn-secondary btn-lg" type="button">
                Select Bus No.
              </button>
              <button
                type="button"
                className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">...</ul>
            </div>
          </div>
        </div>
        <div className="row m-5">
          <div className="col text-center fw-light fst-normal fs-4">
            Route Area No. :{" "}
          </div>
          <div className="col">
            <div className="btn-group w-50">
              <button className="btn btn-secondary btn-lg" type="button">
                Select Route Area No.
              </button>
              <button
                type="button"
                className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">...</ul>
            </div>
          </div>
        </div>
        <div className="row m-5">
          <div className="col text-center fw-light fst-normal fs-4">
            Route Name :{" "}
          </div>
          <div className="col">
            <div className="btn-group w-50">
              <button className="btn btn-secondary btn-lg" type="button">
                Select Route Name
              </button>
              <button
                type="button"
                className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">...</ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          type="button"
          className="btn btn-info btn-secondary btn-lg m-4 "
        >
          UPDATE
        </button>
        <button type="button" className="btn btn-info btn-secondary btn-lg m-4">
          ADD
        </button>
        <button type="button" className="btn btn-info btn-secondary btn-lg m-4">
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ShiftData;
