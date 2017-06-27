/**
 * Created by Gabriel.Tabus on 6/27/2017.
 */

var euroConversion = false;

var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function salaryTotal()
{
    var t = '<p>';
    var aux = 0;
    for(var i in employeesList)
    {
        aux = aux+employeesList[i].salary;
    }
    t += aux + '</p>';
    var container = document.getElementById('totalcontainer');
    container.innerHTML = t;
}
function showList() {
    var myTable;
    if(!euroConversion) {
        myTable = '<table border="1" class = "table table-bordered">' +
            '<tr><th>First Name</th>' +
            '<th>Last Name</th>' +
            '<th>Phone</th>' +
            '<th>Salary</th>' +
            '<th>Vizualizare</th>' +
            '<th>Stergere</th></tr>';
        for (var i in employeesList) {
            myTable += '<tr><td>' + employeesList[i].firstName +
                '</td><td>' + employeesList[i].lastName +
                '</td><td>' + employeesList[i].phone +
                '</td><td>' + employeesList[i].salary +
                '</td><td>' + '<button onclick="displayAlert(' + i + ')">Vizualizare</button>' +
                '</td><td>' + '<button onclick="removeElemFromList(' + i + ')">Stergere</button>' + '</td></tr>';
        }
        myTable += '<tr>' +
                        '<td>' + getMostCommonName() + '</td>' +
                        '<td>' + getNumberOfUniqueNames() + '</td>' +
                        '<td>'+ top5numberOccurences() + '</td>' +
                        '<td>'+ averageSalary() + '</td>' +
                '</tr>';
    }
    else {
        myTable = '<table border="1" class = "table table-bordered">' +
            '<tr>' +
            '<th>First Name</th>' +
            '<th>Last Name</th>' +
            '<th>Phone</th>' +
            '<th>Salary</th>' +
            '<th>euroValue</th>' +
            '<th>Vizualizare</th>' +
            '<th>Stergere</th>' +
            '</tr>';
        for (var i in employeesList) {
            myTable += '<tr><td>' + employeesList[i].firstName +
                '</td><td>' + employeesList[i].lastName +
                '</td><td>' + employeesList[i].phone +
                '</td><td>' + employeesList[i].salary +
                '</td><td>' + employeesList[i].salary/4.5 +
                '</td><td>' + '<button onclick="displayAlert(' + i + ')">Vizualizare</button>' +
                '</td><td>' + '<button onclick="removeElemFromList(' + i + ')">Stergere</button>' + '</td></tr>';
        }
        myTable += '<tr>' +
                        '<td>' + getMostCommonName() + '</td>' +
                        '<td>' + getNumberOfUniqueNames() + '</td>' +
                        '<td>'+ top5numberOccurences() + '</td>' +
                        '<td>'+ averageSalary() + '</td>' +
                '</tr>';
    }

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee()
{

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}

function removeElemFromList(index)
{
    employeesList.splice(index,1);
    showList();
}

function removeLastEmployee()
{
    employeesList.pop();
    showList();
}

function checkEuroConversion()
{
    if(!euroConversion)
        euroConversion = true;
    showList();
}

function displayAlert(index) {

    alert("Employee: " + employeesList[index].firstName + " " +
                        employeesList[index].lastName + " " +
                        employeesList[index].phone + " " +
                        employeesList[index].salary + ".");
}

function getMostCommonName()
{
    var defaultName = "NoName";
    var max = 0;
    var count;
    for(var each in employeesList) {
        count = 0;
        for(var person in employeesList) {
            if (employeesList[each].lastName.localeCompare(employeesList[person].lastName) == 0) {
                count++;
            }
        }
        if(count > max) {
            defaultName = employeesList[each].lastName;
            max = count;
        }
    }
    return defaultName;
}

function getNumberOfUniqueNames()
{
    var max = 0;
    var count;
    for(var each in employeesList) {
        count = 0;
        for(var person in employeesList) {
            if (employeesList[each].lastName.localeCompare(employeesList[person].lastName) == 0) {
                count++;
            }
        }
        if(count == 1) {
            max ++;
        }
    }
    return max;
}

function top5numberOccurences()
{
    var top5 = "";
    var wholeThing = "";
    for(var each in employeesList){
        wholeThing += employeesList[each].phone;
    }

    myNumbers2 = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
    };

    var myNumbers = [
        {
            Number: 0,
            Occurences: 0,
        },
        {
            Number: 1,
            Occurences: 0,
        },
        {
            Number: 2,
            Occurences: 0,
        },
        {
            Number: 3,
            Occurences: 0,
        },
        {
            Number: 4,
            Occurences: 0,
        },
        {
            Number: 5,
            Occurences: 0,
        },
        {
            Number: 6,
            Occurences: 0,
        },
        {
            Number: 7,
            Occurences: 0,
        },
        {
            Number: 8,
            Occurences: 0,
        },
        {
            Number: 9,
            Occurences: 0,
        }
    ];

    var count = 0;
    var currentMax = 0;
    for(var each in wholeThing) {
        myNumbers[parseInt(wholeThing[each])].Occurences++;
    }

    myNumbers = myNumbers.sort(function(a, b){
        if(a.Occurences > b.Occurences) return -1;
        if(a.Occurences < b.Occurences) return 1;
        return 0;
    });

    count = 0;
    while(count < 4){
        top5 += myNumbers[count].Number + ", ";
        count++;
    }
    top5 += myNumbers[4].Number;
    return top5;
}

