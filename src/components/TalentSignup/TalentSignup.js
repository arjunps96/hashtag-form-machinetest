import React from "react";
import axios from "axios";
import Form from "../Form/Form";

const TalentSignup = () => {
  const submitHandler = async (formData) => {
    try {
      const res = await axios.post(
        "https://admin.fanconvo.com/api/v3/sign-up/talent",
        JSON.stringify(formData),
        {
          "Content-Type": "application/json",
        }
      );
      window.alert(`Successfully login ${res.data}`);
    } catch (err) {
      window.alert("Please try again");
    }
  };
  return (
    <div>
      <Form submitFormData={submitHandler} />
    </div>
  );
};

export default TalentSignup;
