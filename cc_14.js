// Task 2 - Support Tickets Dynamic Addition
function createSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById("ticketContainer");

   
    const ticketCard = document.createElement("div");
    ticketCard.classList.add("ticket-card");

    
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = customerName;

    
    const issueParagraph = document.createElement("p");
    issueParagraph.textContent = issueDescription;

    
    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority: ${priorityLevel}`;
    priorityLabel.classList.add(`priority-${priorityLevel.toLowerCase()}`); // Adds a class based on priority

    
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolve-button");

    
    resolveButton.addEventListener("click", () => {
        ticketCard.remove();
    });

    
    ticketCard.appendChild(nameHeading);
    ticketCard.appendChild(issueParagraph);
    ticketCard.appendChild(priorityLabel);
    ticketCard.appendChild(resolveButton);

    
    ticketContainer.appendChild(ticketCard);
}

createSupportTicket("Alice Johnson", "Cannot access account", "High");
createSupportTicket("Bob Smith", "Payment issue", "Medium");
createSupportTicket("Charlie Davis", "Slow website", "Low");