const assert = require("assert");
const expect = require("chai").expect;
const request = require("supertest");
const app = require("../app");

describe("Unit testing the /users route", function() {
  it("should return OK status", function() {
    return request(app)
      .get("/users")
      .then(function(response) {
        assert.equal(response.status, 200);
      });
  });

  it("should return message on rendering", function() {
    return request(app)
      .get("/users")
      .then(function(response) {
        expect(response.text).to.contain("respond with a resource");
      });
  });
});
