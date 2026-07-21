import officeImage from "./office.jpg";
import "./App.css";

function App() {

    // Single Office Object
    const office = {
        name: "Cognizant Office",
        rent: 55000,
        address: "Bangalore"
    };

    // List of Office Objects
    const offices = [

        {
            name: "Infosys",
            rent: 45000,
            address: "Pune"
        },

        {
            name: "TCS",
            rent: 70000,
            address: "Hyderabad"
        },

        {
            name: "Wipro",
            rent: 60000,
            address: "Chennai"
        }

    ];

    return (

        <div style={{ padding: "20px" }}>

            <h1>Office Space Rental App</h1>

            <img
                src={officeImage}
                alt="Office"
                width="400"
            />

            <h2>Single Office Details</h2>

            <p>
                <b>Name:</b> {office.name}
            </p>

            <p
                style={{
                    color:
                        office.rent < 60000
                            ? "red"
                            : "green"
                }}
            >
                <b>Rent:</b> ₹{office.rent}
            </p>

            <p>
                <b>Address:</b> {office.address}
            </p>

            <hr />

            <h2>Office List</h2>

            {

                offices.map((item,index)=>

                    <div key={index}>

                        <p><b>Name:</b> {item.name}</p>

                        <p
                            style={{
                                color:
                                    item.rent < 60000
                                        ? "red"
                                        : "green"
                            }}
                        >
                            <b>Rent:</b> ₹{item.rent}
                        </p>

                        <p><b>Address:</b> {item.address}</p>

                        <hr/>

                    </div>

                )

            }

        </div>

    );

}

export default App;