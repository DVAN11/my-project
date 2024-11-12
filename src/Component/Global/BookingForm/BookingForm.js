import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { UseCart } from '../../../Context/Context';
import './BookingForm.css';

const BookingForm = () => {
  const { handleCloseModalBook, showModalBook } = UseCart();

  return (
    <div>
      <Modal show={showModalBook} onHide={handleCloseModalBook}>
        <Modal.Header closeButton>
          <Modal.Title>Book a Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNumberOfPeople">
              <Form.Label>Number of People</Form.Label>
              <Form.Control type="number" placeholder="Enter number of people" />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Booking Date</Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>

            <Form.Group controlId="formDeposit">
              <Form.Label>Deposit Percentage</Form.Label>
              <Form.Control type="number" placeholder="Enter deposit percentage" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookingForm;
