const { Team, canIterate } = require('../team');

test('canIterate function', () => {
  expect(canIterate(new Map())).toBe(true);
  expect(canIterate(new Set())).toBe(true);
  expect(canIterate(null)).toBe(false);
  expect(canIterate(10)).toBe(false);
  expect(canIterate("Netology")).toBe(true);
});