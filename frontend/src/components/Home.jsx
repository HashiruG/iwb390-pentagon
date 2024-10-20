import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./css/home.module.css";
import CustomerDetails from "./CutomerDetails";
import Logoo from "./Logoo";

export default function Home() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState(""); 


  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:9091/jobs");
        if (response.ok) {
          const data = await response.json();
          setJobs(data);
        } else {
          console.error("Failed to fetch customer details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomers();
  }, [],[jobs]);


  const handleAdd = () => {
    navigate("/Addjob");
  };


  const handleFilter = async () => {
    try {
      const response = await fetch(
        `http://localhost:9091/jobs/${phoneNumber}`
      );
      if (response.ok) {
        const filteredData = await response.json();
        setJobs(filteredData); 
      } else {
        console.error("Failed to filter customers:", response.statusText);
      }
    } catch (error) {
      console.error("Error filtering customers:", error);
    }
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.bodyItem}>
          <div className={style.addjob}>
            <Logoo />
            <h2>Dashboard</h2>
            <button className={style.add} name="add" onClick={handleAdd}>
              Add new job
            </button>
          </div>

          <div className={style.filter}>
            <input
              type="text"
              className={style.f_phonenum}
              placeholder="Search By Phone Number ..."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)} 
            />
            <button type="search" className={style.f_button} onClick={handleFilter}>
              Filter
            </button>
          </div>

          <div className={style.jobdetails}>
            <h2>Job Details</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Device</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {jobs.length > 0 ? (
                  jobs.map((job, index) => (
                    <CustomerDetails
                      key={index}
                      date={job.date}
                      name={job.name}
                      phoneNumber={job.phoneNumber}
                      device={job.device}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No job records found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
