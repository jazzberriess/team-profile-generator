function createCards({ role, name, id, email, officeNo, gitHub, school }) {
    console.log("woo")

    for (const [key, value] of Object.entries(role, name, id, email, officeNo, gitHub, school)) {
        console.log(`${key}, ${value}`)
    }



    return Object.entries(role, name, id, email, officeNo, gitHub, school)
}


module.exports = {
    createCards
}