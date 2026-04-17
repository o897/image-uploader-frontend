
function PlatformFilter() {


    const handlePlatfrmClick = async () => {
        const response = await fetch("https://oraserver.online/media/youtube/likes", {
            credentials : "include"
        });

        const data = await response.json()
        console.log(data)
    }
    return (

        <section className="home_platforms">
            <a className="home-all-med">
                All
            </a>
            <div className="row" onClick={handlePlatfrmClick}>
                <img src="https://icon2.cleanpng.com/20180408/lbe/kisspng-dock86-computer-icons-management-clip-art-circulo-5ac9c70b3b2112.9917973515231731312422.jpg" />
                <p>Youtube liked</p><span className="med-count">90k</span>
            </div>
            <div className="row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qA65lbq7b6F7V-uQXDfHnTtyCLC4M_Zj1Q&s" />
                <p>Netflix Moments</p>
                <span className="med-count">120k</span>
            </div>
        </section>

    )

}

export default PlatformFilter;
