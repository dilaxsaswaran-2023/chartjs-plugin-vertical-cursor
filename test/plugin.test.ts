import { describe, it, expect } from "vitest";
import { VerticalCursorPlugin } from "../src/plugin";

describe("VerticalCursorPlugin", () => {
  it("has correct id", () => {
    expect(VerticalCursorPlugin.id).toBe("verticalCursor");
  });
});
