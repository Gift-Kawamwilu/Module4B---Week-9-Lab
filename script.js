// WEEK 9 LAB — Talking to the Page: DOM, Events & Validation

// TASK 01 — GRAB & CHANGE
const pageHeading = document.querySelector('h1');
const aboutParagraph = document.querySelector('#about-text');

pageHeading.textContent = 'Gift Kawamwilu — Welcome!';
aboutParagraph.style.color = '#ffcc12'; 

// TASK 02 — CLICK COUNTER
const countBtn = document.querySelector('#count-btn');
const countSpan = document.querySelector('#click-count');

let clickCount = 0;

countBtn.addEventListener('click', function () {
  clickCount = clickCount + 1;      
  countSpan.textContent = clickCount;
});

// TASK 03 — TOGGLE A THEME
const themeToggleBtn = document.querySelector('#theme-toggle');

themeToggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark');

// dark mode switch button
  const isDark = document.body.classList.contains('dark');
  themeToggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// TASK 04 — BUILD A LIST FROM DATA
let courses = [
  'Internet & Web Programming (CS 361)',
  'Object Oriented Programming (CS 350)',
  'Probability, Statistics & Discrete Structures (CS 320)',
  'Data Structures & Algorithms (CS 240)',
  'Database Systems (CS 330)'
];

const courseList = document.querySelector('#course-list');
const searchInput = document.querySelector('#search-input');
const addCourseBtn = document.querySelector('#add-course-btn');

function renderCourses(listToRender) {

  courseList.innerHTML = listToRender
    .map(function (course) {
      return '<li>' + course + '</li>';
    })
    .join('');
}

//full list of courses 
renderCourses(courses);

// Add  course" button 
let nextCourseNumber = 1;
addCourseBtn.addEventListener('click', function () {
  const newCourseName = 'New Elective ' + nextCourseNumber;
  nextCourseNumber = nextCourseNumber + 1;

  courses.push(newCourseName);

  //  DOM node
  const li = document.createElement('li');
  li.textContent = newCourseName;
  courseList.appendChild(li);
});

// TASK 05 — LIVE SEARCH FILTER
searchInput.addEventListener('input', function () {
  const typedText = searchInput.value.toLowerCase();

  const filteredCourses = courses.filter(function (course) {
    return course.toLowerCase().includes(typedText);
  });

  renderCourses(filteredCourses);
});

// TASK 06 — VALIDATE A FORM
const signupForm = document.querySelector('#signup-form');
const nameInput = document.querySelector('#signup-name');
const emailInput = document.querySelector('#signup-email');
const formMessage = document.querySelector('#form-message');

signupForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  formMessage.classList.remove('error', 'success');

  if (nameValue === '') {
    formMessage.textContent = 'Please enter your name.';
    formMessage.classList.add('error');
    return;
  }

  if (!emailValue.includes('@')) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.classList.add('error');
    return;
  }

  formMessage.textContent = 'Signed up successfully! Welcome, ' + nameValue + '.';
  formMessage.classList.add('success');
  signupForm.reset();
});
