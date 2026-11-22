
import { test, expect } from '@playwright/test';

test('GET - Verify Booking API', async ({ request }) => {

  const response = await request.get(
    'https://restful-booker.herokuapp.com/booking'
  );

  // Verify Status Code
  expect(response.status()).toBe(200);

  // Get Response Body
  const responseBody = await response.json();

  // Verify Response
  expect(Array.isArray(responseBody)).toBeTruthy();

  console.log('Status Code:', response.status());
  console.log('Booking Records:', responseBody.length);

});
