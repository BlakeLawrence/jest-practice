import { sum } from "./sum.js";

describe("Sum function", () => {
  it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
  it("Object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

//basic truthy testing concept
describe("truthy or falsy tests", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
  });
});

// basic number testing
describe("numbers testing", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeLessThan(5);
    expect(value).toBeGreaterThanOrEqual(4);
  });
});

describe("adding floats", () => {
  it("0.1 + 0.2", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });
});

// Strings
describe("String tests", () => {
  it("there is no I in team", () => {
    expect("team").not.toMatch(/i/);
  });
});

// Arrays
describe("Array tests", () => {
  it("Milk should appear in shopping list array", () => {
    const shoppingList = ["paper Towels", "Milk", "Bread", "Apples", "Beers"];
    expect(shoppingList).toContain("Milk");
  });
});

function compilesAndroidCode() {
  throw new Error("You are using the wrong JDK!!!");
}

// Exceptions
describe("Exceptions", () => {
  it("compiling android goes as expected", () => {
    expect(() => compilesAndroidCode()).toThrow(Error);
    expect(() => compilesAndroidCode()).toThrow(
      "You are using the wrong JDK!!!"
    );
  });
});
