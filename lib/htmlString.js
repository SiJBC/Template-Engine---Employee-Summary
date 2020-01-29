const headerHtml = function () {
    return `<!DOCTYPE html>
    <html>
    <head>
        <title>Page</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    </head>
    <body>
        <div class="jumbotron">
            <h1 class="text-center">Here is your team</h1>
        </div>
        <div class="container">
            <div class="col-sm-6 col-sm-offset-3">
            </div>
        </div>`
};


const managerHtml = function (answers) {
    return `<div class="card m-2">
      <ul>
    <li>Manager's name ${answers.name}</li>
    <li>Manager's ID ${answers.id}</li>
    <li>Manager's email ${answers.email}</li>
    <li>Manager's office number ${answers.officeNumber}</li>
</ul>`
};
/*================================================================================================================================*/

const engineerHtml = function (answers) {
    return ` <div class="card m-2">
    <div class="card-header">
     <ul>
    <li>engeinner's name ${answers.name}</li>
    <li>engineer's ID ${answers.id}</li>
    <li>engineer's email ${answers.email}</li>
    <li>enginner's github ${answers.github}</li>
</ul>
</div>
</div>`
};
/*================================================================================================================================*/

const internHtml = function (answers) {
    return `<div class="card m-2">
    <div class="card-header">
    <ul>
    <li>Intern's name ${answers.name}</li>
    <li>Interns's ID ${answers.id}</li>
    <li>Interns's email ${answers.email}</li>
    <li>Intern's school ${answers.school}</li>
</ul>
    </div>
</div>`
};
/*================================================================================================================================*/

const footerHtml = function() {
    return `
</body>
</html>`
};

module.exports = {
    manager: managerHtml,
    engineer: engineerHtml,
    intern: internHtml,
    header: headerHtml,
    footer: footerHtml,
}