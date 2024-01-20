import { useContext } from "react";
import AppContext from "../context/AppContext";
import Banner from "../components/Banner";
import ComponentSection from "../components/ComponentSection";
import Course from "../components/Course";

function Courses(props)
{
    const context=useContext(AppContext);
    return(
        <div className="container">
            <Banner title="Courses" />
            <ComponentSection title="All Courses">
            <div className="course-container">
                {
                    context.courses.length > 0 ?
                    context.courses.map((item,index) =>
                    (
                        <Course key={item.id} data={item} />
                    ))
                    : null
                }

            </div>
            </ComponentSection>
        </div>
    )
}

export default Courses;