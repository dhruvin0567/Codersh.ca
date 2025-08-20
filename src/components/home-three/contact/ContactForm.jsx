import { useForm } from "react-hook-form";
import Field from "../../common/Field";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (formData) => {
    console.log("Submite Form Data = ", formData);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="aximo-form-field2">
        <Field error={errors.fname}>
          <input
            {...register("fname", { required: "Full Name is required." })}
            type="text"
            name="fname"
            id="fname"
            placeholder="Enter Full Name"
          />
        </Field>
      </div>
      <div className="aximo-form-field2">
        <Field error={errors.email}>
          <input
            {...register("email", { required: "Email is required." })}
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
          />
        </Field>
      </div>
      <div className="aximo-form-field2">
        <textarea
          name="textarea"
          placeholder="Write us your questions"
        ></textarea>
      </div>
      <button id="aximo-submit-btn2" type="submit">
        <span className="aximo-label-up">Submit now</span>
        <span className="aximo-label-up">Submit now</span>
      </button>
    </form>
  );
}

export default ContactForm;
