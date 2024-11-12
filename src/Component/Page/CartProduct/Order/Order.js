import React, { useRef } from "react";
import "./Order.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from 'emailjs-com';

const Order = () => {
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      deliveryMethod: "delivery",
      user_name: "",
      user_email: "",
      message: "",
      city: "",
      district: "",
      street_address: "",
      payment_method: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().when("deliveryMethod", {
        is: "delivery",
        then: Yup.string().required("Required"),
        otherwise: Yup.string().notRequired(),
      }),
      user_email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
      city: Yup.string().when("deliveryMethod", {
        is: "delivery",
        then: Yup.string().required("Please select a city"),
      }),
      district: Yup.string().when("deliveryMethod", {
        is: "delivery",
        then: Yup.string().required("Please select a district"),
      }),
      street_address: Yup.string().when("deliveryMethod", {
        is: "delivery",
        then: Yup.string().required("Please enter your street address"),
      }),
      payment_method: Yup.string().when("deliveryMethod", {
        is: "delivery",
        then: Yup.string().required("Please select a payment method"),
      }),
    }),
    onSubmit: async (values) => {
      console.log(values);

      emailjs.sendForm('service_47mcgma', 'template_7zcj6cr', form.current, 'kpl6lT7dctcVfpDD7')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    },
  });

  const handleDeliveryChange = (event) => {
    const selectedMethod = event.target.value;
    formik.setFieldValue("deliveryMethod", selectedMethod);

    if (selectedMethod === "pickup") {
      formik.setFieldValue("city", "");
      formik.setFieldValue("district", "");
      formik.setFieldValue("street_address", "");
      formik.setFieldValue("payment_method", "");
    }
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    formik.setFieldValue("city", selectedCity);

    if (selectedCity === "TPHCM") {
      formik.setFieldValue("districtOptions", ["District 1", "District 2", "District 3"]);
    } else if (selectedCity === "Vinh Long") {
      formik.setFieldValue("districtOptions", ["Long Ho", "Tam Binh", "Tra On"]);
    } else {
      formik.setFieldValue("districtOptions", []);
    }
    formik.setFieldValue("district", "");
  };

  return (
    <form ref={form} id="form-order" onSubmit={formik.handleSubmit}>
      <div>
        <h3>Select delivery method:</h3>
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="delivery"
            checked={formik.values.deliveryMethod === 'delivery'}
            onChange={handleDeliveryChange}
          />
          Delivery
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="pickup"
            checked={formik.values.deliveryMethod === 'pickup'}
            onChange={handleDeliveryChange}
          />
          Pickup
        </label>
      </div>

      {formik.values.deliveryMethod === 'delivery' && (
        <>
          <div>
            <label>City</label>
            <select
              name="city"
              onChange={handleCityChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            >
              <option value="" label="Select city" />
              <option value="TPHCM" label="TPHCM" />
              <option value="Vinh Long" label="Vinh Long" />
            </select>
            {formik.touched.city && formik.errors.city ? (
              <div className="error">{formik.errors.city}</div>
            ) : null}
          </div>

          <div>
            <label>District</label>
            <select
              name="district"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.district}
            >
              <option value="" label="Select district" />
              {formik.values.districtOptions?.map((district) => (
                <option key={district} value={district} label={district} />
              ))}
            </select>
            {formik.touched.district && formik.errors.district ? (
              <div className="error">{formik.errors.district}</div>
            ) : null}
          </div>

          <div>
            <label>Street Address</label>
            <input
              type="text"
              name="street_address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street_address}
              placeholder="Your street address"
            />
            {formik.touched.street_address && formik.errors.street_address ? (
              <div className="error">{formik.errors.street_address}</div>
            ) : null}
          </div>

          <div>
            <label>Payment Method</label>
            <select
              name="payment_method"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.payment_method}
            >
              <option value="" label="Select payment method" />
              <option value="Credit Card" label="Credit Card" />
              <option value="Cash on Delivery" label="Cash on Delivery" />
              <option value="Bank Transfer" label="Bank Transfer" />
            </select>
            {formik.touched.payment_method && formik.errors.payment_method ? (
              <div className="error">{formik.errors.payment_method}</div>
            ) : null}
          </div>
        </>
      )}

      {/* Common input fields */}
      <input
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.user_name}
        name="user_name"
        placeholder="Your Name"
      />
      {formik.touched.user_name && formik.errors.user_name && formik.values.deliveryMethod === 'delivery' ? (
        <div className="error">{formik.errors.user_name}</div>
      ) : null}

      <input
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.user_email}
        name="user_email"
        placeholder="Your Email"
      />
      {formik.touched.user_email && formik.errors.user_email ? <div className="error">{formik.errors.user_email}</div> : null}

      <textarea
        name="message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        placeholder="Your Message"
      />
      {formik.touched.message && formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}
      <button type="submit" className="s_button"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ORDER NOW</button>
    </form>
  );
};

export default Order;
