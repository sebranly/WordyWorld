// Internal
import { getResults, getResultsCount } from "../results";

describe("results helper", () => {
  it("exports the following helpers", () => {
    expect(typeof getResults).toBe("function");
    expect(typeof getResultsCount).toBe("function");
  });

  // TODO: add actual unit tests
});
