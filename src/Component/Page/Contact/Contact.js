import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
  const [location, setLocation] = useState('hcmc');
  const form = useRef();
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log("Form values:", values);
      emailjs.sendForm('service_47mcgma', 'template_7zcj6cr', form.current, 'kpl6lT7dctcVfpDD7')
        .then((result) => {
          console.log(result.text);
          toast.success("Success", {
            position: "top-center",
            autoClose: 1000,
          });
        }, 
        (error) => {
          console.log(error.text);
          toast.error("Sending failed", {
            position: "top-center",
            autoClose: 1000,
          });
        });
      },
  });

  return (
    <div className="contact-page-container">
      <div className="contact-page-banner">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Reach out to us!</p>
      </div>

      <Container>
        <section className="contact-page-info">
          <Row>
            <Col md={6} className="contact-info-item">
              <h2>Our Locations</h2>
              <div className="contact-location-selection">
                <Button
                  variant={location === 'hcmc' ? 'primary' : 'outline-primary'}
                  onClick={() => setLocation('hcmc')}
                >
                  Hồ Chí Minh
                </Button>
                <Button 
                  variant={location === 'vinhlong' ? 'primary' : 'outline-primary'}
                  onClick={() => setLocation('vinhlong')}
                >
                  Vĩnh Long
                </Button>
              </div>

              {location === 'hcmc' ? (
                <div className="contact-location-details">
                  <h3>Hồ Chí Minh</h3>
                  <p>123 Nguyen Thi Minh Khai, District 3, Ho Chi Minh City, Vietnam</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.479765377909!2d106.73645577573538!3d10.697429660644472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31753ab3089291b1%3A0xe0b8056a2c373391!2zMTgwNiBIdeG7s25oIFThuqVuIFBow6F0LCBUVC4gTmjDoCBCw6gsIE5ow6AgQsOoLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1731499140353!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="contact-location-map"
                  ></iframe>              
                </div>
              ) : (
                <div className="contact-location-details">
                  <h3>Vĩnh Long</h3>
                  <p>456 Le Duan, Vinh Long City, Vietnam</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.1908340307846!2d105.97515877573201!3d10.246187668748727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a9df5e8e237af%3A0x51dcc880558ed77e!2sVincom%20Plaza%20V%C4%A9nh%20Long!5e0!3m2!1svi!2s!4v1731500460135!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="contact-location-map"
                  ></iframe>
                </div>
              )}
            </Col>

            <Col md={6} className="contact-page-form">
              <h2>Contact Us</h2>
              <form ref={form} id="form-contact" onSubmit={formik.handleSubmit}>
                <input 
                  type="text" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  value={formik.values.user_name} 
                  name="user_name" 
                  placeholder="Your Name" 
                />
                {formik.touched.user_name && formik.errors.user_name ? <div className="contact-error">{formik.errors.user_name}</div> : null}

                <input 
                  type="email" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  value={formik.values.user_email} 
                  name="user_email" 
                  placeholder="Your Email" 
                />
                {formik.touched.user_email && formik.errors.user_email ? <div className="contact-error">{formik.errors.user_email}</div> : null}
                <textarea 
                  name="message" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  value={formik.values.message} 
                  placeholder="Your Message" 
                />
                {formik.touched.message && formik.errors.message ? <div className="contact-error">{formik.errors.message}</div> : null}    

                <button type="submit" className="contact-submit-button">
                  SEND
                </button>
              </form>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Contact;
