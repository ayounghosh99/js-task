"use strict"

const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const preferredName = firstName + lastName;
// const email = document.getElementById('email');
// const jobTitle = document.getElementById('job-title');
// const office = document.getElementById('office');
// const department = document.getElementById('department');
// const phoneNumber = document.getElementById('phone-number');
// const skypeId = document.getElementById('skype-id');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const searchBar = document.getElementById('search-bar');
const clear = document.getElementById('clear');
const updateButton = document.getElementById('update-button');
// var originalForm = $("form").html();
// const alphabet = document.getElementsByClassName("alphabet");
let employees = [];

// console.log(employees);

// function updateDetails()
// {
// 	alert('Ayoun');
// }

// function displayEmployeeDetails(data){
// 	employees = JSON.parse(localStorage.getItem('EmployeeList'));
// 	let dom = new DOMParser().parseFromString(data, 'text/html');
// 	const modal = document.getElementById('modal');
// 	if(modal==null) return;
// 	document.getElementById('title').innerHTML = "Edit Details";
// 	document.getElementById('first-name').value = 'khuvkuydvu';
// 	document.getElementById('last-name').value = 'Ghosh';
// 	document.getElementById('submit-button').style.display = 'none';
// 	document.getElementById('form').innerHTML += "<input id='preferredname' name='preferred-name' type='text' placeholder='Enter Preferred Name' value='"
// 	+dom.getElementsByTagName('h4')[0].innerHTML+
// 	"'>";
// 	document.getElementById('form').innerHTML += "<button id='update-button' type='button' onclick='updateDetails()'>Update</button>"
// 	modal.classList.add('active');
// 	overlay.classList.add('active');

// }



function filterOffice(filtervalue){
	// console.log(filtervalue);
	const search_string = filtervalue;  //e.target.innerHTML
    // const filter_string = document.getElementById('office').id;// get value from filter 
    // console.log(search_string, filter_string);
    displayEmployees(search('office', search_string));
}

function filterJobTitle(filtervalue){
	const search_string = filtervalue;  //e.target.innerHTML
    // const filter_string = document.getElementById('jobtitle').id;// get value from filter 
    // console.log(search_string, filter_string);
    displayEmployees(search('jobtitle', search_string));
}

function filterDepartment(filtervalue){
	const search_string = filtervalue;  //e.target.innerHTML
    // const filter_string = document.getElementById('department').id;// get value from filter 
    // console.log(search_string, filter_string);
    displayEmployees(search('department', search_string));
}

function filterData(filtervalue){
	// console.log(filtervalue);
	// console.log(document.getElementById('filter').value);
	const search_string = filtervalue;  //e.target.innerHTML
    const filter_string = document.getElementById('filter').value;// get value from filter 
    displayEmployees(search(filter_string, search_string));
}

searchBar.addEventListener('keyup', e=>{
    const search_string = e.target.value;  //e.target.innerHTML
    const filter_string = document.getElementById('filter').value;// get value from filter 
    displayEmployees(search(filter_string, search_string));
});

clear.addEventListener('click', e=>{
	searchBar.value = '';
	displayEmployees(employees);
});

function search(field, value){
	console.log(field, value);
return employees.filter( employee=> employee[field].toLowerCase().includes(value.toLowerCase())) || [] 
}

function displayEmployees(employees){
	if(employees!= null)
    {
    document.getElementById('employee').innerHTML = '';
    for(let i = 0; i < employees.length; ++i){
    document.getElementById('employee').innerHTML += "<div class='flex-row employee'  onclick='displayEmployeeDetails(this.innerHTML)'>" +
    "<div>"+
    "<img src='assets/img/profile/andy_philips.jpg' alt='Andrew Philips' width='55' height='70'>"+
    "</div>" +
    "<div class='h-container'>"+
    "<h4 class='m-0'>" + 
    employees[i].preferredname + 
    "</h4>"+
    "<h5 class='m-0'>" + 
    employees[i].jobtitle + 
    "</h5>"+
    "<h5 class='m-0'>" + 
    employees[i].department + 
    "</h5>"+
    "<div class='flex-row i-container'>"+
    "<i class='fas fa-phone-square-alt'></i>"+
    "<i class='fas fa-envelope'></i>"+
    "<i class='fas fa-comment'></i>"+
    "<i class='fas fa-star'></i>"+
    "<i class='fas fa-heart'></i>"+
    "</div>"
    "</div>"+
    "</div>";
    }
}
}

