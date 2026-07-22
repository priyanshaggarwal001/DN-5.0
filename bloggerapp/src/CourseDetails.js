import React from "react";

function CourseDetails() {

    const courses = [

        {
            id: 1,
            name: "React",
            duration: "3 Months"
        },

        {
            id: 2,
            name: "Java",
            duration: "6 Months"
        }

    ];

    return (

        <div>

            <h2>Course Details</h2>

            <ul>

                {

                    courses.map(course => (

                        <li key={course.id}>
                            {course.name} - {course.duration}
                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default CourseDetails;