function createManager({ name, id, email, officeNo }) {
    console.log("Manager")
    return `
${name}
${id}
${email}
${officeNo}
`
}

function createEngineer({ name, id, email, gitHub }) {
    console.log("Engineer")
    return `
${name}
${id}
${email}
${gitHub}
`
}

function createIntern({ name, id, email, school }) {
    console.log("Intern")
    return `
${name}
${id}
${email}
${school}
`
}

module.exports = {
    createManager,
    createEngineer,
    createIntern,
}