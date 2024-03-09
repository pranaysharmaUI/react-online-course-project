import { Suspense } from "react";


function useLazy(children)
{
    return <Suspense fallback="Loading...">{children}</Suspense>

}

export default useLazy;