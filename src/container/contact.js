import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import contact from "../assets/contact.jpg"
import classes from "../CSS/contact.module.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from "react-bootstrap";
import Footer from "../component/footer";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "white",
        padding:"0 1%",
        borderRadius:"10px"
      },
      input: {
        color: "black",
        padding:"1%"
      }
    }));



const Contact = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    const myclasses = useStyles();
    return(
        <>
            <div className={classes.Contact} id="contact" style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                fontFamily:"Lexend Giga",
                backgroundImage:`url(${contact})`,
                backgroundSize:"100% 100%",
                padding:"2%",
                color:"white"
            }}>
                <h1 data-aos="fade-up" style={{textAlign:"center"}}>SCHEDULE A VISIT</h1>
                <br/>
                <TextField  data-aos="fade-left" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Email Id" /><br/>
                <TextField data-aos="fade-left" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Phone number" /><br/>
                <TextField data-aos="fade-left" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Date of Booking" /><br/>
                <TextField data-aos="fade-left" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Your Message" /><br/>
                  <Button style={{marginRight:"10px",borderRadius:"20px", backgroundColor:"#F0B6E6", height:"60px"}} variant="light">Submit</Button>
            </div>
            <div><Footer/></div>
        </>
    )
}
export default Contact;