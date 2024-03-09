import { useSearchParams } from "react-router-dom";
import Banner from "../components/Banner";
import { useAppContext } from "../context/AppContext";

function CourseSearch(props)
{
    const [searchParam,setSearchParam]=useSearchParams();
    const {courses}=useAppContext();
    return(
        <div className="course-detail-container">
            <Banner title="Course Search"/>
            <div className="course-container">
                {
                }
            </div>
        </div>
    )
}


export default CourseSearch;