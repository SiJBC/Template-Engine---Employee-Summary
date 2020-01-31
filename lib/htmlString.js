const headerHtml = function () {
    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    
        <head>
            <title>Page</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        </head>
    </head>
    
    <body>
    <body>
    <div class="card text-center">
        <div class="card-header">
            <h1>Your tech team</h1>
        </div>`
};


const managerHtml = function (answers) {
    return `
    <div class="card-body">
    <h5 class="card-header text-white bg-primary">Manager
    <br>${answers.name}</h5>
    <p class="card-text">
    <ul class="list-group">
    <li class="list-group-item" style="font-size: 14px;">ID: ${answers.id}</li>
    <li class="list-group-item" style="font-size: 14px;">Email:${answers.email}</a></li>
    <li class="list-group-item" style="font-size: 14px;">Office Number: ${answers.officeNumber}</li>
</ul>
    </p>


    </div>

    <div class="card-group">

`
};
/*================================================================================================================================*/

const engineerHtml = function (answers) {
    return `
            
    <div class="card">
        <div class="card-body">
            <h3 class="card-header text-white bg-primary">  
             Engineer 
            <br>${answers.name}</h3>
            <p class="card-text"><ul class="list-group">
                <li class="list-group-item" style="font-size: 14px;">ID: ${answers.id}</li>
                <li class="list-group-item" style="font-size: 14px;">Email: ${answers.email}</li>
                <li class="list-group-item" style="font-size: 14px;">Github Profile ${answers.github}: <a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://github.com/${
                    answers.github
                    }"><i class="fab fa-github-alt"></i> GitHub</a></li>
            </ul></p>

        </div>
    </div>`
};
/*================================================================================================================================*/

const internHtml = function (answers) {
    return `
    <div class="card">
                <div class="card-body">
                    <h3 class="card-header text-white bg-primary">Intern
                    <br> ${answers.name}</h3>
                    <p class="card-text"><ul class="list-group">
                    <li class="list-group-item" style="font-size: 14px;">ID: ${answers.id}</li>
                    <li class="list-group-item" style="font-size: 14px;">Email: ${answers.email}</li>
                    <li class="list-group-item" style="font-size: 14px;">School: ${answers.school}</li>
                    </ul></p>
                </div>
            </div>
`};
/*================================================================================================================================*/

const footerHtml = function() {
    return `
    </div>

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