import { unitTestExample } from "./unit-test-example";

describe("Example unit test", () => {
  it("should return 3", () => {
    const value = unitTestExample();

    expect(value).toBe(3);
  });
});
