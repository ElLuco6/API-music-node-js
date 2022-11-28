const request = require('supertest');
const app = require('../../app');


describe('register users endpoint', () => {
    it('should add users successfully', async () => {
        const resp = await request(app).post('/logs/register').send({
            userName: "TEST",
            password: "ADMIN",
            isAdmin : true
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
       // expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when property to add userName is missing', async () => {
        const resp = await request(app).post('/users').send({
            userName: "TEST",
            
            isAdmin : true
        });
        expect(resp.statusCode).toEqual(400);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});

describe('login endpoint', () => {
    it("Responds with the administrator's information", async (done) => {
     const resp =  await request(app).post('/logs/login')
        .send({
            userName: "TEST",
            password: "ADMIN",

        })
        expect(resp.statusCode).toEqual(200);
        done();
    });
  });

describe('get all users endpoint', () => {
    it('should return collection of users', async () => {

        const resp = await request(app).get('/users');
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('data');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body.success).toBeTruthy();
        /* expect(resp.body.data).toHaveLength(3); */
    });

    it('should fail when users not found', async () => {
        const resp = await request(app).get('/users/10');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
       // expect(resp.body).not.toHaveProperty('success');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});

describe('get users by id endpoint', () => {
    it('should return collection of users', async () => {
        const resp = await request(app).get('/users/1');
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('data');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body.success).toBeTruthy();
        /* expect(resp.body.data).toHaveLength(3); */
    });

    it('should fail when users not found', async () => {
        const resp = await request(app).get('/users/10');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
       // expect(resp.body).not.toHaveProperty('success');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});


describe('post users endpoint', () => {
    it('should add users successfully', async () => {
        const resp = await request(app).post('/users').send({
            userName: 'testo',
            password: '10/10/2022',
            isAdmin: true
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
       // expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when property to add userName is missing', async () => {
        const resp = await request(app).post('/users').send({
            userName: 'test',
            password: '10/10/2022'
        });
        expect(resp.statusCode).toEqual(400);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});
/**/




describe('delete users endpoint', () => {
    it('should delete users successfully', async () => {
        const resp = await request(app).delete('/users/2')
        //.set('Authorization', res.body.token);
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
       //expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when users not found', async () => {
        const resp = await request(app).delete('/users/151515')
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});

describe('put users endpoint', () => {
    it('should update users successfully', async () => {
        const resp = await request(app).put('/users/3').send({
            userName: 'yolo',
            password: 'swag',
            isAdmin: true
        });
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
      //  expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when property to put users is missing', async () => {
        const resp = await request(app).put('/users/3').send({
            userName:1,
            
            password: '10/10/2022'
        });
        expect(resp.statusCode).toEqual(400);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});