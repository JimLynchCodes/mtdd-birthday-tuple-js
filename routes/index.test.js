const mockFoobarResponse = { mock: 'response' };

jest.doMock('../helper-functions/foobar.js', () => jest.fn(() => mockFoobarResponse))

const request = require("supertest");
const app = require("../app");

describe("index unit test", () => {

    it("returns what Foobar returns", async () => {

        await request(app)
            .get("/foobar")
            .expect(200, mockFoobarResponse)

    });
});