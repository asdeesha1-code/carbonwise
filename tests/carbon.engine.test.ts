import { describe, expect, it } from "vitest";
import { calculateEmission, parseActivity, recommendations } from "../lib/carbon";

describe("CarbonWise emission engine", () => {
  it("parses a natural-language bus activity", () => {
    const parsed = parseActivity("15 km by bus");
    expect(parsed.category).toBe("transport");
    expect(parsed.activityType).toBe("bus");
    expect(parsed.quantity).toBe(15);
    expect(parsed.estimatedCO2eLow).toBeLessThan(parsed.estimatedCO2eHigh);
  });

  it("keeps every estimate as a range", () => {
    const result = calculateEmission({ category: "food", activityType: "plant meal", quantity: 1, unit: "serving" });
    expect(result.estimatedCO2eLow).toBeGreaterThan(0);
    expect(result.estimatedCO2eHigh).toBeGreaterThan(result.estimatedCO2eLow);
    expect(result.source.length).toBeGreaterThan(0);
  });

  it("returns exactly three ranked actions", () => {
    const result = recommendations([]);
    expect(result).toHaveLength(3);
    expect(result.map((item) => item.rank)).toEqual([1, 2, 3]);
  });
});
