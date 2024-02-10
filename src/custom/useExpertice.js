function useExpertice(data)
{
    let output=data.map(({ experience }) => ({ experience }));
    let obj={};

    for(let i=0;i<output.length;i++)
    {
        if(obj[output[i].experience])
        {
            continue;
        }
        else
        {
            obj[output[i].experience]=1;
        }
    }

    

    return Object.keys(obj);

}

export default useExpertice;