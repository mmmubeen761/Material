import React from "react";
import { useState } from 'react';
import Logo from '../Images/logo.png'
import MLogo from '../Images/mlogo.png'
import FLogo from '../Images/footer.png'
import Footerr from '../Images/footerr.png'
import Footerl from '../Images/footerl.png'
import Mouse from '../Images/mouse.png'
import Bg from '../Images/BG.png'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        multilineColor: {
            color: 'white'
        }
    },
}));

const AllCatogary = () => {
    const classes = useStyles();


    return (

        <>
            <div id='bgblack'>
                <Grid container>
                    <Grid item xs={2} sm={7} style={{ paddingLeft: 150, alignSelf: 'center', }} >
                        <img src={Logo} alt="" style={{ width: '40%' }} />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        <h4 className="py-4 text-center" style={{ borderBottom: '7px solid #257ce1', color: '#257ce1', width: 100, fontSize: 20 }}>HOME</h4>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                        <h4 className="py-4">.</h4>
                    </Grid>
                    <Grid item xs={2} sm={2} >
                        <h4 className="py-4" style={{ fontSize: 20 }}>REQUEST INVITATION</h4>
                    </Grid>
                </Grid>
            </div>
            <div className="mt-5 mb-4" >
                <Grid container>
                    <Grid item xs={12} sm={12} className="text-center mx-auto" style={{ alignSelf: 'center', }} >
                        <img src={MLogo} alt="" style={{ width: '5%' }} />
                    </Grid>
                </Grid>
            </div>
            <div className="my-1" >
                <Grid container>
                    <Grid item xs={12} sm={12} className="text-center mx-auto" style={{ alignSelf: 'center', color: '#fff' }} >
                        <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>POWERED CREATIVITY</h3>
                    </Grid>
                </Grid>
            </div>
            <div className="my-1" >
                <Grid container>
                    <Grid item xs={12} sm={12} className="text-center mx-auto" style={{ alignSelf: 'center', }} >
                        <h3 style={{ fontSize: '40px', fontWeight: 'bold', color: '#257ce1' }}>PATRONAGE RECOINDED</h3>
                    </Grid>
                </Grid>
            </div>
            <div className="my-1" >
                <Grid container>
                    <Grid item xs={12} sm={12} style={{ alignSelf: 'center', }} >
                        <h3 className="text-center mx-auto" style={{ borderBottom: '5px solid #fff', borderRadius: '20px', color: '#257ce1', width: 100 }}></h3>
                    </Grid>
                </Grid>
            </div>
            <div className="my-1" >
                <Grid container>
                    <Grid item xs={6} sm={6} className="text-center mx-auto" style={{ alignSelf: 'center', color: '#fff' }} >
                        <h5 > Minty is for culture shapers, conoisseurs and art owners. We fuel the creation and appriciation of art that will define a generation. Art is powerful. We harness technology to empower the people that power it.</h5>
                    </Grid>
                </Grid>
            </div>
            <div className="mt-5" >
                <Grid container>
                    <Grid item xs={12} sm={12} className="text-center mx-auto" style={{ alignSelf: 'center', }} >
                        <img src={Mouse} alt="" style={{ width: '2%' }} />
                    </Grid>
                </Grid>
            </div>
            <Grid container style={{ marginTop: 450 }}>
                <div className="my-3" style={{ width: '60%', marginLeft: '50px', fontFamily: 'Myriad Pro', borderLeft: '5px solid #fff', paddingLeft: "50px", borderColor: '#257ce1' }}>
                    <h5 style={{ fontSize: 22, color: '#257ce1', fontWeight: 'bolder', fontFamily: 'Myriad Pro', }}>PATRONAGE AND MARKETPLACE</h5>
                    <h5 style={{ fontSize: 22, color: '#fff', fontFamily: 'Myriad Pro', }}>Artists find patrons to fund and bring to life new ideas, connect with passionate collectors and sell your finished works.</h5>
                    <h5 style={{ fontSize: 22, color: '#fff', fontFamily: 'Myriad Pro', }}>Patrons, artists you love to create something new and wonderful, access exclusive perks and follow progress of your favourite artists.</h5>
                </div>
                <div className="my-3" style={{ width: '60%', marginLeft: '50px', fontFamily: 'Myriad Pro', borderLeft: '5px solid #fff', paddingLeft: "50px", borderColor: '#257ce1' }}>
                    <h5 style={{ fontSize: 22, color: '#257ce1', fontWeight: 'bolder', fontFamily: 'Myriad Pro', }}>Visualise best in-class art</h5>
                    <h5 style={{ fontSize: 22, color: '#fff', fontFamily: 'Myriad Pro', }}>Browse and discover curated creations and artists that move the four corners of the world. </h5>
                </div>
                <div className="my-3" style={{ width: '60%', marginLeft: '50px', fontFamily: 'Myriad Pro', borderLeft: '5px solid #fff', paddingLeft: "50px", borderColor: '#257ce1' }}>
                    <h5 style={{ fontSize: 22, color: '#257ce1', fontWeight: 'bolder', fontFamily: 'Myriad Pro', }}>Trade art digitally</h5>
                    <h5 style={{ fontSize: 22, color: '#fff', fontFamily: 'Myriad Pro', }}>Benefit from the rising value of the art you create by receiving royalties every time one of your artworks is sold.</h5>
                    <h5 style={{ fontSize: 22, color: '#fff', fontFamily: 'Myriad Pro', }}>Access our worldwide network of patrons and collectors to grow and extend your audience. </h5>
                </div>
            </Grid>
            <Grid container>
                <Grid item xs={6} sm={6} style={{ marginTop: 270 }}>
                    <div className="text-center mx-5" style={{ color: '#fff', border: '5px solid white', paddingTop: 40, paddingBottom: 40 }} >
                        <h3 style={{ fontWeight: 'bolder', fontSize: 22 }}>ARE YOU</h3>
                        <h3 style={{ fontWeight: 'bolder', fontSize: 22 }}>AN ART COLLECTOR?</h3>
                        <p className='mx-auto' style={{ borderBottom: '5px solid white', width: 80, margin: 20 }}></p>
                        <h3 style={{ fontWeight: 'bolder', fontSize: 22 }}>Power Art's Next Big Thing</h3>
                        <form noValidate autoComplete="off">
                            <input type="text" style={{ border: 'none', borderBottom: '2px solid white', background: 'initial', outline: 'NONE', marginBottom: 50, width: '80%',color:'white' }} placeholder="Name" /><br />
                            <input type="text" style={{ border: 'none', borderBottom: '2px solid white', background: 'initial', outline: 'NONE', marginBottom: 50, width: '80%',color:'white' }} placeholder="Email" /><br />
                            <input type="submit" style={{ borderColor: '#257ce1', background: 'none', outline: 'NONE', marginBottom: 40, width: '40%', color: '#257ce1', paddingTop: 30, paddingBottom: 30,}} placeholder="Email" /><br />
                        </form>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} style={{ marginTop: 270 }}>
                    <div className="text-center mx-5" style={{ color: '#fff', border: '5px solid white', paddingTop: 40, paddingBottom: 40 }} >
                        <h3 style={{ fontWeight: 'bolder', fontSize: 22 }}>ARE YOU</h3>
                        <h3 style={{ fontWeight: 'bolder', fontSize: 22 }}>AN ART COLLECTOR?</h3>
                        <p className='mx-auto' style={{ borderBottom: '5px solid white', width: 80, margin: 20 }}></p>
                        <h3 style={{ fontWeight: 'bolder', fontSize: 22 }}>Let us power your creativity</h3>
                        <form noValidate autoComplete="off">
                            <input type="text" style={{ border: 'none', borderBottom: '2px solid white', background: 'initial', outline: 'NONE', marginBottom: 50, width: '80%',color:'white' }} placeholder="Name" /><br />
                            <input type="text" style={{ border: 'none', borderBottom: '2px solid white', background: 'initial', outline: 'NONE', marginBottom: 50, width: '80%',color:'white' }} placeholder="Email" /><br />
                            <input type="submit" style={{ borderColor: '#257ce1', background: 'none', outline: 'NONE', marginBottom: 40, width: '40%', color: '#257ce1', paddingTop: 30, paddingBottom: 30,}} placeholder="Email" /><br />
                        </form>
                    </div>
                </Grid>
            </Grid>
            <div id='bgblue'>
                <Grid container className="mt-5 py-5">
                    <Grid item xs={2} sm={2} className="text-center">
                        <img src={Footerl} alt="" className="mt-5" style={{ width: '50%', alignSelf: 'center', }} />
                    </Grid>
                    <Grid item xs={8} sm={8} className="text-center" style={{ alignSelf: 'center', }} >
                        <img src={FLogo} alt="" style={{ width: '30%', alignSelf: 'center', }} />
                    </Grid>
                    <Grid item xs={2} sm={2} className="text-center">
                        <img src={Footerr} alt="" className="mt-5" style={{ width: '50%', alignSelf: 'center', }} />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default AllCatogary;