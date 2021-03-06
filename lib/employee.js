const htmlString = function () {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script src="https://kit.fontawesome.com/20b7bd973d.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Team Page</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid text-center bg-dark">
            <div class="container">
                <h1 class="display-4 text-light">My Team</h1>
                <h1 class="display-4 text-light"><i class="fas fa-users"></i></h1>
            </div>
        </div>
        <!-- Start of Cards -->
        <div class = "container">
            <div class="col-md-12">
                <div class="row">
    <!---===============END OF HEAD CODE BLOCK====================-->`
};

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee" 
    }

}




module.exports = Employee, htmlString 