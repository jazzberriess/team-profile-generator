function createFile({ name, id, email, officeNo, gitHub, school }) {
    console.log("woo")
    return `
${name}
${id}
${email}
${officeNo}
${gitHub}
${school}
`
}

module.exports = createFile;