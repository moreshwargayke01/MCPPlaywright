
import { test, expect } from '@playwright/test';

test('POST - Create New Booking', async ({ request }) => {

  const response = await request.post(
    'https://restful-booker.herokuapp.com/booking',
    {
      data: {
        firstname: 'Moreshwar',
        lastname: 'Gayke',
        totalprice: 1500,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-12-01',
          checkout: '2026-12-05'
        },
        additionalneeds: 'Breakfast'
      }
    }
  );

  // Status Code Validation
  expect(response.status()).toBe(200);

  // Response Body
  const responseBody = await response.json();

  // Validate Booking ID
  expect(responseBody.bookingid).toBeTruthy();

  // Validate Customer Details
  expect(responseBody.booking.firstname).toBe('Moreshwar');
  expect(responseBody.booking.lastname).toBe('Gayke');

  console.log('Status:', response.status());
  console.log('Created Booking ID:', responseBody.bookingid);
  console.log('Booking Details:', responseBody.booking);

});
