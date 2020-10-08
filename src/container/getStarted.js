import React ,{useEffect} from "react";
import getStarted from "../assets/getstarted.jpg";
import classes from "../CSS/getStarted.module.css";
import { Button } from "react-bootstrap";
import Aos from "aos";
import { Link } from "react-scroll";
import { Icon } from '@iconify/react';
import partyPopper from '@iconify/icons-twemoji/party-popper';




const GetStarted = () =>{
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);
    return(
        <>
            <div className={classes.GetStarted} id="getStarted" style={{backgroundImage:`url(${getStarted})`,
            backgroundSize:"100% 100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            color:"white",
            fontFamily: 'Lexend Giga'}}>
                <h1 data-aos="fade-down" style={{textAlign:"center"}}><Icon icon={partyPopper} /> LETS MAKE IT SPECIAL<Icon icon={partyPopper} /> </h1>
                <br/>
                
                <p  data-aos="fade-down"><Button variant="danger" style={{marginRight:"10px",borderRadius:"20px"}}><Link activeClass="active"
                    to="Gallery"
                    className={classes.Link}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >View our Venue</Link></Button>
                
                </p>
            </div>
        </>
    )
}
export default GetStarted;