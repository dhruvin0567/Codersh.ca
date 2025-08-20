import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Field from "../../common/Field";
import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";

function MessageForm() {
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
    setIsSubmitting(true);

    try {
      const emailCheck = await verifyEmail(formData.email);

      if (!emailCheck || emailCheck.deliverability !== "DELIVERABLE") {
        toast.error(
          "The provided email is not deliverable. Please use a valid email address."
        );
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_USER,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Admin notification email
      const adminTemplateParams = {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN,
        adminTemplateParams,
        "xXD66OwtNN0ehOvWz"
      );

      toast.success("Message sent successfully!");
      await new Promise((res) => setTimeout(res, 500));
      reset();
      navigate("/thank-you");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Try again.");
      await new Promise((res) => setTimeout(res, 300));
    } finally {
      setIsSubmitting(false);
    }
  };

  const autofillStyles = {
    WebkitAppearance: "none",
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "#ccc",
    transition:
      "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s",
    fontSize: "18px",
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {/* Name Field */}
      <div className="aximo-form-field">
        <Field error={errors.name}>
          <div>
            <input
              {...register("name", {
                required: "Name is required.",
              })}
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              style={autofillStyles}
            />
          </div>
        </Field>
      </div>

      {/* Email Field */}
      <div className="aximo-form-field">
        <Field error={errors.email}>
          <div>
            <input
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address.",
                },
              })}
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
              style={autofillStyles}
            />
          </div>
        </Field>
      </div>

      {/* Mobile Number Field */}
      <div className="aximo-form-field">
        <Field error={errors.number}>
          <div>
            <input
              {...register("number", {
                required: "Mobile number is required.",
                pattern: {
                  value: /^[+0-9-]+$/,
                  message:
                    "Please enter a valid mobile number (only digits, +, and -).",
                },
                minLength: {
                  value: 8,
                  message: "Phone number must be at least 8 characters.",
                },
                maxLength: {
                  value: 15,
                  message: "Mobile number cannot exceed 15 characters.",
                },
              })}
              type="tel"
              name="number"
              placeholder="Your Phone Number"
              style={autofillStyles}
            />
          </div>
        </Field>
      </div>

      {/* Message Field */}
      <div className="aximo-form-field">
        <Field error={errors.message}>
          <div>
            <textarea
              {...register("message", {
                required: "Message is required.",
                maxLength: {
                  value: 1000,
                  message: "Message should not exceed 1000 characters.",
                },
              })}
              name="message"
              placeholder="Write Your Message Here..."
              style={{ fontSize: "18px", fontWeight: 400 }}
            ></textarea>
          </div>
        </Field>
      </div>

      {/* Submit Button */}
      <button id="aximo-submit-btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send message{" "}
            <span>
              <img src={ArrowRight3Img} alt="ArrowRight3Img" />
            </span>
          </>
        )}
      </button>
    </form>
  );
}

export default MessageForm;