// console.log(searchBar);
// searchBar.addEventListener('keyup', (e)=> {
// 	const searchString = e.target.value;
// 	const filteredCharacters = employees.filter( character => {
// 		return character.preferredname.contains(searchString);
// 	});
// });

function getEmployees(){
    employees = JSON.parse(localStorage.getItem('EmployeeList'));
    displayEmployees(employees);
    // document.getElementById('card').innerHTML = "";
//     if(employees!= null)
//     {
//     for(let i = 0; i < employees.length; ++i){
//     document.getElementById('employee').innerHTML += "<div class='flex-row employee'  onclick='displayEmployeeDetails(this.innerHTML)'>" +
//     "<div>"+
//     "<img src='assets/img/profile/andy_philips.jpg' alt='Andrew Philips' width='55' height='70'>"+
//     "</div>" +
//     "<div class='h-container'>"+
//     "<h4 class='m-0'>" + 
//     employees[i].preferredname + 
//     "</h4>"+
//     "<h5 class='m-0'>" + 
//     employees[i].jobtitle + 
//     "</h5>"+
//     "<h5 class='m-0'>" + 
//     employees[i].department + 
//     "</h5>"+
//     "<div class='flex-row i-container'>"+
//     "<i class='fas fa-phone-square-alt'></i>"+
//     "<i class='fas fa-envelope'></i>"+
//     "<i class='fas fa-comment'></i>"+
//     "<i class='fas fa-star'></i>"+
//     "<i class='fas fa-heart'></i>"+
//     "</div>"
//     "</div>"+
//     "</div>";
//     }
// }
}

function updateCounters(){
	employees = JSON.parse(localStorage.getItem('EmployeeList'));
	if(employees != null)
	{
		const it = employees.reduce((acc, cur) => cur.department == "IT" ? ++acc : acc, 0);
		document.getElementById('it').innerHTML = "IT (" + it + ")";		
		const humanResource = employees.reduce((acc, cur) => cur.department == "Human Resources" ? ++acc : acc, 0);
		document.getElementById('humanResource').innerHTML = "Human Resources (" + humanResource + ")";
		const md = employees.reduce((acc, cur) => cur.department == "MD" ? ++acc : acc, 0);
		document.getElementById('md').innerHTML = "MD (" + md + ")";
		const sales = employees.reduce((acc, cur) => cur.department == "Sales" ? ++acc : acc, 0);
		document.getElementById('sales').innerHTML = "Sales (" + sales + ")";
		const Seattle = employees.reduce((acc, cur) => cur.office == "Seattle" ? ++acc : acc, 0);
		document.getElementById('Seattle').innerHTML = "Seattle (" + Seattle + ")";
		const India = employees.reduce((acc, cur) => cur.office == "India" ? ++acc : acc, 0);
		document.getElementById('India').innerHTML = "India (" + India + ")";
		const spa = employees.reduce((acc, cur) => cur.jobtitle == "SharePoint Practise Head" ? ++acc : acc, 0);
		document.getElementById('spa').innerHTML = "SharePoint Practise Head (" + spa + ")";
		const ndl = employees.reduce((acc, cur) => cur.jobtitle == ".Net Development Lead" ? ++acc : acc, 0);
		document.getElementById('ndl').innerHTML = ".Net Development Lead (" + ndl + ")";
		const re = employees.reduce((acc, cur) => cur.jobtitle == "Recruiting Expert" ? ++acc : acc, 0);
		document.getElementById('re').innerHTML = "Recruiting Expert (" + re + ")";
		const bid = employees.reduce((acc, cur) => cur.jobtitle == "BI Developer" ? ++acc : acc, 0);
		document.getElementById('bid').innerHTML = "BI Developer (" + bid + ")";
		const ba = employees.reduce((acc, cur) => cur.jobtitle == "Business Analyst" ? ++acc : acc, 0);
		document.getElementById('ba').innerHTML = "Business Analyst (" + ba + ")";
	}
}

