import React from "react";
import COW_IMAGE from "../images/cow.svg";
import DOCTOR_IMAGE from "../images/doctor.svg";

export function MyComponent() {
  return (
    <div>
      <img src={COW_IMAGE} width={150} height={150} />
      <img src={DOCTOR_IMAGE} width={150} height={150} />
    </div>
  );
}
