// const { default: expect } = require("expect");
const request = require("supertest")

// it("1 + 1 deve ser igual a 2", () => {
//     const resultadoEsperado = 2;
//     expect(1+1).toBe(resultadoEsperado);
// });

// test("Deve visualizar informações de cadastro, quando buscar por uma pessoa existente", async () => {
//     const resposta = await request("https://swapi.dev/api").get("/people/1");
//     expect(resposta.status).toBe(200)
//     expect(resposta.body.films).toBeDefined()
//     expect(resposta.body.vehicles.length).toBeGreaterThan(0)
//     expect(resposta.body.name).toBe('Luke Skywalker')
// })

// test("Deve exibir uma mensagem de erro, quando buscar por uma pessoa inexistente", async () => {
//     const resposta = await request("https://swapi.dev/api").get("/people/9999");
//     expect(resposta.status).toBe(404);
//     expect(resposta.body.detail).toBe("Not found");
//     expect(resposta.body).toMatchObject({
//         detail: "Not found"
//     })
// })


test("teste1", async () => {
    const resposta = await request("https://swapi.dev/api").get("/planets/1/")
    expect(resposta.body.population).toBe("200000")
})
test("teste2", async () => {
    const resposta = await request("https://swapi.dev/api").get("/people/4/")
    expect(resposta.body.name).toBe("Darth Vader")
})
test("teste3", async () => {
    const resposta = await request("https://swapi.dev/api").get("/films/1/")
    expect(resposta.body.title).toBe("A New Hope")
})
test("teste4", async () => {
    const resposta = await request("https://swapi.dev/api").get("/films/1/")
    expect(resposta.body.episode_id).toBe(4)
})
test("teste5", async () => {
    const resposta = await request("https://swapi.dev/api").get("/films/1/")
    expect(resposta.body.director).toBe("George Lucas")
})
test("teste6", async () => {
    const resposta = await request("https://swapi.dev/api").get("/films/1/")
    expect(resposta.body.release_date).toBe("1977-05-25")
})
test("teste7", async () => {
    const resposta = await request("https://swapi.dev/api").get("/starships/5/")
    expect(resposta.body.model).toBe("Sentinel-class landing craft")
})
test("teste8", async () => {
    const resposta = await request("https://swapi.dev/api").get("/starships/5/")
    expect(resposta.body.manufacturer).toBe("Sienar Fleet Systems, Cyngus Spaceworks")
})
// test("teste9", async () => {
//     const resposta = await request("https://swapi.dev/api").get("/starships/5/")
//     expect(resposta.body.passengers).toBe("75")
// })
// test("teste10", async () => {
//     const resposta = await request("https://swapi.dev/api").get("/vehicles/30/")
//     expect(resposta.body.name).toBe("Imperial Speeder Bike")
// })
