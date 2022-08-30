import { TemporaryScraperError } from "../../../../../src/infrastructure/errors/temporary-scraper-error";
import { expect } from "chai";

describe("TemporaryScraperError", () => {
    it("should have properties statusCode and messages", () => {
        let error: any;

        const throwFn = () => {
            try {
                throw new TemporaryScraperError("Some error message.");
            } catch (e) {
                error = e;
            }
        };

        throwFn();
        expect(error).to.contains({
            name: "TemporaryScraperError",
            message: "Some error message.",
            statusCode: 400
        });
    });

    it("should assign messages as name, when no message sent", () => {
        let error: any;

        const throwFn = () => {
            try {
                throw new TemporaryScraperError();
            } catch (e) {
                error = e;
            }
        };

        throwFn();
        expect(error).to.contains({
            name: "TemporaryScraperError",
            message: "Error",
            statusCode: 400
        });
    });
});
