import { price } from "../src/services/rentalService/getPrice";

describe("Price", () => {
  it("Should return total (premiumFee * days) if film type is (new)", () => {
    const result = price("new", 5);
    expect(result).toBe(200);
  });

  it("Should return total (regularFee of one day ) if film type is (regular) & days <= 3", () => {
    const result = price("regular", 3);
    expect(result).toBe(30);
  });

  it("Should return total (regularFee of one day ) if film type is (regular) & days <= 3", () => {
    const result = price("regular", 2);
    expect(result).toBe(30);
  });

  it("Should return total (first 3 days of 1 regularFee + regularFee * extra days) if film type is (regular)", () => {
    const result = price("regular", 4);
    expect(result).toBe(60);
  });

  it("Should return total (regularFee of one day ) if film type is (old) & days <= 5", () => {
    const result = price("old", 3);
    expect(result).toBe(30);
  });

  it("Should return total (regularFee of one day ) if film type is (old) & days <= 5", () => {
    const result = price("old", 5);
    expect(result).toBe(30);
  });

  it("Should return total (first 5 days of 1 regularFee + regularFee * extra days) if film type is (old)", () => {
    const result = price("old", 6);
    expect(result).toBe(60);
  });
});
