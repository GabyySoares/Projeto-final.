// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract StoreCustomers {

    struct Customer {
        uint id;
        string name;
        string email;
        string phone;
        uint age;
    }

    uint32 private nextId = 0;
    uint32 public finalCount = 0;

    mapping(uint32 => Customer) public customers;

    function addCustomer(Customer memory newCustomer) public {
        newCustomer.id = nextId + 1;
        customers[nextId++] = newCustomer;
        finalCount++;
    }

    function getCustomer(uint32 _id) public view returns (Customer memory) {
        for (uint32 i = 0; i <= finalCount; i++) {
            if (customers[i].id == _id) {
                return customers[i];
            }
        }
        return customers[_id];
    }

    function getAllCustomers() public view returns (Customer[] memory) {
        uint32 counter = 0;
        for (uint32 i = 0; i < finalCount; i++) {
            if (customers[i].id != 0) {
                counter++;
            }
        }
        Customer[] memory result = new Customer[](counter);
        uint32 counterTwo = 0;
        for (uint32 i = 0; i < finalCount; i++) {
            if (customers[i].id != 0) {
                result[counterTwo++] = customers[i];
            }
        }
        return result;
    }

    function updateCustomer(uint32 _id, Customer memory customer) public {
        for (uint32 i = 0; i <= finalCount; i++) {
            if (customers[i].id == _id) {
                customers[i] = customer;
            }
        }
    }

    function deleteCustomer(uint32 _id) public {
        for (uint32 i = 0; i <= finalCount; i++) {
            if (customers[i].id == _id) {
                delete customers[i];
            }
        }
    }

}