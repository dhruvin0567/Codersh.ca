import { useState } from "react";
import { usePassword } from "../../context/authContext/PasswordContext";
import { Link, useNavigate } from "react-router-dom";
import PopUpLogo from "../../assets/images/logo/codersh-horizontal-logo-black.webp";

const PasswordPrompt = () => {
    const { verifyPassword } = usePassword();
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!verifyPassword(password)) {
            setError("Incorrect password. Try again.");
        } else {
            setError("");
            // Proceed with success action
        }
    };

    const handleClose = () => {
        navigate("/");
    };

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
            style={{
                zIndex: 1055,
                backdropFilter: "blur(10px)",  // Apply the blur effect to the background
                WebkitBackdropFilter: "blur(10px)",  // For Safari support
            }}
        >
            <div className="card shadow-lg m-2 m-md-0 " style={{ width: "100%", maxWidth: "500px", borderRadius: "1.5rem" }}>
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Enter Password</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="cart-logo d-flex align-items-center justify-content-center pe-3 pt-4 pt-md-5"><img src={PopUpLogo} alt="Logo IMg" style={{ maxWidth: "300px", width: "100%" }} /></div>
                    <div className="card-body px-4 py-4">
                        <div className="m-0 m-md-3 position-relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                // className={`form-control pe-5 ${error ? "is-invalid" : ""}`}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {/* Eye icon */}
                            <span
                                role="button"
                                className="position-absolute top-50 translate-middle-y text-muted"
                                style={{
                                    cursor: "pointer",
                                    fontSize: "1.5rem",
                                    right: "1.25rem", // spacing from edge
                                    top: "0",
                                    bottom: "-0.7rem",
                                    zIndex: 10,
                                }}
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                            </span>
                            {/* Error message with fixed space */}
                            <div
                                className="invalid-feedback"
                                style={{
                                    display: "block",
                                    minHeight: "20px",
                                    paddingLeft: ".5rem"
                                }}
                            >
                                {error}
                            </div>
                        </div>
                        <div className="mb-3 d-flex justify-content-center">
                            <button type="submit" id="aximo-main-btn" className="btn btn-primary w-100 popupbtn-mobile" >
                                Submit
                            </button>
                        </div>

                        <p className="fs-6 text-center text-dark">
                            Don’t have access?{" "}
                            <Link to="/contact-us" className="text-decoration-underline text-dark fw-bold">
                                Request it here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordPrompt;
