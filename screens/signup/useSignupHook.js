import { useState } from "react";
import { signupApi } from "./api";
function useSignupHook() {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = () => {
    // Validate form fields and handle signup logic
    if (
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.confirmPassword
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    signupApi(signUpData)
      .then((res) => {
        alert(res.message);
        setSignUpData({
          email: "",
          password: "",
          confirmPassword: "",
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return {
    signUpData,
    setSignUpData,
    handleSignUp,
  };
}

export default useSignupHook;
