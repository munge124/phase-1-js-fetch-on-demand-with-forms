const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page refresh
      const input = document.querySelector("input#searchByID");
      const userInput = input.value; // Get user input
  
      // Fetch movie data based on user input
      fetch(`http://localhost:3000/movies/${userInput}`)
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => {
          // Update the DOM with the fetched data
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        });
    });

    fetch(`http://localhost:3000/movies/${userInput}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Movie not found");
    }
    return response.json();
  })
  .then((data) => {
    const title = document.querySelector("section#movieDetails h4");
    const summary = document.querySelector("section#movieDetails p");

    title.innerText = data.title;
    summary.innerText = data.summary;
  })
  .catch((error) => {
    console.error("Error:", error);
    alert("Movie not found. Please enter a valid ID.");
  });
}

document.addEventListener('DOMContentLoaded', init);