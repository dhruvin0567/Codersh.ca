import { useForm } from "react-hook-form";
import FadeInUp from "../../animation/FadeInUp";
import Field from "../../common/Field";

function CommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (formData) => {
    console.log("Submite Form Data = ", formData);
  };

  return (
    <FadeInUp className="comment-box">
      <h3>Leave a comments:</h3>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="comment-box-form">
          <div className="row">
            <div className="col-lg-6">
              <div className="comment-form">
                <Field error={errors.name}>
                  <input
                    {...register("name", { required: "Name is required." })}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </Field>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="comment-form">
                <Field error={errors.email}>
                  <input
                    {...register("email", { required: "Email is required." })}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address*"
                  />
                </Field>
              </div>
            </div>
          </div>
          <div className="comment-form">
            <textarea
              name="textarea"
              placeholder="Write us your comment"
            ></textarea>
          </div>
          <button id="comment-btn" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </FadeInUp>
  );
}

export default CommentForm;
