import { HeavyScraperError } from "../../../../../src/infrastructure/errors/heavy-scraper-error";
import { expect } from "chai";

describe("HeavyScraperError", () => {
    it("should have properties statusCode and messages", () => {
        let error: any;

        const throwFn = () => {
            try {
                throw new HeavyScraperError("Some error message.");
            } catch (e) {
                error = e;
            }
        };

        throwFn();
        expect(error).to.contains({
            name: "HeavyScraperError",
            message: "Some error message.",
            statusCode: 400
        });
    });
});
