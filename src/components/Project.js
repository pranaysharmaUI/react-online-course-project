import './css/Project.css';

function Project({data})
{
    return(
        <div className="project-box">
            <div className="project-box-image">
                <img src={data.img} alt='Course ' />
                
            </div>
            <div className="project-box-content">
                <h3>{data.title}</h3>
                <p>{data.description}</p>

            </div>
            <div className='project-box-label'>
            <button type='button' className='btn btn-primary'>
                {
                    data.experience
                }
            </button>
            </div>
        </div>
    )
}

export default Project;