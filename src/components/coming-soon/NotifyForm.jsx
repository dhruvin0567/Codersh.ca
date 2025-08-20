import { useForm } from "react-hook-form";
import FadeInUp from "../animation/FadeInUp";
import Field from "../common/Field";
function NotifyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (formData) => {
    console.log("Submite Form Data = ", formData);
  };

  return (
    <FadeInUp>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="aximo-coming-newsletter">
          <Field error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </Field>

          <button type="submit" id="aximo-notified-btn">
            Get Notified
          </button>
          <p>
            We do not share your information with any third party & no spam*
          </p>
        </div>
      </form>
    </FadeInUp>
  );
}

export default NotifyForm;
