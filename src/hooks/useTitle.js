import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} || Leader Tex BD`;
    },[title])
}

export default useTitle;