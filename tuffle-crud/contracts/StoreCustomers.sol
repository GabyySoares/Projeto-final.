// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract StoreCustomers {

    struct Customer {
        string name;
        string email;
        string phone;
        uint age;
    }

    uint32 private nextId = 0;
    uint32 public count = 0;

    function getNextId() private returns (uint32) {
        nextId++;
        return nextId;
    }

    mapping(uint32 => Customer) public customers;

    function addCustomer(Customer memory newCustomer) public {
        customers[getNextId()] = newCustomer;
        count++;
    }

    function getCustomer(uint32 id) public view returns (Customer memory) {
        return customers[id];
    }

    function updateCustomer(uint32 id, Customer memory customer) public {
        customers[id] = customer;
    }

    function deleteCustomer(uint32 id) public {
        delete customers[id];
        count--;
    }

}