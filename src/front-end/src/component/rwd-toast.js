import { useEffect, useState } from "react"

export default () => {

    const [screenWidth, setScreenWidth] = useState(null)
    const [toastClassName, setToastClassName] = useState('d-none')

    useEffect(() => {
        setScreenWidth(window.innerWidth)

        window.addEventListener('resize', widthEvent)

        return () => window.removeEventListener('resize')
    }, [])

    useEffect(() => {
        if (screenWidth && screenWidth <= 421) {
            setToastClassName('rwd-toast')
        }
    }, [screenWidth])

    function widthEvent() {
        setScreenWidth(window.innerWidth)
    }

    return (
        <div className={toastClassName}>建議使用電腦顯示器瀏覽才有最佳體驗！</div>
    )
}