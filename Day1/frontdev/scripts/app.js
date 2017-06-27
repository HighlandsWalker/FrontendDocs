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