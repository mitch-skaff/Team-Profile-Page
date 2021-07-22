// create HTML
function html(employees) {
    const htmlInsert =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Team Profile Page</title>
    </head>

    <body>
        <header class="jumbotron text-center bg-gradient bg-success text-white">
            <h1>Team Profile</h1>
        </header>

        <main class="container py-3">

            <div class="row row-cols-1 row-cols-md-3 mb-3">

                
                ${createCards(employees)}
                
                
            
                </div>
            </div>
        </main>
    
    </body>
    </html>`
        

return htmlInsert;
};


function createCards(employees) {
    var cards = [];

    for(var i = 0; i < employees.length; i++) {

        cards.push(`
        <div class="col">
            <div class="card mx-auto mb-3" style="width: 18rem">
                <h2 class="card-header bg-transparent border-info">${employees[i].getName()}</h2>
                    <div class="card-body text-primary">
                    <h5 class="card-title">${employees[i].getRole()}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employees[i].getId()}</li>
                            <li class="list-group-item">Email Address: ${employees[i].getEmail()}</li>
                            ${addMemberInfo(employees[i])}
                        </ul>
                    </div>
                </div>
            </div>
        
        `)
    }

    return cards.join("");

};


function addMemberInfo(memberInfo) {
    switch(memberInfo.getRole()){
        case "Manager": 
            return `<li class="list-group-item">Office Number: ${memberInfo.getOfficeNumber()}</li>`;

        case "Engineer":
            return `<li class="list-group-item">GitHub: ${memberInfo.getGithub()}</li>`;

        case "Intern":
            return `<li class="list-group-item">School: ${memberInfo.getSchool()}</li>`

      }
};



module.exports = html;