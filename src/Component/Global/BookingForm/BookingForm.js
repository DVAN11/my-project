import React, { useRef } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { UseCart } from '../../../Context/Context';
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import './BookingForm.css';

const BookingForm = () => {
  const { handleCloseModalBook, showModalBook } = UseCart();
  const form = useRef();
  
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      People: "",
      phoneNumber:"",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      message: Yup.string().required("Required"),
      People: Yup.string().required("Choose People"),
    }),
    onSubmit: async (values) => {
      console.log("Form values:", values);
      emailjs.sendForm('service_47mcgma', 'template_7zcj6cr', form.current, 'kpl6lT7dctcVfpDD7')
        .then((result) => {
          console.log(result.text);
          toast.success("Thanh cong", {
            position: "top-center",
            autoClose: 1000,
          });
          handleCloseModalBook();
        }, 
        (error) => {
          console.log(error.text);
          toast.error("Gửi thất bại", {
            position: "top-center",
            autoClose: 1000,
          });
        });
      },
  });

  return (
    <div>
      <Modal show={showModalBook} onHide={handleCloseModalBook}>
        <Modal.Header closeButton>
          <Modal.Title>Book a Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form ref={form} id="form-booking" onSubmit={formik.handleSubmit}>
            <input 
              type="text" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.user_name} 
              name="user_name" 
              placeholder="Your Name" 
            />
            {formik.touched.user_name && formik.errors.user_name ? <div className="error">{formik.errors.user_name}</div> : null}

            <input 
              type="email" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.user_email} 
              name="user_email" 
              placeholder="Your Email" 
            />
            {formik.touched.user_email && formik.errors.user_email ? <div className="error">{formik.errors.user_email}</div> : null}

            <div>
              <select name="People" value={formik.values.People} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="" label="Choose People" />
                <option value="1 people" label="1 people" />
                <option value="2 people" label="2 people" />
                <option value="4 people" label="4 people" />
                <option value="6 people" label="6 people" />
                <option value="8 people" label="8 people" />
                <option value="Over 8 people" label="Over 8 people" />
              </select>
              {formik.touched.People && formik.errors.People ? <div className="error">{formik.errors.People}</div> : null}
            </div>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
                placeholder="Enter your phone number"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && <div className="error">{formik.errors.phoneNumber}</div>}
            </Form.Group>
            <textarea 
              name="message" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.message} 
              placeholder="Your Message" 
            />
            {formik.touched.message && formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}    

            <button type="submit" className="s_button">
                CONFIRM
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookingForm;
