import useBreakpoints from "./useBreakpoints.js";
import HeroImage from "./HeroImage.js"

const Header = () => {

        const {isXs, isSm, isMd, isLg, active} = useBreakpoints();

        if(active == 'xs'){
            return(
            <div style={headerStyleXs}>
                <HeroImage />
                <div style={logoAndNameXs}>
                    <img id="headerLogo" src="/Users/christopherhancock/CSC NSC/nsc_club_website/club_website/src/components/assets/North_Seattle_College_Logo_2.jpeg"/>
                    <div id="headerName"> 
                        <div>North Seattle College</div>
                        <div>Computer Science Club</div>
                    </div>
                    <div>Home</div>
                    <div>Resources</div>
                    <div>Events</div>
                    <div>News</div>
                    <div>Join The Club</div>
                </div>
            </div >
            )
    
        } else {
            return(
                <div style={headerStyle}>
                {console.log("active", active)}
                <div style={logoAndName}>
                    <img id="headerLogo" src="/Users/christopherhancock/CSC NSC/nsc_club_website/club_website/src/components/assets/North_Seattle_College_Logo_2.jpeg"/>
                    <div id="headerName"> 
                        <div>North Seattle College</div>
                        <div>Computer Science Club</div>
                    </div>
                    <div>Home</div>
                    <div>Resources</div>
                    <div>Events</div>
                    <div>News</div>
                    <div>Join The Club</div>
                </div>
            </div >
            )
        }
    
}
    // xs 
    const headerStyleXs = {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 'Large',
        backgroundColor: 'blue',
        margin: '0px 0px',
        height: '100px'
    }
    
    const logoAndNameXs = {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1.4em'
    }
    
    
    // large
    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 'Large',
        backgroundColor: 'blue',
        margin: '0px 0px',
        height: '100px'
    }
    
    const logoAndName = {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1.8vw'
    }


export default Header;