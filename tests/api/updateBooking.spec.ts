
import { test, expect } from '@playwright/test';

test('PUT - Update Booking', async ({ request }) => {

  // 1. Create Authentication Token
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

  // 3. Update Booking
  const updateResponse = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`,
        Accept: 'application/json'
      },
      data: {
        firstname: 'Moreshwar',
        lastname: 'Gayke',
        totalprice: 2000,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-12-10',
          checkout: '2026-12-15'
        },
        additionalneeds: 'Lunch'
      }
    }
  );

  expect(updateResponse.status()).toBe(200);

  const updateBody = await updateResponse.json();

  expect(updateBody.totalprice).toBe(2000);
  expect(updateBody.additionalneeds).toBe('Lunch');

  console.log('Updated Booking ID:', bookingId);
  console.log('Updated Price:', updateBody.totalprice);
  console.log('Updated Needs:', updateBody.additionalneeds);

});
