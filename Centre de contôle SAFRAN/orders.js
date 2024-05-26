function addOrder() {
    const programme = document.getElementById('programme').value;
    const ordre = document.getElementById('ordre').value;
    const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    const types = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value).join(', ');

    if (programme && ordre && types) {
        const table = document.getElementById('ordersTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        newRow.insertCell(0).innerText = programme;
        newRow.insertCell(1).innerText = ordre;
        newRow.insertCell(2).innerText = types;
        const statusCell = newRow.insertCell(3);
        statusCell.innerText = "ongoing";
        statusCell.className = "status-ongoing";

        const actionCell = newRow.insertCell(4);
        const updateButton = document.createElement('button');
        updateButton.innerText = "Complete";
        updateButton.className = "update-status-btn";
        updateButton.onclick = function() {
            if (statusCell.innerText === "ongoing") {
                statusCell.innerText = "completed";
                statusCell.className = "status-completed";
                updateButton.innerText = "Ongoing";
                updateButton.className = "update-status-btn completed";
            } else {
                statusCell.innerText = "ongoing";
                statusCell.className = "status-ongoing";
                updateButton.innerText = "Complete";
                updateButton.className = "update-status-btn";
            }
        };
        actionCell.appendChild(updateButton);

        // Clear input fields after adding the row
        document.getElementById('programme').value = '';
        document.getElementById('ordre').value = '';
        checkboxes.forEach(checkbox => checkbox.checked = false);
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}
