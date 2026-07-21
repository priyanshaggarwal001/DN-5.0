import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 85 },
        { name: "Rohit Sharma", score: 95 },
        { name: "Shubman Gill", score: 72 },
        { name: "KL Rahul", score: 65 },
        { name: "Hardik Pandya", score: 80 },
        { name: "Ravindra Jadeja", score: 68 },
        { name: "Rishabh Pant", score: 90 },
        { name: "Mohammed Shami", score: 55 },
        { name: "Jasprit Bumrah", score: 78 },
        { name: "Kuldeep Yadav", score: 60 },
        { name: "Mohammed Siraj", score: 75 }
    ];

    return (
        <div>
            <h2>List of Players</h2>

            {
                players.map((player, index) => (
                    <p key={index}>
                        {player.name} - {player.score}
                    </p>
                ))
            }

            <h2>Players with Score Below 70</h2>

            {
                players
                    .filter(player => player.score < 70)
                    .map((player, index) => (
                        <p key={index}>
                            {player.name} - {player.score}
                        </p>
                    ))
            }
        </div>
    );
}

export default ListofPlayers;