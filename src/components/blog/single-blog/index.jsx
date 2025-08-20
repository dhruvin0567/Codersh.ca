import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import Field from "../../common/Field";
import BlogDetails from "./BlogDetails";

function SingleBlog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    console.log("Submitted Form Data =", formData);

    try {
      const response = await fetch(
        "https://projects.codersh.com/aximo/wp-json/wp/v2/form-submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully:", result);
        reset();

        navigate("/thank-you");
      } else {
        console.error("Form submission failed:", result);
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const autofillStyles = {
    fontSize: "18px",
    WebkitAppearance: "none",
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "#000",
    transition:
      "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s",
  };

  return (
    <div className="section post-details-page aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-8">
            <BlogDetails />
          </div>
          <div className="col-12 col-xl-4">
            <div className="right-sidebar">
              <div className="px-2 mb-3">
                <h3>Let's Connect!</h3>
              </div>
              <div className="aximo-main-form">
                <form onSubmit={handleSubmit(submitForm)}>
                  {/* Name Field */}
                  <div className="aximo-main-field">
                    <Field label="Your Name" error={errors.name}>
                      <input
                        {...register("name", {
                          required: "Name is required.",
                        })}
                        type="text"
                        name="name"
                        id="name"
                        className="form-input"
                        style={autofillStyles}
                      />
                    </Field>
                  </div>

                  {/* Email Field */}
                  <div className="aximo-main-field">
                    <Field label="Enter email address" error={errors.email}>
                      <input
                        {...register("email", {
                          required: "Email is required.",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Please enter a valid email address.",
                          },
                        })}
                        type="email"
                        name="email"
                        id="email"
                        className="form-input"
                        style={autofillStyles}
                      />
                    </Field>
                  </div>

                  {/* Phone Number Field */}
                  <div className="aximo-main-field">
                    <Field label="Enter Phone Number" error={errors.number}>
                      <input
                        {...register("number", {
                          required: "Phone number is required.",
                          pattern: {
                            value: /^[0-9+()-\s]+$/,
                            message: "Please enter a valid phone number.",
                          },
                          maxLength: {
                            value: 15,
                            message:
                              "Phone number cannot exceed 15 characters.",
                          },
                        })}
                        type="tel"
                        name="number"
                        id="number"
                        className="form-input"
                        style={autofillStyles}
                      />
                    </Field>
                  </div>

                  {/* Message Field */}
                  <div className="aximo-main-field">
                    <Field
                      label="Write your message here..."
                      error={errors.message}
                    >
                      <textarea
                        {...register("message", {
                          required: "Message is required.",
                        })}
                        name="message"
                        className="input-textarea"
                        style={{ fontSize: "18px" }}
                      ></textarea>
                    </Field>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="aximo-main-btn"
                    type="submit"
                    className="form-input"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
