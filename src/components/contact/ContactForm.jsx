import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Star2Img from "../../assets/images/v1/star2.webp";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
import ContactVideo from "../../assets/images/Videos/reel.mp4";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Pause video on outside click
  useEffect(() => {
    const handleBodyClick = (e) => {
      if (videoRef.current && !videoRef.current.contains(e.target)) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("click", handleBodyClick);
    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate(); // Initialize navigate function

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

  // Submit form --wordpress
  // const submitForm = async (formData) => {
  // 	console.log("Form Data: ", formData);

  // 	try {
  // 		const response = await fetch("https://projects.codersh.com/aximo/wp-json/wp/v2/form-submit", {
  // 			method: "POST",
  // 			headers: {
  // 				"Content-Type": "application/json",
  // 			},
  // 			body: JSON.stringify(formData),
  // 		});

  // 		const result = await response.json();

  // 		if (response.ok) {
  // 			console.log("Form submitted successfully:", result);
  // 			// alert("Thank you! Your form has been submitted.");
  // 			reset(); // Reset the form fields after successful submission

  // 			// Navigate to the Thank You page
  // 			navigate("/thank-you");  // Use React Router to navigate to the Thank You page

  // 		} else {
  // 			console.error("Form submission failed:", result);
  // 			alert("Form submission failed. Please try again.");
  // 		}
  // 	} catch (error) {
  // 		console.error("Error submitting form:", error);
  // 		alert("An error occurred. Please try again.");
  // 	}
  // };

  // Submit form with EmailJS

  const submitForm = async (formData) => {
    console.log("Form Data: ", formData);
    setIsSubmitting(true);

    try {
      // Check email validity
      const emailCheck = await verifyEmail(formData.email);

      if (!emailCheck || emailCheck.deliverability !== "DELIVERABLE") {
        toast.error(
          "The provided email is not deliverable. Please use a valid email address."
        );
        setIsSubmitting(false);
        return;
      }

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, //  EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_USER, // user-facing template ID
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY //  public API key
      );

      console.log("Email sent successfully:", result.text);
      toast.success("Email sent successfully!");
      await new Promise((res) => setTimeout(res, 500));

      // Send notification to admin
      const adminTemplateParams = {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        message: formData.message,
      };

      const adminResponse = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, //  EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN, // user-facing template ID
        adminTemplateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY //  public API key,
      );
      console.log("Admin Params:", adminTemplateParams);
      console.log("Admin notification sent:", adminResponse.text);

      reset(); // Reset form fields
      navigate("/thank-you"); // Navigate to Thank You page
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please try again later.");
      await new Promise((res) => setTimeout(res, 300));
    } finally {
      setIsSubmitting(false);
    }
  };

  const autofillStyles = {
    fontSize: "18px",
    WebkitAppearance: "none",
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "#000", // Set text color to white
    transition:
      "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s", // Transition for color as well
  };

  return (
    <div className="section aximo-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-section-title">
              <h2>
                <span className="aximo-title-animation">
                  Contact us for
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Star" />
                  </span>
                </span>
                <br />
                personal experience
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 order-lg-2 Video-Column">
            <FadeInRight className="aximo-contact-thumb">
              <div
                className="video-wrapper"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
                style={{ position: "relative" }}
              >
                <video
                  // poster={VideoPoster}
                  ref={videoRef}
                  loop
                  playsInline
                  className="contact-video"
                  src={ContactVideo}
                  preload="metadata"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                  alt="User Review Video"
                >
                  Your browser does not support the video tag.
                </video>

                {showControls && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent click from bubbling to body
                      handlePlayPause();
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(0,0,0,0.6)",
                      border: "none",
                      color: "#fff",
                      padding: "10px 20px",
                      borderRadius: "50px",
                      cursor: "pointer",
                    }}
                  >
                    {isPlaying ? (
                      <i className="fa-solid fa-pause" />
                    ) : (
                      <i className="fa-solid fa-play" />
                    )}
                  </button>
                )}
              </div>
            </FadeInRight>
          </div>
          <div className="col-lg-7">
            <div className="aximo-main-form">
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="aximo-main-field">
                  <Field label="Your Name" error={errors.name}>
                    <input
                      {...register("name", { required: "Name is required." })}
                      type="text"
                      name="name"
                      id="name"
                      style={autofillStyles}
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Enter Email Address" error={errors.email}>
                    <input
                      {...register("email", {
                        required: "Email is required.",
                        pattern: {
                          // value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 	previous validation
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                      type="email"
                      name="email"
                      id="email"
                      style={autofillStyles}
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Phone Number" error={errors.number}>
                    <input
                      {...register("number", {
                        required: "Phone number is required.",
                        pattern: {
                          value: /^[0-9+\-()\s]+$/,
                          message:
                            "Phone number can only contain numbers, spaces, +, and -.",
                        },
                        minLength: {
                          value: 8,
                          message:
                            "Phone number must be at least 8 characters.",
                        },
                        maxLength: {
                          value: 15,
                          message: "Phone number cannot exceed 15 characters.",
                        },
                      })}
                      //   placeholder="+91 012346789"
                      type="tel"
                      name="number"
                      id="number"
                      style={autofillStyles}
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <label>Write your message here...</label>
                  <Field label="message" error={errors.message}>
                    <textarea
                      {...register("message", {
                        required: "Message is required.",
                        maxLength: {
                          value: 1000,
                          message: "Message should not exceed 1000 characters.",
                        },
                      })}
                      name="message"
                      style={{ fontSize: "18px", fontWeight: 400 }}
                    ></textarea>
                  </Field>
                </div>
                <button
                  id="aximo-main-btn"
                  type="submit"
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
  );
}

export default ContactForm;
