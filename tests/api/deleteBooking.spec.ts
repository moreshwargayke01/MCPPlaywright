
import { test, expect } from '@playwright/test';

test('DELETE - Delete Booking', async ({ request }) => {

  // 1. Authentication
  const authResponse = await request.post(
    'https://restful-booker.herokuapp.com/auth',
    {
      data: {
        username: 'admin',
        password: 'password123'
      }
    }
  );

  expect(authResponse.status()).toBe(200);

  const authBody = await authResponse.json();
  const token = authBody.token;

  // 2. Create Booking
  const createResponse = await request.post(
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

  expect(createResponse.status()).toBe(200);

  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;

  // 3. Delete Booking
  const deleteResponse = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`
      }
    }
  );

  expect(deleteResponse.status()).toBe(201);

  // 4. Verify Booking Deleted
  const getResponse = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`
  );

  expect(getResponse.status()).toBe(404);

  console.log('Deleted Booking ID:', bookingId);
  console.log('Delete Status:', deleteResponse.status());

});
