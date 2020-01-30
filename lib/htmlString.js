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
    return `
<div class="card m-3 " style="width: 20rem;">
    <div class="card-header text-white bg-primary">
        <h3>Manager 
        <br>${answers.name}</h3>
    </div>
    <div class="card-body bg-light text-dark">
        <ul class="list-group">
            <li class="list-group-item" style="font-size: 14px;">ID: ${answers.id}</li>
            <li class="list-group-item" style="font-size: 14px;">Email: ${answers.email}</li>
            <li class="list-group-item" style="font-size: 14px;">Office Number: ${answers.officeNumber}</li>
        </ul>
    </div>
</div>
    <div>`
};
/*================================================================================================================================*/

const engineerHtml = function (answers) {
    return `
    <div class="card m-3 " style="width: 20rem;">
    <div class="card-header text-white bg-primary">
        <h3>Engineer 
        <br>${answers.name}</h3>
    </div>
    <div class="card-body bg-light text-dark">
        <ul class="list-group">
            <li class="list-group-item" style="font-size: 14px;">ID: ${answers.id}</li>
            <li class="list-group-item" style="font-size: 14px;">Email: ${answers.email}</li>
            <li class="list-group-item" style="font-size: 14px;">Github: ${answers.github}</li>
        </ul>
    </div>
</div>`
};
/*================================================================================================================================*/

const internHtml = function (answers) {
    return `
    <div class="card m-3 " style="width: 20rem;">
    <div class="card-header text-white bg-primary">
        <h3>Intern 
        <br>${answers.name}</h3>
    </div>
    <div class="card-body bg-light text-dark">
        <ul class="list-group">
            <li class="list-group-item" style="font-size: 14px;">ID: ${answers.id}</li>
            <li class="list-group-item" style="font-size: 14px;">Email: ${answers.email}</li>
            <li class="list-group-item" style="font-size: 14px;">School: ${answers.school}</li>
        </ul>
    </div>
</div>
`};
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