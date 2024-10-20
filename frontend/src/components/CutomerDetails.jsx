import { useState } from "react";
import style from "./css/CostomerDetails.module.css";

export default function CustomerDetails(props) {
  const [state, setState] = useState("not-started");

  const handleStateChange = async (e) => {
    const newState = e.target.value;
    setState(newState);

    try {
      if (newState === "done") {
        const response = await fetch(`http://localhost:9091/jobs/${props.phoneNumber}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: props.name,
            phoneNumber: props.phoneNumber,
            device: props.device,
            date: props.date,
            status: newState,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("State updated successfully:", result);
        } else {
          console.error("Failed to update state:", response.statusText);
        }
      
      } else {
        const response = await fetch(`http://localhost:9091/jobs/${props.phoneNumber}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: props.name,
            phoneNumber: props.phoneNumber,
            device: props.device,
            date: props.date,
            status: newState,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("State updated successfully:", result);
        } else {
          console.error("Failed to update state:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error handling state change:", error);
    }
  };

  const stateClass = () => {
    if (state === "not-started") return style.notStarted;
    if (state === "started") return style.started;
    if (state === "done") return style.done;
  };

  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.name}</td>
      <td>{props.phoneNumber}</td>
      <td>{props.device}</td>
      <td>
        <select
          className={`${style.stateDropdown} ${stateClass()}`}
          name="state"
          value={state}
          onChange={handleStateChange}
        >
          <option value="not-started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
      </td>
    </tr>
  );
}
