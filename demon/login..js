const request = require('supertest');
const app = require('../../app');

describe('get tracks endpoint', () => {
    it('should return collection of books', async () => {
        const resp = await request(app).get('/tracks');
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('data');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body.success).toBeTruthy();
        expect(resp.body.data).toHaveLength(3);
    });

    it('should fail when book not found', async () => {
        const resp = await request(app).get('/tracks/10');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});

describe('post tracks endpoint', () => {
    it('should add book successfully', async () => {
        const resp = await request(app).post('/tracks').send({
            title: 'test',
            date: '10/10/2022'
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when property to add track is missing', async () => {
        const resp = await request(app).post('/tracks').send({
            title: 'test'
        });
        expect(resp.statusCode).toEqual(400);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});