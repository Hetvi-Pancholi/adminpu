import React from "react";

const BusData = () => {
  return (
    <div className="w-100">
      <h1 className="text-center fw-light fst-normal fs-1 mt-5 text-body-emphasis">
        Bus Data Managment
      </h1>
      <div className="container text-center">
        <div className="row m-5">
          <div className="col text-center fw-light fst-normal fs-4">
            Bus No. :
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
            Driver Name :{" "}
          </div>
          <div className="col">
            <div className="btn-group w-50">
              <button className="btn btn-secondary btn-lg" type="button">
                Select Driver Name
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
            Section :
          </div>
          <div className="col">
            <div className="btn-group w-50">
              <button className="btn btn-secondary btn-lg" type="button">
                Select Section
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
            Slot No. :
          </div>
          <div className="col">
            <div className="btn-group w-50">
              <button className="btn btn-secondary btn-lg" type="button">
                Select Slot No.
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
        <button type="button" className="btn btn-info btn-secondary btn-lg m-4">
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

export default BusData;
