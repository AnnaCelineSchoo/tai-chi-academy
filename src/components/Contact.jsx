import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha"; // Import the reCAPTCHA component

function Contact() {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null); // Store reCAPTCHA token

  const form = useRef();

  // Handle reCAPTCHA token response
  const handleRecaptcha = (token) => {
    setRecaptchaToken(token); // Store the token when reCAPTCHA is completed
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phoneNumber = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!recaptchaToken)
      newErrors.recaptcha = "Please verify you're not a robot"; // Ensure reCAPTCHA is completed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send email with form data and reCAPTCHA token
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't submit the form if validation fails
    }

    // If no reCAPTCHA token, prevent submission
    if (!recaptchaToken) {
      console.error("No reCAPTCHA token found");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        console.log("SUCCESS!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setRecaptchaToken(null);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <>
      <section className="signup-section" id="signup">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">
                Schrijf je in voor je eerste gratis proefles!
              </h2>

              <form
                ref={form}
                className="form-signup"
                id="contactForm"
                onSubmit={sendEmail}
              >
                <div className="mb-3">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="naam..."
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    className="form-control"
                    id="emailAddress"
                    name="email"
                    type="email"
                    placeholder="email..."
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Telefoon..."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && (
                    <div className="text-danger">{errors.phoneNumber}</div>
                  )}
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Bericht..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="text-danger">{errors.message}</div>
                  )}
                </div>

                {/* Add reCAPTCHA widget */}
                <div className="mb-3">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Use your site key from .env
                    onChange={handleRecaptcha}
                  />
                  {errors.recaptcha && (
                    <div className="text-danger">{errors.recaptcha}</div>
                  )}
                </div>

                <div className="mt-4 mb-7">
                  <button
                    className="btn btn-primary btn-lg"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections as needed */}
    </>
  );
}

export default Contact;
