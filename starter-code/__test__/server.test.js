'use strict';

const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Api', ()=> {   
    it('Sign in route ', async () => {
        let signInHeader ={
            username:'nedal',
            password:'123@test'
        }
        const response = await request.post('/signin').send(signInHeader); 
        expect(response.status).toEqual(200);
    });
    it('Faild Sign in', async () => {
        const response = await request.post('/signin'); 
        expect(response.status).toEqual(500); 
    });   
    it('Sign up ', async () => {
        let signInBody ={
            username:'nedal',
            password:'123@test'
        }
        const response = await request.post('/signup').send(signInBody); 
        expect(response.status).toEqual(200);
    });
    it('Faild Sign up', async () => {
        const response = await request.post('/signup'); 
        expect(response.status).toEqual(500); 
    });
});
