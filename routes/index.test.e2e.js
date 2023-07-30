const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
    it("It should response the GET method", async () => {

        const expectedStatusCode = 200;
        const expectedBody = { foo: 'bar' }

        // "Promise" Style
        await request(app)
            .get("/foobar")
            .then(response => {
                expect(response.statusCode).toBe(expectedStatusCode);
                expect(response.body).toEqual(expectedBody);
            });

        // Async Style
        const response = await request(app).get("/foobar");
        expect(response.statusCode).toBe(expectedStatusCode);
        expect(response.body).toEqual(expectedBody);

    });
});