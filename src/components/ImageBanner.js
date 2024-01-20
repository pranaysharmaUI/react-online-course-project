import './css/Banner.css';
import Banner from '../assets/img/banner.jpg';

function ImageBanner({img=Banner})
{
    return(
        <div className="banner-container image">
            <img src={img} alt='Banner' />
        </div>
    )
}

export default ImageBanner;