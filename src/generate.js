//Function to create the index.html file
function createFile(allEmployees) {
    //Just making sure the data pulls through with this console log
    // console.log(allEmployees)

    //Code for the dynamically generated HTML page
    const html = ` 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <header>
        <h1> My Team</h1>
    </header>

    <section>
        <div class="row mx-3">
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

        if (allEmployees[i].gitHub !== undefined) {
            otherDetail += "GitHub: "
        } else if (allEmployees[i].school !== undefined) {
            otherDetail += "School: "
        } else {
            otherDetail += "Office Number: "
        };

        //if statement to change the icon and colours on the cards based on role
        let borderColour = "";
        let backgroundColor = "";
        let icon = "";

        if (allEmployees[i].role === "Engineer") {
            borderColour += "border-success";
            backgroundColor += "bg-success bg-opacity-75";
            icon += '<i class="fa-solid fa-laptop-code"></i>';

        } else if (allEmployees[i].role === "Intern") {
            borderColour += "border-warning";
            backgroundColor += "bg-warning bg-opacity-75";
            icon += '<i class="fa-solid fa-graduation-cap"></i>';

        } else {
            borderColour += "border-info";
            backgroundColor += "bg-info bg-opacity-75";
            icon += '<i class="fa-solid fa-people-group"></i>';

        }

        //if statement to dynamically create gitHub URL for each engineer card
        let gitURL = "";

        if (allEmployees[i].gitHub !== undefined) {
            gitURL += `<a href="https://github.com/${allEmployees[i].gitHub}">${allEmployees[i].gitHub}</a>`
        }
        // else {
        //     gitURL = "";
        // }

        //dynamically create card details for each role in the allEmployees array
        cardDetails +=
            `
            <div class="col-sm-4">
                <div class="card mt-5 ${borderColour}">
                    <div class="card-header ${backgroundColor}">
                        <h2 class="card-title border-bottom border-secondary pb-2">${allEmployees[i].name}</h2>
                        <h3 class="card-subtitle">${icon} ${allEmployees[i].role}</h3>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group m-3">
                            <li class="list-group-item"><span class="heavy-text">ID:</span> ${allEmployees[i].id}</li>
                            <li class="list-group-item"><span class="heavy-text">Email: </span><a href="mailto:${allEmployees[i].email}">${allEmployees[i].email}</a></li>
                            <li class="list-group-item"><span class="heavy-text">${otherDetail}</span>${gitURL || allEmployees[i].school || allEmployees[i].officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
    }

    return cardDetails
}

module.exports = createFile;
