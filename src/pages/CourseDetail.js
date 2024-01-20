import '../components/css/DetailPage.css';
import Banner from "../components/Banner";
import { useLocation } from 'react-router-dom';

function CourseDetail(props)
{
    const location=useLocation();
    const {img,title,description,technologies}=location.state
    return(
        <div className="course-detail-container">
            <Banner title="Course Detail"/>
            <div className='course-detail-main'>
            <div className='course-detail-image'>
                <img src={img} alt="Course" />


            </div>
            <div className='course-detail-content'>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                    {
                        technologies.length > 0 ?
                        technologies.map((item,index) =>
                        {
                            return(<li key={index}>{item}</li>)
                        })
                        : null
                    }
                </ul>

            </div>
            </div>
        </div>
    )
}


export default CourseDetail;