import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
    return (
        <div>
            <CalculateScore
                name="Priyansh Aggarwal"
                school="VIT Bhopal University"
                total={450}
                goal={5}
            />
        </div>
    );
}

export default App;