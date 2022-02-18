import react from 'react'
import Button from '@mui/material/Button';
import MouseIcon from '@mui/icons-material/Mouse';
import PropTypes from "prop-types";
export default function Profile(props)  {
  const alertAction = e => {
    e.preventDefault();
    alert(`HELLO ${props.name}`)
  }
    const profileStyle={border:"solid 5px white",borderRadius:"100%",width:"18%",margin:"auto"}
    return (
      <div style={{width:"70%",margin:"auto"}}>
      <img style={profileStyle} src={props.src}></img>
      <h2 style={{marginBottom:"5px"}}>{props.name}</h2>
      <h4 style={{marginTop:"0px",color:"gray"}}>{props.profession}</h4>
      <Button onClick={alertAction} variant="outlined">CLICK HERE <MouseIcon/></Button>
      <p style={{marginBottom:"150px"}}>{props.bio}</p>
      </div>
    );
  }
  Profile.defaultProps={
    src:"talel.jpg",
    name:"TALEL AYED",
    profession:"insatien",
    bio:"studying in GomyCode."
  }

  Profile.propTypes ={
    src: PropTypes.string,
    name: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
  }

