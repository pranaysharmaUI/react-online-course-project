import { Link } from 'react-router-dom';
import './css/Course.css';

function Course({data})
{
    return(
        <div className="course-box">
            <div className="course-box-image">
                <img src={data.img} alt='Course ' />
                
            </div>
            <div className="course-box-content">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div className='course-box-info'>
                    <p>Duration: {data.duration}hrs</p>
                    <span className='detail-link'>
                    <Link to="/" >More Detail</Link>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Course;