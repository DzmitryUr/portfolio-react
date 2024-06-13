import { useState } from "react";
import { evaluatePasswordStrength } from "../../utils/password";
import "./PasswordValidator.css";

function PasswordValidator() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const newStrength = evaluatePasswordStrength(newPassword);
    setStrength(newStrength);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="password-validator">
      <h2>Password Strength Validator</h2>
      <div className="input-row">
        <input
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <button onClick={togglePasswordVisibility}>
          {isPasswordVisible ? "Hide" : "Show"}
        </button>
      </div>
      {strength && (
        <p>
          Password Strength: <strong>{strength}</strong>
        </p>
      )}
    </div>
  );
}

export default PasswordValidator;
