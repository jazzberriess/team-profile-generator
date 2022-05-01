// const createCards = require("../dist/cards")

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

function createFile(responsesArray) {
    console.log("woo")
    console.log(responsesArray + "line 5")
    console.log(Object.fromEntries(responsesArray) + "line8");
    console.log(responsesArray.key, responsesArray.value + "line 9");
    const results = responsesArray.entries();

    let results2 = [];

    responsesArray.forEach((value, key) => {
        // for (const [key, value] of responsesArray.entries()) {

        results2 = `<div>
        <p>${key} : ${value}</p>
        </div>`

        //     console.log(key, value);

        console.log(results2)

        // return results2

    })


    // for (const [key, value] of responsesArray) {



    // console.log(responsesArray.entries() + "line 14")

    // console.log(key, value + "line 12");

    // console.log(results2)

    return ` <!DOCTYPE html>
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

        ${results.next().value}
       
        ${results2}
        ${results2}
        ${results2}
        ${results2}

    </section>

        <footer>

        </footer>

        </body>

    </html>
    `

}
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
//     console.log(`${value}, line12`);
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