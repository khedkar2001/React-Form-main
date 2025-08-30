import { useState } from "react";
import "./App.css";

function App() {
  // ================================
  // State
  // ================================
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ================================
  // Handlers
  // ================================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = { email: "", password: "", confirmPassword: "" };

    // Email validation
    if (!form.email.includes("@") || !form.email.includes(".") || form.email.length < 5) {
      newErrors.email = "Invalid email address";
    }

    // Password validation
    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm password validation
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("✅ Form submitted successfully");
    } else {
      alert("❌ Can't submit the form");
    }
  };

  // ================================
  // JSX
  // ================================
  return (
    <div className="container">
      <form onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "invalid" : form.email ? "valid" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className={errors.password ? "invalid" : form.password ? "valid" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "invalid" : form.confirmPassword ? "valid" : ""}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
