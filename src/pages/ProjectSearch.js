import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import { useProjectSearch } from "../custom/useSearch";
import '../components/css/DetailPage.css';

function ProjectSearch(props)
{
    const {hash}=useLocation();
    const searchText=decodeURIComponent(hash ? hash.split('#')[1] : '');
    const searchItem=useProjectSearch(searchText);
    return(
        <div className="course-detail-container">
            <Banner title="Project Search"/>
            <div className="search-container">
                {
                    searchItem === '' ? <p>No results found</p> : searchItem
                }
            </div>
        </div>
    )
}


export default ProjectSearch;