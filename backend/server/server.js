const express = require("express")
const app = express()
const port = 8000
const { faker } = require('@faker-js/faker')

// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     }
//     return newFake
// }

// const newFakeProduct = createProduct();
// console.log(newFakeProduct)

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.datatype.uuid()
    }
    return newUser
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address:  {
            street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
        }
        
        // address: faker.location.address({street,city,state,zipCode,country})
    }
    return newCompany
}
const newFakePerson = createUser();
console.log(newFakePerson)
const newFakeCompany = createCompany();
console.log(newFakeCompany)

app.get("/api/user",(req,res) => {
    res.json(newFakePerson)
})

app.get("/api/company",(req,res) => {
    res.json(newFakeCompany)
})


app.get("/api/user/company", (req,res) => {
    res.json({newFakeCompany,newFakePerson})
})






















app.listen(port,()=>console.log(`hello on ${port}`))