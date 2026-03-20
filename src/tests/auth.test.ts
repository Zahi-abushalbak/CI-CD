import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null when no authorization", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when wrong scheme", () => {
    expect(getAPIKey({ authorization: "Bearer mytoken" })).toBeNull();
  });

  test("returns the API key when valid", () => {
    expect(getAPIKey({ authorization: "ApiKey mySecretKey" })).toBe("mySecretKey");
  });
});
