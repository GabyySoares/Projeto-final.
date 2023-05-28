const StoreCustomers = artifacts.require("StoreCustomers");

contract('StoreCustomers', function(accounts) {

    // Aqui dentro eu coloco todos os testes
    beforeEach(async () => {
        contract = await StoreCustomers.new();
    });

    it('Should add a customer', async () => {

        const result = await contract.addCustomer({
            id: 0,
            name : "John Doe",
            email: "iamjohn@email.com",
            phone: "55 999999999",
            age: 23
        })
        const count = await contract.finalCount();
        assert(count.toNumber() === 1, "Customer was not added");
    });

    it('Should get a customer', async () => {
        await contract.addCustomer({
            id: 0,
            name : "John Doe",
            email: "joe@mail.com",
            phone: "55 999999999",
            age: 23
        })

        const response = await contract.getCustomer(1);
        assert(response.name === "John Doe", "Customer was not added");
    });

    it('Should edit a customer', async () => {
        await contract.addCustomer({
            id: 0,
            name : "John Doe",
            email: "",
            phone: "",
            age: 23
        })

        await contract.updateCustomer(1, {
            id: 1,
            name : "Jake o Cao",
            email: "jonasbrothers@email.com",
            phone: "55 999999999",
            age: 23
        })

        const response = await contract.getCustomer(1);
        assert(response.name === "Jake o Cao", "Customer was not edited");
        assert(response.email === "jonasbrothers@email.com");

    });

    it('Should delete a customer', async () => {
        await contract.addCustomer({
            id: 0,
            name : "John Doe",
            email: "joe@mail.com",
            phone: "55 999999999",
            age: 23
        })
        await contract.deleteCustomer(1);

        const response = await contract.getCustomer(1);

        assert(response.name === "", "Customer was not deleted");

    });

    it('Should get all customers', async () => {
        await contract.addCustomer({
            id: 0,
            name : "John Doe",
            email: "joe@mail.com",
            phone: "55 999999999",
            age: 23
        })
        await contract.addCustomer({
            id: 0,
            name : "Mario Brothers",
            email: "mario@mail.com",
            phone: "55 999999999",
            age: 35
        })
        await contract.addCustomer({
            id: 0,
            name : "Luigi Bros",
            email: "luigi@mail.com",
            phone: "55 999999999",
            age: 27
        })

        const response = await contract.getAllCustomers();
        assert(response.length === 3, "Customer was not added");
        assert(response[0].name === "John Doe", "Customer was not added");
        assert(response[1].name === "Mario Brothers", "Customer was not added");
        assert(response[2].name === "Luigi Bros", "Customer was not added");
    });

}); 