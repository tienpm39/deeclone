let person = {
    firstName : 'Tien',
    lastName : 'PM',
    age : 18,
    address : {
        houseNumber : 111,
        street : 'Le loi',
        district : 'District 1',
        city : 'HCMC',
        postcode : 72000
    }
}


let clonePerson = {...person}
let clone2Person = Object.assign({},person)
let clone3Person = JSON.parse(JSON.stringify(person))
let clone4Person = {address : { ...person.address}}


clonePerson.firstName = 'Tien' ; //finished
clonePerson.address.city = 'HCMC' ; //work after clone
