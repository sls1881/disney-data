//import
const { app } = require('../app.js')
const { disneyData } = require('../data.js')
const supertest = require('supertest')
const request = supertest(app)

it('should respond with all disney characters', async done => {
    const expected =
        { results: disneyData };

    const response = await request.get('/disney')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(expected)
    done()
})

it('should respond with a disney characters', async done => {
    const expected =
    {
        results: {
            id: 2,
            character_name: "Minnie Mouse",
            birth_year: 1928,
            wears_clothes: true,
            species: "mouse"

        }
    };

    const response = await request.get('/disney/2')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(expected)
    done()
})