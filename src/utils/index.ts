export const groupTicketsByStatus = (tickets) => {
    return tickets.reduce((groups, ticket) => {
        groups[ticket.status] = groups[ticket.status] || [];
        groups[ticket.status].push(ticket);
        return groups;
    }, { "Backlog": [], "Todo": [], "In progress": [], "Done": [], "Canceled": [] });
};

export const groupTicketsByPriority = (tickets) => {
    return tickets.reduce((groups, ticket) => {
        const priority = getPriorityLabel(ticket.priority);
        groups[priority] = groups[priority] || [];
        groups[priority].push(ticket);
        return groups;
    }, { "No priority": [], "Low": [], "Medium": [], "High": [], "Urgent": [] });
};

export const groupTicketsByUserId = (tickets) => {
    return tickets.reduce((groups, ticket) => {
        groups[ticket.userId] = groups[ticket.userId] || [];
        groups[ticket.userId].push(ticket);
        return groups;
    }, {});
};

export const mapUsersByUserId = (users) => {
    return users.reduce((accumulator, user) => {
        accumulator[user.id] = user;
        return accumulator;
    }, {});
};

const getPriorityLabel = (priority) => {
    const labels = ["No priority", "Low", "Medium", "High", "Urgent"];
    return labels[priority] || "NA";
};

const orderByPriority = (tickets) => tickets.sort((a, b) => b.priority - a.priority);
const orderByTitle = (tickets) => tickets.sort((a, b) => a.title.localeCompare(b.title));

export const loadGrid = (tickets, grouping, ordering) => {
    const orderedTickets = ordering === "priority" ? orderByPriority(tickets) : orderByTitle(tickets);

    switch (grouping) {
        case "status":
            return groupTicketsByStatus(orderedTickets);
        case "priority":
            return groupTicketsByPriority(orderedTickets);
        case "user":
            return groupTicketsByUserId(orderedTickets);
        default:
            return groupTicketsByUserId(orderedTickets);
    }
};
