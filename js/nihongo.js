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

function getQuestion(){
    fetch(hostIp + 'getQuestion') // Use your actual endpoint here
        .then(response => response.json())
        .then((data) => {
            // Assuming 'data' is the map/object returned from the server
            const container = document.getElementById('question');
            container.innerHTML = ''; // Clear previous contents
            const answer = document.getElementById('answer');
            answer.value = ''; // Clear previous contents

            const row = document.createElement('div'); // Create a new div as a row
            const order = ["pickMode", "category"];
            // Assuming `data` is your object
            for (const key of order) {
                const value = data[key];
                // Create a new label element
                const label = document.createElement('label');
                // Set the text of the label
                label.textContent = `${key}: ${value}`;
                // Append the label to the row
                row.appendChild(label);

                // Optional: Add a separator (e.g., comma, space) between labels
                row.appendChild(document.createTextNode(', ')); // Adds a comma and a space

            }
            let correctAnswers = data["correctlyAnswered"];
            let totalAnswered = data["totalAnswered"];
            const label = document.createElement('label');
            label.textContent = `accuracy: ${correctAnswers}/${totalAnswered}`;
            // Append the label to the row
            row.appendChild(label);
            container.appendChild(row);

            const questionLabel = document.createElement('label');
            let question = data["question"];
            questionLabel.textContent = `question: ${question}`;
            questionLabel.style.fontSize = '24px';
            // Finally, append the row to the container
            container.appendChild(questionLabel);

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

            // Assuming 'container' is the div where you want to add the labels
            const row = document.createElement('div'); // Create a new div as a row
            const order = ["vocabularySize", "globalSuccessRate", "trueInARowRecord"];
            // Iterate over each entry in the object
            for (const key of order) {
                const value = data[key];
                // Create a new label element
                const label = document.createElement('label');
                // Set the text of the label
                label.textContent = `${key}: ${value}`;
                // Append the label to the row
                row.appendChild(label);

                // Optional: Add a separator (e.g., comma, space) between labels
                row.appendChild(document.createTextNode(', ')); // Adds a comma and a space

            }

            // Finally, append the row to the container
            container.appendChild(row);

        })
        .catch(error => console.error('Error fetching stats:', error));

}