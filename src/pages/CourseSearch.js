import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import {useCourseSearch} from "../custom/useSearch";
import '../components/css/DetailPage.css';

function CourseSearch(props)
{
    const {hash}=useLocation();
    const searchText=decodeURIComponent(hash ? hash.split('#')[1] : '');
    const searchItem=useCourseSearch(searchText);
    return(
        <div className="course-detail-container">
            <Banner title="Course Search"/>
            <div className="search-container">
                {
                    searchItem === '' ? <p>No results found</p> : searchItem
                }
            </div>
        </div>
    )
}


export default CourseSearch;