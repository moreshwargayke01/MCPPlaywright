
export const testData = {
  url: 'https://www.saucedemo.com',

  validUser: {
    username: 'standard_user',
    password: 'secret_sauce'
  },

  customer: {
    firstName: 'Moreshwar',
    lastName: 'Gayke',
    postalCode: '411001'
  },

  products: [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light'
  ],

  loginScenarios: [
    {
      username: 'standard_user',
      password: 'secret_sauce',
      expectedMessage: '',
      scenario: 'Valid Login'
    },
    {
      username: 'wrong_user',
      password: 'secret_sauce',
      expectedMessage: 'Username and password do not match',
      scenario: 'Invalid Username'
    },
    {
      username: 'standard_user',
      password: 'wrong_password',
      expectedMessage: 'Username and password do not match',
      scenario: 'Invalid Password'
    },
    {
      username: 'locked_out_user',
      password: 'secret_sauce',
      expectedMessage: 'Sorry, this user has been locked out',
      scenario: 'Locked Out User'
    }
  ]
};
