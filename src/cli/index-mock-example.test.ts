import { expect, jest, beforeAll, beforeEach, afterAll, it } from "@jest/globals";

jest.unstable_mockModule("../lib/index.js", () => ({
  printArray: jest.fn(() => {}),
}));
const { run } = await import("./index.js");
const { printArray } = jest.mocked(await import("../lib/index.js"));

let consoleLogSpy: jest.SpiedFunction<typeof console.log>;
let consoleErrorSpy: jest.SpiedFunction<typeof console.error>;

beforeAll(async () => {
  consoleLogSpy = jest.spyOn(console, "log");
  consoleErrorSpy = jest.spyOn(console, "error");
  consoleLogSpy.mockImplementation(() => {});
  consoleErrorSpy.mockImplementation(() => {});
});

beforeEach(() => {
  consoleLogSpy.mockReset();
  consoleErrorSpy.mockReset();
});

afterAll(() => {
  consoleLogSpy.mockRestore();
  consoleErrorSpy.mockRestore();
});

it("Returns -1 when no arguments are passed", () => {
  const result = run([]);

  expect(printArray).not.toHaveBeenCalledWith([]);
  expect(result).toBe(-1);
});

it("Returns 0 when an argument is provided", () => {
  const result = run(["asdf"]);

  expect(printArray).toHaveBeenCalledWith(["asdf"]);
  expect(result).toBe(0);
});