function averageSalary(){
    var sum=0;
    count=0;
    for(var i in employeesList) {
        sum+=+employeesList[i].salary;count++;
    }
    return sum/count;
}

function sortID()
{
    var type = document.getElementById("typeSort").value;
    if (isNaN(type))
        return;
    if (type==1)
        employeesList = employeesList.sort(function(a, b){
            if(a.firstName < b.firstName) return -1;
            if(a.firstName > b.firstName) return 1;
            return 0;
        });
    if (type==2)
        employeesList = employeesList.sort(function(a, b){
            if(a.lastName < b.lastName) return -1;
            if(a.lastName > b.lastName) return 1;
            return 0;
        });
    if (type==3)
        employeesList = employeesList.sort(function(a, b){
            if(a.phone < b.phone) return -1;
            if(a.phone > b.phone) return 1;
            return 0;
        });
    if (type==4)
        employeesList = employeesList.sort(function(a, b){
            if(a.salary < b.salary) return -1;
            if(a.salary > b.salary) return 1;
            return 0;
        });
    showList();
}


function exercitiul5()
{
    var cuvant = document.getElementById("word").value;
    var myTable;
    if(!euroConversion) {
        myTable = '<table border="1" class = "table table-bordered">' +
            '<tr><th>First Name</th>' +
            '<th>Last Name</th>' +
            '<th>Phone</th>' +
            '<th>Salary</th>' +
            '<th>Vizualizare</th>' +
            '<th>Stergere</th></tr>';
        for (var i in employeesList) {
            var check = false;
            if (cuvant == employeesList[i].firstName)
                check = true;
            else if (cuvant == employeesList[i].lastName)
                check = true;
            else if (cuvant == employeesList[i].phone)
                check = true;
            else if (cuvant == employeesList[i].salary)
                check = true;
            if (check) {
                myTable += '<tr><td>' + employeesList[i].firstName +
                    '</td><td>' + employeesList[i].lastName +
                    '</td><td>' + employeesList[i].phone +
                    '</td><td>' + employeesList[i].salary +
                    '</td><td>' + '<button onclick="displayAlert(' + i + ')">Vizualizare</button>' +
                    '</td><td>' + '<button onclick="removeElemFromList(' + i + ')">Stergere</button>' + '</td></tr>';
            }
        }
        myTable += '<tr>' +
            '<td>' + getMostCommonName() + '</td>' +
            '<td>' + getNumberOfUniqueNames() + '</td>' +
            '<td>'+ top5numberOccurences() + '</td>' +
            '<td>'+ averageSalary() + '</td>' +
            '</tr>';
    }
    else {
        myTable = '<table border="1" class = "table table-bordered">' +
            '<tr>' +
            '<th>First Name</th>' +
            '<th>Last Name</th>' +
            '<th>Phone</th>' +
            '<th>Salary</th>' +
            '<th>euroValue</th>' +
            '<th>Vizualizare</th>' +
            '<th>Stergere</th>' +
            '</tr>';
        for (var i in employeesList) {
            var check = false;
            if (cuvant == employeesList[i].firstName)
                check = true;
            else if (cuvant == employeesList[i].lastName)
                check = true;
            else if (cuvant == employeesList[i].phone)
                check = true;
            else if (cuvant == employeesList[i].salary)
                check = true;
            else if (cuvant == (employeesList[i].salary / 4.5))
                check = true;
            if (check) {
                myTable += '<tr><td>' + employeesList[i].firstName +
                    '</td><td>' + employeesList[i].lastName +
                    '</td><td>' + employeesList[i].phone +
                    '</td><td>' + employeesList[i].salary +
                    '</td><td>' + employeesList[i].salary / 4.5 +
                    '</td><td>' + '<button onclick="displayAlert(' + i + ')">Vizualizare</button>' +
                    '</td><td>' + '<button onclick="removeElemFromList(' + i + ')">Stergere</button>' + '</td></tr>';
            }
        }
        myTable += '<tr>' +
            '<td>' + getMostCommonName() + '</td>' +
            '<td>' + getNumberOfUniqueNames() + '</td>' +
            '<td>'+ top5numberOccurences() + '</td>' +
            '<td>'+ averageSalary() + '</td>' +
            '</tr>';
    }

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function exercitiul5stil()
{
    var cuvant = document.getElementById("word").value;
    var myTable;
    if(!euroConversion) {
        myTable = '<table border="1" class = "table table-bordered">' +
            '<tr><th>First Name</th>' +
            '<th>Last Name</th>' +
            '<th>Phone</th>' +
            '<th>Salary</th>' +
            '<th>Vizualizare</th>' +
            '<th>Stergere</th></tr>';
        for (var i in employeesList) {
            var check = false;
            if (cuvant == employeesList[i].firstName)
                check = true;
            else if (cuvant == employeesList[i].lastName)
                check = true;
            else if (cuvant == employeesList[i].phone)
                check = true;
            else if (cuvant == employeesList[i].salary)
                check = true;
            if (check) {
                myTable += '<tr>';
            }else {
                myTable += '<tr style="display: NONE">';
            }

            myTable += '<td>' + employeesList[i].firstName +
                '</td><td>' + employeesList[i].lastName +
                '</td><td>' + employeesList[i].phone +
                '</td><td>' + employeesList[i].salary +
                '</td><td>' + '<button onclick="displayAlert(' + i + ')">Vizualizare</button>' +
                '</td><td>' + '<button onclick="removeElemFromList(' + i + ')">Stergere</button>' + '</td></tr>';
        }
        myTable += '<tr>' +
            '<td>' + getMostCommonName() + '</td>' +
            '<td>' + getNumberOfUniqueNames() + '</td>' +
            '<td>'+ top5numberOccurences() + '</td>' +
            '<td>'+ averageSalary() + '</td>' +
            '</tr>';
    }
    else {
        myTable = '<table border="1" class = "table table-bordered">' +
            '<tr>' +
            '<th>First Name</th>' +
            '<th>Last Name</th>' +
            '<th>Phone</th>' +
            '<th>Salary</th>' +
            '<th>euroValue</th>' +
            '<th>Vizualizare</th>' +
            '<th>Stergere</th>' +
            '</tr>';
        for (var i in employeesList) {
            var check = false;
            if (cuvant == employeesList[i].firstName)
                check = true;
            else if (cuvant == employeesList[i].lastName)
                check = true;
            else if (cuvant == employeesList[i].phone)
                check = true;
            else if (cuvant == employeesList[i].salary)
                check = true;
            else if (cuvant == (employeesList[i].salary / 4.5))
                check = true;
            if (check) {
                myTable += '<tr>';
            }else {
                myTable += '<tr style="display: NONE">';
            }

                myTable += '<td>' + employeesList[i].firstName +
                    '</td><td>' + employeesList[i].lastName +
                    '</td><td>' + employeesList[i].phone +
                    '</td><td>' + employeesList[i].salary +
                    '</td><td>' + employeesList[i].salary / 4.5 +
                    '</td><td>' + '<button onclick="displayAlert(' + i + ')">Vizualizare</button>' +
                    '</td><td>' + '<button onclick="removeElemFromList(' + i + ')">Stergere</button>' + '</td></tr>';
        }
        myTable += '<tr>' +
            '<td>' + getMostCommonName() + '</td>' +
            '<td>' + getNumberOfUniqueNames() + '</td>' +
            '<td>'+ top5numberOccurences() + '</td>' +
            '<td>'+ averageSalary() + '</td>' +
            '</tr>';
    }

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}
