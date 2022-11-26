const request = require('supertest');
const app = require('../../app');

describe('get albums endpoint', () => {
    it('should return collection of albums', async () => {
        const resp = await request(app).get('/albums');
        expect(resp.statusCode).toEqual(200);
        /* expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('data');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body.success).toBeTruthy();
        expect(resp.body.data).toHaveLength(3); */
    });

    it('should fail when albums not found', async () => {
        const resp = await request(app).get('/albums/101');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        expect(resp.body).not.toHaveProperty('success');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});

describe('post albums endpoint', () => {
    it('should add albums successfully', async () => {
        const resp = await request(app).post('/albums').send({
            albumName: 'test',
            author: 'eminem',
            realeaseDate: "12-15-2012"
        });
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when property to add track is missing', async () => {
        const resp = await request(app).post('/albums').send({
            albumName: 'test',
            realeaseDate: "12-15-2012"
        });
        expect(resp.statusCode).toEqual(400);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});



describe('delete albums endpoint', () => {
    it('should delete albums successfully', async () => {
        const resp = await request(app).delete('/albums/1')
        //.set('Authorization', res.body.token);
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when albums not found', async () => {
        const resp = await request(app).delete('/albums/151515')
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});

describe('put albums endpoint', () => {
    it('should update albums successfully', async () => {
        const resp = await request(app).put('/albums/1').send({
            albumName: 'test',
            author: 'yyy', 
            realeaseDate: "10-45-08"
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when property to put albums is missing', async () => {
        const resp = await request(app).put('/albums/15').send({
            trackName: 'test'
        });
        expect(resp.statusCode).toEqual(400);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});