/*
{} - it is called object syntax literal.
in js object is a collection of properties consist of key value pair. To access the
property use (.) dot notation or [''].
*/
let emptyObject = {} //empty object syntax
console.log(emptyObject)

let Person = {
    name: 'Tuba',
    fav_color: 'Blue',
    fav_food: 'Polao',
};
console.log('type of Person: '+ typeof(Person))
console.log('name, fav_color: '+ Person.name + ', ' + Person['fav_color'])

/* To delete any property from object 'delete' is used*/
delete Person.fav_food;

// to check a property exists or not 'in' operator is used
console.log(`fav_food field exists or not in Person object: ${'fav_food' in Person}`)

/*These are data types. Js has two types of value. 1. primitive, 2. reference
Primitive values are saved in stack memory because of its fixed size, while referenced values
are saved into heap due to dynamic size. Copying a reference from one variable to another creates a
reference so that two variables refer to the same object.
This means that changing the object via one variable reflects in another variable.
But primitive value does not do that.
*/