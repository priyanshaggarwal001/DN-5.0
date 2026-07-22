import React from "react";

function UserPage() {
    return (
        <div>
            <h2>Welcome User!</h2>

            <h3>Flight Booking</h3>

            <ul>
                <li>Delhi → Mumbai</li>
                <li>Bangalore → Chennai</li>
                <li>Hyderabad → Kolkata</li>
            </ul>

            <button>Book Ticket</button>
        </div>
    );
}

export default UserPage;