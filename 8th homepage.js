function uploadFile() {
  const fileInput = document.getElementById('fileUpload');
  if (fileInput.files.length > 0) {
    alert("Homework submitted successfully!");
  } else {
    alert("Please choose a file first.");
  }
}

function submitQuery() {
  const query = document.getElementById('queryInput').value;
  if (query.trim() !== "") {
    alert("Query submitted successfully!");
    document.getElementById('queryInput').value = "";
  } else {
    alert("Please write your query before submitting.");
  }
}
