// import { useState } from "react";
// import "./Login.css";

// const Login = () => {
//   const [emailValue, setEmailValue] = useState("");
//   return (
//     <div className="form-container">
//       <div className="form-box">
//         <div>
//           <h2 className="headingh2">LowerCase</h2>
//           <h1 className="heading1">Sign in</h1>
//         </div>

//         <form className="sign-in-form" name="sign-in-form" method="post">
//           <div class="input-group">
//             <input
//               type="email"
//               class="input-field"
//               id="email"
//               placeholder=" "
//               autocomplete="off"
//             />
//             <label for="email" class="input-label">
//               Email Address
//             </label>
//             <i class="icon fas fa-envelope"></i>
//           </div>

//           <div class="input-group">
//             <input
//               type="password"
//               class="input-field"
//               id="password"
//               placeholder=" "
//               autocomplete="off"
//             />
//             <label for="password" class="input-label">
//               Password
//             </label>
//             <i class="icon fas fa-lock"></i>
//           </div>

//           <div className="button-row">
//             <button className="signbtn">Sign In</button>
//           </div>
//         </form>

//            <div className="contact-supar-admin">
//         <h1>Can't Login</h1>
//         <button>Contact Supar Admin</button>
//       </div>
//       </div>

//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import "./Login.css";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

//  const baseUrl = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      setLoading(true);
      const response = await fetch(
        `https://lowercase-backend.onrender.com/api/admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        alert("Login Failed" + (errorData.message || "Something want Wrong"));
        return;
      }
      const data = await response.json();
      cookies.set("token", data.token, { expires: 1 });
      cookies.set("role", data?.admin?.role, { expires: 1 });
      if (data?.admin?.role === "admin" || data?.admin?.role === "superadmin") {
        navigate("/admin");
        alert("Login Successfully" + data.role);
      } else if (data.role === "user") {
        navigate("/");
      }
    } catch (err) {
      alert("something want wrong" + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <div className="logo-container">
          <h2 className="headingh2">LowerCase</h2>
          <h1 className="heading1">Sign in</h1>
          <p className="subtitle">
            Enter your credentials to access your account
          </p>
        </div>

        <form className="sign-in-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              className="input-field"
              id="email"
              name="email"
              placeholder=" "
              autoComplete="off"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email" className="input-label">
              Email Address
            </label>
            <i className="icon fas fa-envelope"></i>
          </div>

          <div className="input-group">
            <input
              type="password"
              className="input-field"
              id="password"
              name="password"
              placeholder=" "
              autoComplete="off"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <i className="icon fas fa-lock"></i>
          </div>

          <div className="button-row">
            <button type="submit" className="signbtn">
              {loading ? (
                <>
                  <CircularProgress size={16} sx={{ color: "#fff" }} />
                  <span style={{ padding: "2px" }}>Sign up...</span>{" "}
                </>
              ) : (
                "sign up"
              )}
            </button>
          </div>
        </form>

        <div className="contact-super-admin">
          <h1>Can't Login?</h1>
          <button>Contact Super Admin</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
