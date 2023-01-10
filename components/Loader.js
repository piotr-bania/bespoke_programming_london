import { useRouter, useEffect } from 'next/router'
import { CircleLoader } from 'react-spinners'

const Page = () => {
const router = useRouter()
const [showLoader, setShowLoader] = React.useState(false)

useEffect(() => {
const timer = setTimeout(() => {
setShowLoader(true)
    }, 2000) // 2-second delay
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="page-loader">
            {router.isLoading || showLoader ? (
            <CircleLoader size={50} color="#123abc" />
            ) : (
            <div>Page content goes here</div>
            )}
        </div>
    )
}

export default Page