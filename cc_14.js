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

createSupportTicket("Boris Johnson", "No payment", "Medium");
createSupportTicket("Donald Trump", "Payment issues", "High");
createSupportTicket("Justin Trudeau", "Webiste Crashes", "Low");

//Task 3 - Highlighting High Priority Tickets

function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll(".priority-high");

    const ticketArray = Array.from(highPriorityTickets);

    ticketArray.forEach(ticket => {
        ticket.style.backgroundColor = "red"; 
        ticket.style.color = "white"; 
        ticket.style.fontWeight = "bold";
        ticket.style.border = "3px solid darkred";
        ticket.style.padding = "10px";
        ticket.style.borderRadius = "5px";
    });
}

highlightHighPriorityTickets();

//Task 4 