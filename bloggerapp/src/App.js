import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = false;

    // Element Variable
    let courseComponent;

    if (showCourses) {
        courseComponent = <CourseDetails />;
    }

    return (

        <div style={{ padding: "20px" }}>

            <h1>Blogger App</h1>

            {/* IF using &&
            */}

            {showBooks && <BookDetails />}

            <hr />

            {/* Ternary Operator */}

            {

                showBlogs
                    ? <BlogDetails />
                    : <h3>No Blogs Available</h3>

            }

            <hr />

            {/* Element Variable */}

            {courseComponent}

        </div>

    );

}

export default App;