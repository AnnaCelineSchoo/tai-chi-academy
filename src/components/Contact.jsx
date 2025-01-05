import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function Contact() {
  const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID;
  const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY;
  const email = import.meta.env.VITE_EMAIL_ADDRESS;
  console.log("Service ID:", serviceId);
  console.log("Template ID:", templateId);
  console.log("Public Key:", publicKey);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        console.log("SUCCESS!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phoneNumber = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <section className="signup-section" id="signup">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">
                Schrijf je in voor je eerste gratis Tai Chi proefles bij
                Tiajiquan Academy in Apeldoorn!
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

                <div className="mt-4 mb-7">
                  <button
                    className="btn btn-primary btn-lg"
                    id="submitButton"
                    type="submit"
                  >
                    Versturen
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section mt-5">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mb-4">Onze Locatie</h2>

          <p className="text-black-50">
            De locatie voor de tai chi lessen is de sporthal bij de Mariannalaan
            19a, 7316 DS Apeldoorn. U kunt het pad inlopen bij het blauwe bord.
            Achter dit bord bevindt zich de gymzaal waar de tai chi lessen
            plaatsvindene. De foto hieronder laat dit zien.
          </p>
          <div className="map-container">
            <img
              className="contact-location-img mb-5"
              src="images/lessen/locatie tai chi academie taijiquan academy.png"
              alt="locatie tai chi academie taijiquan academy Mariannalaan 19a, 7316 DS Apeldoorn"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4525.98201457416!2d5.955960392312046!3d52.222211557816266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7c7c46f964c79%3A0x1385e3907c5916b8!2sTaijiquan%20Academy!5e0!3m2!1snl!2snl!4v1736060790258!5m2!1snl!2snl"
              width="100%"
              height="450"
              style={{
                border: 0,
                borderRadius: "10px",
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="contact-section bg-black">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Adres</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    Mariannalaan 19a, 7316 DS Apeldoorn
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <a href={`mailto:${email}`} id="email-link">
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Telefoon</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
