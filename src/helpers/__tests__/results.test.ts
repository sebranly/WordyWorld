// Internal
import { getResults, getResultsCount } from "../results";

describe("results helpers", () => {
  it("exports the following helpers", () => {
    expect(typeof getResults).toBe("function");
    expect(typeof getResultsCount).toBe("function");
  });

  // TODO: add actual unit tests
});
