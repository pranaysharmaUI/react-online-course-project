function useCategory(data)
{
    let output=data.map(({ category }) => ({ category }));
    let obj={};

    for(let i=0;i<output.length;i++)
    {
        if(obj[output[i].category])
        {
            continue;
        }
        else
        {
            obj[output[i].category]=1;
        }
    }

    

    return Object.keys(obj);

}

export default useCategory;