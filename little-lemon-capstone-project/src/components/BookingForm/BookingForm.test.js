import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders BookingForm component', () => {
  const mockOnFormSubmit = jest.fn();
  const mockDispatchOnDateChange = jest.fn();
  const availableTimes = ["12:00", "13:00", "14:00"];

  render(
    <BookingForm
      onFormSubmit={mockOnFormSubmit}
      isFormSubmitted={false}
      availableTimes={availableTimes}
      dispatchOnDateChange={mockDispatchOnDateChange}
    />
  );

  // Find the input associated with the "Date" label
  const dateInput = screen.getByLabelText(/Date/i);

  // Check that the input element is in the document
  expect(dateInput).toBeInTheDocument();
});
