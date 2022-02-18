import react from 'react' 
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import WorkIcon from '@mui/icons-material/Work';

export default function AppBar(){
    const AppBarStyle={display:"grid",gridTemplateColumns:"4fr 1fr",height:"50px",backgroundColor:"rgb(214, 213, 213)",marginBottom:"50px"}
    const homeStyle = {display:"flex",justifyContent:"space-between",marginTop:"7px",marginRight:"10px"}
    const logoStyle = {height:"8em",marginTop:"-40px",marginLeft:"10px"}
    return(
        <div style={AppBarStyle}>
            <img style={logoStyle} src='SpaceX-Logo.png'/>
            <div style={homeStyle}>
                <HomeIcon fontSize="large"/>
                <MapsUgcIcon fontSize="large"/>
                <WorkIcon fontSize="large"/>
                <InfoIcon fontSize="large"/>
            </div>
        </div>
    )
}