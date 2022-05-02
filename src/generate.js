//Function to create the index.html file
function createFile(allEmployees) {
    //Just making sure the data pulls through with this console log
    // console.log(allEmployees)

    //Code for the dynamically generated HTML page
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
            <div class="row row-cols-1 row-cols-md-3">
            ${createEmployeeCards(allEmployees)}

            </div>
            </section>

         <footer>

            </footer>

        </body>

    </html>
    `
    return html
}

//function to create the Employee Cards from the allEmployees array
function createEmployeeCards(allEmployees) {

    //Empty string for the card details to be put into so we can then print it in the above function
    let cardDetails = "";


    //loop over every item in the allEmployees array and add the cardDetails code to the empty cardDetails string for every item
    for (let i = 0; i < allEmployees.length; i++) {

        //if statement to generate the appropriate 'other' title for office, github andschool
        let otherDetail = "";

        console.log(otherDetail + "line 62");

        if (allEmployees[i].gitHub !== undefined) {
            otherDetail += "GitHub: "
        } else if (allEmployees[i].school !== undefined) {
            otherDetail += "School: "
        } else {
            otherDetail += "Office Number: "
        };

        cardDetails +=
            `
            <div class="col">
            <div class="card" style="max-width: 18rem;">
            <div class="card-body">
            <h2 class="card-text">${allEmployees[i].name}</h2>
            <h3 class="card-title">${allEmployees[i].role}</h3>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${allEmployees[i].id}</li>
            <li class="list-group-item">Email: ${allEmployees[i].email}</li>
            <li class="list-group-item">${otherDetail}${allEmployees[i].gitHub || allEmployees[i].school || allEmployees[i].officeNumber}</li>
            </ul>
            </div>
            </div>
            </div>

            `
    }

    return cardDetails
}

module.exports = createFile;
