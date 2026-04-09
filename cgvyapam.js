// script.js

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector('.search-box button');
  const searchInput = document.querySelector('.search-box input');

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();

    if (query === '') {
      alert('Please enter a subject or topic.');
    } 
    else if (query.includes('pdf')) {
      window.location.href = 'pdf-notes.html';
    } 
    else if (query.includes('syllabus')) {
      window.location.href = 'syllabus.html';
    } 
    else if (query.includes('mock')) {
      window.location.href = 'mock-tests.html';
    } 
    else if (query.includes('current affairs')) {
      window.location.href = 'current-affairs.html';
    } 
    else if (query.includes('important questions')) {
      window.location.href = 'important-questions.html';
    } 
    else if (query.includes('science')) {
      window.location.href = 'science.html';
    } 
    else if (query.includes('mathematics')) {
      window.location.href = 'mathematics.html';
    } 
    else {
      alert('No matching result found.');
    }
  });
});

document.getElementById("syllabusBtn").addEventListener("click", function() {
  window.open(
    "https://drive.google.com/drive/folders/1UUkbgKldMV7ojhC2Mz0Tr_C8QRP4NLV6?usp=drive_link",
    "_blank"
  );
});
