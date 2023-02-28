import {
  assert,
  describe,
  test,
  clearStore,
  afterAll,
} from "matchstick-as/assembly/index";

describe("Describe entity assertions", () => {
  afterAll(() => {
    clearStore();
  });

  test("the truth", () => {
    assert.assertTrue(true);
  });
});
