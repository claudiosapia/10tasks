


/* Testing express web apis/endpoints or routes or node js app is form of integration testing. */
// Integration Test script
const express = require("express"); // import express
const app = require("../../app"); //import file we you have to test api / routes or something
const request = require("supertest"); // supertest is a framework that allows to easily test web apis in jest
// const app = express(); //an instance of an express app, a 'fake' express app for jest




describe("SANITY TESTING GET all routes ", () => {
  it(" / route should respond as object", async () => {
    const response = await request(app).get("/");
 expect(response.body instanceof Object).toBeTruthy()
		
  });
  it('/ Returns a 200 status code', function (done) {
        request(app)
            .get('/')
            .expect(200)
             .expect('Content-Type', /html/, done);
    });
    it('/ Returns a HTML format', function(done) {
        
        request(app)
            .get('/')
              .expect(200)
            .expect('Content-Type', /html/, done);
    });
    
    it('Returns a html format and status code 200 in task1', function(done) {
        request(app)
            .get('/task1')
            .expect(200)
        .expect('Content-Type', /html/, done);
          
    });
it('Returns a html format and status code 200 in task2', function(done) {

        request(app)
            .get('/task2')
            .expect(200)
        .expect('Content-Type', /html/, done);

    });
it('Return a html format and status code 200 in task3', function(done) {

        request(app)
            .get('/task3')
            .expect(200)
        .expect('Content-Type', /html/, done);

    });

it('Return a html format and status code 200 in task4', function(done) {

        request(app)
            .get('/task4')
            .expect(200)
        .expect('Content-Type', /html/, done);

    });
it('Return a html format and status code 200 in task5', function(done) {

        request(app)
            .get('/task5')
            .expect(200)
        .expect('Content-Type', /html/, done);

    });

it('Return a html format and status code 200 in task6', function(done) {

        request(app)
            .get('/task6')
            .expect(200)
        .expect('Content-Type', /html/, done);

    });
it('Return a html format and status code 200 in task7', function(done) {

        request(app)
            .get('/task7')
            .expect(200)
        .expect('Content-Type', /html/, done);

    });

    it('Return a html format and status code 200 in task8', function(done) {

        request(app)
            .get('/task8')
            .expect(200)
        .expect('Content-Type', /html/, done);

    });

    it('Return a html format and status code 200 in task9', function(done) {

        request(app)
            .get('/task9')
            .expect(200)
        .expect('Content-Type', /html/, done);

    });

    it('Return a html format and status code 200 in task10', function(done) {

        request(app)
            .get('/task10')
            .expect(200)
        .expect('Content-Type', /html/, done);

    });
   it('DOES NOT Return a html format and status code 200 in task11 , 404 IS GIVEN INSTEAD', function(done) {

        request(app)
            .get('/task11')
            .expect(404)
        .expect('Content-Type', /html/, done);

    });
    
   
});