// function displayPageContents(){
//     displayEmployees()
//     // createDepartmentList();
//     // createOfficeList();
//     // createTitleList();
// }

window.onload = function() {
	getEmployees();
	updateCounters();
};

function displayEmployee(){
    let employeeList = JSON.parse(localStorage.getItem('EmployeeList'));
    document.getElementById('employee').innerHTML += "<div class='flex-row employee'  onclick='displayEmployeeDetails(this.innerHTML)'>" +
    "<div>"+
    "<img src='assets/img/profile/andy_philips.jpg' alt='Andrew Philips' width='55' height='70'>"+
    "</div>" +
    "<div class='h-container'>"+
    "<h4 class='m-0'>" + 
    employeeList[employeeList.length-1].preferredname + 
    "</h4>"+
    "<h5 class='m-0'>" + 
    employeeList[employeeList.length-1].jobtitle + 
    "</h5>"+
    "<h5 class='m-0'>" + 
    employeeList[employeeList.length-1].department + 
    "</h5>"+
    "<div class='flex-row i-container'>"+
    "<i class='fas fa-phone-square-alt'></i>"+
    "<i class='fas fa-envelope'></i>"+
    "<i class='fas fa-comment'></i>"+
    "<i class='fas fa-star'></i>"+
    "<i class='fas fa-heart'></i>"+
    "</div>"
    "</div>"+
    "</div>";
}

const addEmployee = (emp) => {
	// console.log(document.getElementById('department').value);
	emp.preventDefault();
	let employee = {
		id: Date.now(),
		firstname: document.getElementById('first-name').value,
		lastname: document.getElementById('last-name').value,
		preferredname: document.getElementById('first-name').value + ' ' + document.getElementById('last-name').value,
		email: document.getElementById('email').value,
		jobtitle: document.getElementById('job-title').value,
		office: document.getElementById('office').value,
		department: document.getElementById('department').value,
		phonenumber: document.getElementById('phone-number').value,
		skypeid: document.getElementById('skype-id').value
	}
	console.log(employee);
	if(localStorage.getItem('EmployeeList') == null)
    {
        localStorage.setItem('EmployeeList', '[]');
    }
	employees = JSON.parse(localStorage.getItem('EmployeeList'));
	employees.push(employee);
	document.forms[0].reset();
	console.warn('added', {employees});
	// let pre = document.querySelector('#employee pre');
	// pre.textContent = '\n' + JSON.stringify(employees, '\t', 2);

	localStorage.setItem('EmployeeList', JSON.stringify(employees) );

	displayEmployee();
	updateCounters();
	// window.location.reload();
}


form.addEventListener('submit', (e)=> {
	let messages = [];
	errorElement.innerText = '';
	if(!/^[a-zA-Z]*$/g.test(document.getElementById('first-name').value)) {
		messages.push('Please Enter a valid First Name');
	}

	if(!/^[a-zA-Z]*$/g.test(document.getElementById('last-name').value)) {
		messages.push('Please Enter a valid Last Name');
	}

	if(document.getElementById('phone-number').value.length != 10) {
		messages.push('Phone Number must have 10 digits');
	}

	if(messages.length == 0)
	{
		addEmployee(event);
	}

	else if(messages.length > 0)
	{
		e.preventDefault();
		errorElement.innerText = messages.join('\n ');
		errorElement.style.color = "red";
	}

})

openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		// $("form").html(originalForm);
		openModal(modal);
	})
})

overlay.addEventListener('click', ()=> {
	const modals = document.querySelectorAll('.modal.active');
	modals.forEach(modal => {
		// $("form").html(originalForm);
		closeModal(modal);
	})
})

closeModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal');
		// $("form").html(originalForm);
		closeModal(modal);
	})
})

function openModal(modal) {
	if(modal==null) return;
	modal.classList.add('active');
	overlay.classList.add('active');
}

function closeModal(modal) {
	if(modal==null) return;
	modal.classList.remove('active');
	overlay.classList.remove('active');
}

// form.addEventListener('submit', addEmployee);