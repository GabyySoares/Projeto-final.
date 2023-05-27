const HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', function(accounts) {
  // Aqui dentro eu coloco todos os testes
  beforeEach(async () => {
    contract = await HelloWorld.new();
  })

  it('Hello World', async () => {
    const result = await contract.helloWorld();
    assert.equal(result, "Hello World!");
  })

});