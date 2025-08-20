import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Field from "../../common/Field";
import SingleCSdetailsStatic from "./SingleCSdetailsStatic";

function SingleCaseStudy() {
  const { slug } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const verifyEmail = async (email) => {
    try {
      const response = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${
          import.meta.env.VITE_ABSTRACT_API_KEY
        }&email=${email}`
      );

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Email validation error:", err);
      return null;
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData) => {
    console.log("Submitted Form Data =", formData);
    setIsSubmitting(true);

    try {
      const emailCheck = await verifyEmail(formData.email);

      if (!emailCheck || emailCheck.deliverability !== "DELIVERABLE") {
        toast.error(
          "The provided email is not deliverable. Please use a valid email address."
        );
        await new Promise((res) => setTimeout(res, 300));
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_USER,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN,
        {
          name: formData.name,
          email: formData.email,
          number: formData.number,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      await new Promise((res) => setTimeout(res, 300));
      reset();
      navigate("/thank-you");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
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
          <div className="col-xl-8">
            <SingleCSdetailsStatic slug={slug} />
          </div>
          <div className="col-xl-4">
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
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
                          minLength: {
                            value: 8,
                            message:
                              "Phone number must be at least 8 characters.",
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
                          maxLength: {
                            value: 1000,
                            message: "Message must not exceed 1000 characters.",
                          },
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
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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

export default SingleCaseStudy;
