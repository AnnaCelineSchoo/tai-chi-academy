import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function Contact() {
  const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID;
  const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY;
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

      <section className="map-section mt-5">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mb-4">Onze Locatie</h2>

          <p className="text-black-50">
            U kunt het pad inlopen bij het blauwe bord. Achter dit bord bevindt
            zich de gymzaal waar de taijiquan lessen plaatsvindene. De foto
            hieronder laat dit zien.
          </p>
          <div className="map-container">
            <img
              className="contact-location-img mb-5"
              src="https://shaolin-vechtkunst.nl/wp-content/uploads/2013/08/Schermafbeelding-2014-09-30-om-20.59.25.png"
              alt=""
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9776.66198371177!2d5.958902!3d52.222211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4a4945fc5402545!2sVechtsport%3A+Shaolin+Kung+Fu+Apeldoorn!5e0!3m2!1snl!2snl!4v1412235104744"
              width="100%"
              height="450"
              frameBorder="0"
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

      <section class="contact-section bg-black">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Address</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">
                    Mariannalaan 19a, 7316 DS Apeldoorn
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-envelope text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Email</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">
                    <Link href="#!">addyoutemail@yourdomain.com</Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Phone</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">add your phone</div>
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
