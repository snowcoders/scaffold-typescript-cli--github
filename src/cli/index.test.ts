import { expect, jest, describe, beforeAll, beforeEach, afterAll, it } from "@jest/globals";
import path from "path";
import { run } from "./index";

describe(path.relative(process.cwd(), __dirname), () => {
  let consoleLogSpy: jest.SpiedFunction<typeof console.log>;
  let consoleErrorSpy: jest.SpiedFunction<typeof console.error>;

  beforeAll(() => {
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
    expect(run([])).toBe(-1);
  });

  it("Returns 0 when an argument is provided", () => {
    expect(run(["asdf"])).toBe(0);
  });
});
