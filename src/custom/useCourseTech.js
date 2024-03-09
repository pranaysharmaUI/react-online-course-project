//accept two params, object data and tech
//if in object technolgies has specific tech then return true else return false


function useCourseTech({data,tech})
{
   let output=false;
   for(let i=0;i<data.length;i++)
   {
    for(let j=0;j<tech.length;j++)
    {
        if(data[i] === tech[j])
        {
            output=true;
        }
    }
   }

   return output;
}

export default useCourseTech;