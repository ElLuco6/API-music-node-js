const request = require('supertest');
const app = require('../../app');

describe('get tracks endpoint', () => {
    it('should return collection of tracks', async () => {
        const resp = await request(app).get('/tracks');
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('data');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body.success).toBeTruthy();
        
    });

    it('should fail when tracks not found', async () => {
        const resp = await request(app).get('/tracks/10')
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        // expect(resp.body).not.toHaveProperty('success');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});


describe('get tracks by id endpoint', () => {
    it('should return collection of tracks', async () => {
        const resp = await request(app).get('/tracks/2');
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('data');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body.success).toBeTruthy();
        /* expect(resp.body.data).toHaveLength(3); */
    });

    it('should fail when tracks not found', async () => {
        const resp = await request(app).get('/tracks/1110');
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).not.toHaveProperty('data');
        // expect(resp.body).not.toHaveProperty('success');
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});

describe('post tracks endpoint', () => {
    it('should add tracks successfully', async () => {
        const resp = await request(app).post('/tracks').send({
            "trackName": "periscope",
            "author": "damso",
            "fromAlbum": "baterie faible",
            "realeaseDate": "2014-11-11T00:00:00.000Z"
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');

        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when property to add track is missing', async () => {
        const resp = await request(app).post('/tracks').send({
            trackName: 'test'
        });
        expect(resp.statusCode).toEqual(400);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});

describe('delete tracks endpoint', () => {
    it('should delete tracks successfully', async () => {
        const resp = await request(app).delete('/tracks/4')
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        //expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when tracks not found', async () => {
        const resp = await request(app).delete('/tracks/151515')
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});

describe('put tracks endpoint', () => {
    it('should update tracks successfully', async () => {
        const resp = await request(app).put('/tracks/2').send({
            "trackName": "periscope",
            "author": "testooo",
            "fromAlbum": "baterie faible",
            "realeaseDate": "2014-11-11T00:00:00.000Z"
        });
        expect(resp.statusCode).toEqual(201);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
      //  expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeTruthy();
    });

    it('should fail when property to add track is missing', async () => {
        const resp = await request(app).put('/tracks/15').send({
            "trackName": "periscope",
            "author": "damso",
            "fromAlbum": "baterie faible",
            "realeaseDate": "2014-11-11T00:00:00.000Z"
        });
        expect(resp.statusCode).toEqual(404);
        expect(resp.body).not.toBeNull();
        expect(resp.body).toHaveProperty('success');
        expect(resp.body).toHaveProperty('message');
        expect(resp.body.success).toBeFalsy();
    });
});