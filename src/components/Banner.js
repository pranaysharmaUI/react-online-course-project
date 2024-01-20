import './css/Banner.css';

function Banner({title='Title comes here'})
{
    return(
        <div className="banner-container">
            <h1>{title}</h1>
        </div>
    )
}

export default Banner;