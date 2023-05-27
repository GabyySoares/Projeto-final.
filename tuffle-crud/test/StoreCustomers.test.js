const StoreCustomers = artifacts.require("StoreCustomers");

contract('StoreCustomers', function(accounts) {

    // Aqui dentro eu coloco todos os testes
    beforeEach(async () => {
        contract = await StoreCustomers.new();
    });

    it('Should add a customer', async () => {

        const result = await contract.addCustomer({
            name : "John Doe",
            email: "iamjohn@email.com",
            phone: "55 999999999",
            age: 23
        })
        const count = await contract.count();
        assert(count.toNumber() === 1, "Customer was not added");
    });

    it('Should get a customer', async () => {
        await contract.addCustomer({
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
            name : "John Doe",
            email: "",
            phone: "",
            age: 23
        })

        await contract.updateCustomer(1, {
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
            name : "John Doe",
            email: "joe@mail.com",
            phone: "55 999999999",
            age: 23
        })

        const countbefore = await contract.count();
        assert(countbefore.toNumber() === 1, "Customer was not added");

        await contract.deleteCustomer(1);

        const response = await contract.getCustomer(1);
        const countafter = await contract.count();

        assert(countafter.toNumber() === 0, "Customer was not deleted");
        assert(response.name === "", "Customer was not deleted");

    });

}); 