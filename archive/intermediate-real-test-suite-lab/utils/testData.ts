export const users = {
  valid: {
    username: process.env.VALID_USERNAME!,
    password: process.env.VALID_PASSWORD!,
  },
  invalid: {
    username: process.env.INVALID_USERNAME!,
    password: process.env.INVALID_PASSWORD!,
  },
};

export const checkoutData = {
  validCustomer: {
    firstName: 'Test',
    lastName: 'User',
    postalCode: '11201',
  },
  missingLastNameCustomer: {
    firstName: 'Test',
    lastName: '',
    postalCode: '11201',
  },
};

export const expectedProducts = [
  'Sauce Labs Backpack',
  'Sauce Labs Bike Light',
  'Sauce Labs Bolt T-Shirt',
  'Sauce Labs Fleece Jacket',
  'Sauce Labs Onesie',
  'Test.allTheThings() T-Shirt (Red)',
];

export const knownAccessibilityIssues = {
  sauceDemoSortDropdownMissingName: 'select-name',
};