// const createCards = require("../dist/cards")

const Engineer = require("./engineer");

// const { forEach } = require("lodash");

// function cards(responsesArray) {

//     // for (let i = 0; i > responsesArray.size; i++) {

//     responsesArray.forEach((value, key) => {
//         // for (const [key, value] of responsesArray.entries()) {

//         let results2 = `<div>
//         <p>${key}: ${value} </p>
//         </div>`

//         //     console.log(key, value);

//         console.log(results2)
//         return results2

//         // return cardsVal
//         // console.log(`${key}, ${value}, line 7`)

//     })
// }

function createFile(allEmployees) {
    console.log("woo")
    console.log(allEmployees)
    // console.log(responsesArray + "line 5")
    // console.log(Object.fromEntries(responsesArray) + "line8");
    // console.log(responsesArray.key, responsesArray.value + "line 9");
    // const results = responsesArray.entries();
    // console.log(managerResponses + "line33")
    // console.log(internResponses + "line34")
    // console.log(engineerResponses + "line33")

    // const managerResults = managerResponses.entries();
    // const internResults = internResponses.entries();
    // const engineerResults = engineerResponses.entries();

    // let engineerResults2 = '';
    // let managerResults2 = '';


    // engineerResponses.forEach((value, key) => {
    //     // for (const [key, value] of responsesArray.entries()) {

    //     engineerResults2 = `<p>${key} : ${value}</p>`

    //     //     console.log(key, value);

    //     console.log(engineerResults2)

    //     return engineerResults2

    // })
    // managerResponses.forEach((value, key) => {
    //     // for (const [key, value] of responsesArray.entries()) {

    //     managerResults2 = `<div>
    //     <p>${key} : ${value}</p>
    //     </div>`

    //     //     console.log(key, value);

    //     console.log(managerResults2)

    //     return managerResults2

    // })

    // console.log(typeof engineerResults2);


    // for (const [key, value] of responsesArray) {



    // console.log(responsesArray.entries() + "line 14")

    // console.log(key, value + "line 12");

    // console.log(results2)

    const html = ` <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>

        <body>
            <header>

            </header>
            <section>
            ${createEmployeeCards(allEmployees)}

            </section>

         <footer>

            </footer>

        </body>

    </html>
    `
    return html
}

function createEmployeeCards(allEmployees) {
    // console.log(allEmployees);
    console.log(allEmployees.length);
    console.log(Object.keys(allEmployees), Object.values(allEmployees));
    console.log(allEmployees[0].name);

    let cardDetails = "";
    // allEmployees.forEach((value, key) => {

    for (let i = 0; i < allEmployees.length; i++) {

        // let role = `${allEmployees[i].role}`
        // let name = `${allEmployees[i].name}`
        // let id = `${allEmployees[i].id}`
        // let email = `${allEmployees[i].email}`
        // let other = `${allEmployees[i].gitHub || allEmployees[i].school || allEmployees[i].officeNo}`

        cardDetails +=
            `<p>${allEmployees[i].role}</p>
            <p>${allEmployees[i].name}</p>
            <p>${allEmployees[i].id}</p>
            <p>${allEmployees[i].email}</p>
            <p>${allEmployees[i].gitHub || allEmployees[i].school || allEmployees[i].officeNo}</p >
            `

        console.log(allEmployees[i] + "line 131");
        console.log(cardDetails + "line132");
    }

    return cardDetails
}


//     console.log(key, value + "line 132");
//     console.log(cardDetails + "line 133");
//     console.log(Object.entries.key, Object.entries.value + "line 134")
//     console.log(allEmployees[0].Engineer);

//     return cardDetails
// })
// }



// }
// }

// for (const [key, value] of responsesArray.entries()) {

// for (let i = 0; i < responsesArray.length; i++) {
//     console.log(responsesArray[i] + "line11");
// }


// console.log(name + "line 5")
// console.log(id + "line 5")
// console.log(email + "line 5")
// console.log(gitHub + "line 5")


// const responses = finalAnswers
// for (const [value] of Object.entries(responsesArray)) {
//     console.log(`${ value }, line12`);
// }

// Object.getOwnPropertyNames(responses).forEach(
//     function (value, index, responses) {
//         console.log(value + index + responses[value] + "line 17");
//     })

// return `
//     <!DOCTYPE html>
//     <html lang="en">

//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Team Profile Generator</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
//             integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
//     </head>

//     <body>
//     <header>

//     </header>
//     <section>

//     ${results}

// </section>

//     <footer>

//     </footer>

//     </body>

// </html>
// `

// return html
// }
// }

// function cards(responsesArray) {

//     // for (let i = 0; i > responsesArray.size; i++) {

//     responsesArray.forEach((value, key) => {
//         // for (const [key, value] of responsesArray.entries()) {

//         let results2 = `<div>
//         <p>${key}: ${value} </p>
//         </div>`

//         //     console.log(key, value);

//         // console.log(results2)
//         return results2

//         // return cardsVal
//         // console.log(`${key}, ${value}, line 7`)

//     })
// }
// }


module.exports = createFile;
// module.exports = cards;

// function createFile({ name, id, email, officeNo, gitHub, school }) {
//     console.log("woo")
//     return `
// ${name}
// ${id}
// ${email}
// ${officeNo}
// ${gitHub}
// ${school}
// `
// }

// function createManager({ name, id, email, officeNo }) {
//     console.log("Manager")
//     return `
// ${name}
// ${id}
// ${email}
// ${officeNo}
// `
// }

// function createEngineer({ name, id, email, gitHub }) {
//     console.log("Engineer")
//     return `
// ${name}
// ${id}
// ${email}
// ${gitHub}
// `
// }

// function createIntern({ name, id, email, school }) {
//     console.log("Intern")
//     return `
// ${name}
// ${id}
// ${email}
// ${school}
// `
// }


// module.exports = {
//     createFile,
    // createManager,
    // createEngineer,
    // createIntern
// }