import './css/Section.css';

function ComponentSection({title="Section Title",children,className})
{
    return(
        <section className={"container-section "}>
            <div className='container-section-heading'>
            <h2>{title}</h2>
            </div>
            <div className={className}>
            {
                children
            }
            </div>

        </section>
    )
}

export default ComponentSection;