const request = require('supertest');
const app = require('../../app');

describe('get reviews endpoint', () => {
    it('should return collection of reviews', async () => {
        const resp = await request(app).get('/reviews');
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('data');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body.success).toBeTruthy();
        expect(resp.body.data).toHaveLength(3);
    });

    it('should fail when reviews not found', async () => {
        const resp = await request(app).get('/reviews/102');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});

describe('post reviews endpoint', () => {
    it('should add reviews successfully', async () => {
        const resp = await request(app).post('/reviews').send({
            trackId:1,
            userId: 1,
            rating: 55,
            ratingDate: '10/10/2022'
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when property to add track is missing', async () => {
        const resp = await request(app).post('/reviews').send({
            rating: 55
        });
        expect(resp.statusCode).toEqual(400);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});




describe('delete reviews endpoint', () => {
    it('should delete reviews successfully', async () => {
        const resp = await request(app).delete('/reviews/1')
        //.set('Authorization', res.body.token);
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when reviews not found', async () => {
        const resp = await request(app).delete('/reviews/151515')
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});

describe('put reviews endpoint', () => {
    it('should update reviews successfully', async () => {
        const resp = await request(app).put('/reviews/1').send({
             trackId:1,
            userId: 1,
            rating: 55,
            ratingDate: '10/10/2022'
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when property to put reviews is missing', async () => {
        const resp = await request(app).put('/reviews/1').send({
            trackId:1,
            
            ratingDate: '10/10/2022'
        });
        expect(resp.statusCode).toEqual(400);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});