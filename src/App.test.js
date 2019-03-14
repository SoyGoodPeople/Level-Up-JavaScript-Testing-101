import { total } from "./App";

const add = jest.fn(() => 3);

// Unit test
// It only test one thing
test("add", () => {
  // const value = add(1,2);
  // expect(value).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add(5, 2)).toBe(3);
});


// Integration test
// Because it's about test code working together
// test("total", () => {
//   expect(total(5, 20)).toBe('$25');
// });
