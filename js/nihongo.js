const hostIp = "http://localhost:8080/";

function getAnswer() {
    const userInput = document.getElementById("answer").value;
    fetch(hostIp + 'getAnswer' + "?input=" + userInput) // Use your actual endpoint here
        .then(response => response.json())
        .then((data) => {
            // Assuming 'data' is the map/object returned from the server
            const container = document.getElementById('result');
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
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById("result").textContent = "ERROR";
        });
}

function updateScores(){}

function getQuestion(){
    fetch(hostIp + 'getQuestion') // Use your actual endpoint here
        .then(response => response.json())
        .then((data) => {
            // Assuming 'data' is the map/object returned from the server
            const container = document.getElementById('question');
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
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById("result").textContent = "ERROR";
        });
}

function getStats(){
    fetch(hostIp + 'getStats') // Use your actual endpoint here
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => {
            // Assuming 'data' is the map/object returned from the server
            const container = document.getElementById('stats');
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