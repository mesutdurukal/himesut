function checkAnswer() {
    const userInput = document.getElementById("answer").value;
    fetch('http://10.211.106.65:8080/getMyName') // Use your actual endpoint here
        .then(response => response.text())
        .then((data) => {
            if (data.toUpperCase() === userInput.toUpperCase()) {
                document.getElementById("result").textContent = "TRUE";
            } else {
                document.getElementById("result").textContent = "FALSE";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById("result").textContent = "ERROR";
        });
}

function getQuestion(){
    document.getElementById("question").textContent = "Next Question";
}

function getStats(){
    fetch('http://10.211.106.65:8080/getStats') // Use your actual endpoint here
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => {
            // Assuming 'data' is the map/object returned from the server
            const container = document.getElementById('stats');
            container.textContent = data;
            container.innerHTML = ''; // Clear previous contents

            // Iterate over each entry in the object
            for (const [key, value] of Object.entries(data)) {
                // Create a new label element
                const label = document.createElement('label');
                // Set the text of the label
                label.textContent = `${key}: ${value}`;
                // Append the label to the container
                container.appendChild(label);
                // Optional: add a line break for readability
                container.appendChild(document.createElement('br'));
            }
        })
        .catch(error => console.error('Error fetching stats:', error));

}