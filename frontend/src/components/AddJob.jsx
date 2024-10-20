import Logoo from "./Logoo";
import Textfield from "./Textfield";
import style from "./css/Addjob.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddJob() {
  const [job, setJob] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;


    const updatedValue = name === "phoneNumber" ? parseInt(value) : value;

    setJob((prevJob) => ({
      ...prevJob,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9091/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });

      if (response.ok) {
        const result = await response.json();
        navigate("/");
      } else {
        console.error("Failed to add job:");
      }
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.registerBox}>
        <Logoo />
        <h1>Add New Job</h1>
        <Textfield type="text" name="name" placeholder="Name" onChange={handleChange} />
        <Textfield type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
        <Textfield type="text" name="device" placeholder="Device" onChange={handleChange} />
        <Textfield type="date" name="date" placeholder="Date" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit} className={style.submit}>
          Add
        </button>
      </div>
    </div>
  );
}
