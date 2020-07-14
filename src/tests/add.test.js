const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test("should greet with name", () => {
  expect(generateGreeting("Rinchen")).toEqual("Hello Rinchen");
});
