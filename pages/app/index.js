import React, {useEffect, useState} from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {Box, ButtonGroup, Button, Card, Stack, CardContent, IconButton, Fab, Grid, Typography} from "@mui/material";
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
import 'react-quill/dist/quill.snow.css';
// import Backend from "@services/Backend";
import Scrollbar from "../../ScrollBar";
import styles from "./main.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import LooksOneIcon from '@mui/icons-material/LooksOne';


import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';


import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#39393D' : '#39393D',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? "#39393D"
          : "#39393D",
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#39393D' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


export default function WebApp() {
  const [devices, setDevices] = useState(() => ['laptop']);
  const [shouldShow, setShouldShow] = useState(true);
  const handleDevices = (event, newDevices) => {
    if (newDevices !== null) {
      setDevices(newDevices);
    }
  };

  
    const [annotationForm, setAnnotationForm] = useState(null);
    const [currPin, setCurrPin] = useState(null);
    const [annotationContent, setAnnotationContent] = useState('');
    const [annotations, setAnnotations] = useState([]);

    useEffect(() => {
        const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        const eventer = window[eventMethod];
        const messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";

        eventer(messageEvent, function(e) {
            if (e.data.on_click_res !== undefined) {
                setAnnotationForm({pos: e.data.on_click_res.mouse_pos});
                setCurrPin(e.data.on_click_res.pin);
            }
        },false);

        const fetchData = async () => {
            // const res = await Backend.getAnnotations();
            // if (res.status === 200 && res.data.length) {
                // setAnnotations(res.data);
                // document.getElementById('proxy-iframe').contentWindow.postMessage({annotations: res.data}, "https://65d28b05-0aa5-4f1b-94ce-73acd9ca62d9.flowcheck.test");
            // }
        }

        document.getElementById('proxy-iframe').onload = () => {
            fetchData();
        }
    }, []);

  return (
    <>
                <div style={{right: 0,height: '83%', width: '80.6%', position: 'absolute'}}>
                    <iframe id="proxy-iframe" src="https://65d28b05-0aa5-4f1b-94ce-73acd9ca62d9.flowcheck.test" sandbox="allow-scripts allow-forms allow-same-origin allow-pointer-lock allow-presentation allow-popups" style={{visibility: 'visible', width: '100%', height: '100%'}}></iframe>
                    {Boolean(annotationForm) && (
                        <>
                        <Fab
                            color="primary"
                            style={{ backgroundColor: '#1e4db7', color: '#fff'}}
                            sx={{ position: 'absolute', 'left': `${annotationForm.pos.x - 10}px`, top: `${annotationForm.pos.y - 10}px`, width: '30px', height: '30px', minHeight: '30px'}}
                            size="small"
                        >
                            1
                        </Fab>
                        {<Card sx={{ p: 0, position: 'absolute', 'left': `${annotationForm.pos.x + 10}px`,top: `${annotationForm.pos.y + 10}px`}}>
                            <ReactQuill
                                value={annotationContent}
                                onChange={(value) => {
                                    setAnnotationContent(value);
                                }}
                                placeholder="Type here..."
                            />
                            <Button
                                variant="contained"
                                sx={{ color: '#fff', margin: '10px 10px 10px 10px', float: 'right'}}
                                onClick={async () => {
                                    // const res = await Backend.storeAnnotation({
                                        // website_id: 'c6a73494-b870-412b-b614-548d3b993ada',
                                        // content: annotationContent,
                                        // pin: currPin
                                    // });

                                    // if (res.status === 200) {
                                        // document.getElementById('proxy-iframe').contentWindow.postMessage({pin: {id: res.data.id, ...res.data.pin}}, "https://65d28b05-0aa5-4f1b-94ce-73acd9ca62d9.flowcheck.test");
                                    // }

                                    setAnnotations(oldAnnotations => [res.data, ...oldAnnotations]);
                                    setAnnotationForm(null);
                                    setAnnotationContent(null);
                                }}
                            >
                                Post
                            </Button>
                        </Card>}
                        </>)
                    }
                </div>

                <div style={{left: 0, position:'absolute', height: '84%', width:'19.4%', backgroundColor:'#f7f7f7', overflow:'scroll'}}>
                <Scrollbar>
                  <Stack direction="column" sx={{justifyContent: 'center', marginTop:10, alignItems: 'center'}}>
                    {
                      shouldShow ? (
                        <>
                    <Stack direction="row" sx={{ width:'90%', justifyContent: 'center', alignItems: 'center', marginBottom: 2}}>
                      <div style={{width: '40%', fontSize: '0.8vw', fontWeight: 100, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>/page-name</div>
                      <div style={{height: 2, width: '100%', backgroundColor: 'black'}}></div>
                    </Stack>
                      <div className={styles.box1}>
                        <div style={{margin: 30, height: 140,  backgroundColor:'white', lineHeight: 1}}>
                          <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                          <div style={{fontWeight:100, fontSize:'1.6vw'}}>User Name</div>
                            <LooksOneIcon sx={{marginRight: 1}}/>
                            </Stack>

                          <div style={{fontWeight: 100, fontSize:'0.5vw', color:'grey', marginTop: 3}}>1 Hour Ago</div>
                          <div style={{fontWeight:200, fontSize: '0.7vw', marginTop: 20, overflow: 'hidden', textOverflow: 'ellipsis'}}>Change the color of the button to blue for the desktop version</div>
                          <div style={{top: 100}}>
                          <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', marginTop: 3}}>
                          <Button sx={{width: '30%', height: 30, backgroundColor: '#f6f6f6', '&:hover': {backgroundColor: '#d8d8d8',},}}variant="contained">Resolve</Button>

                          <IconButton aria-label="delete">
                            <DeleteIcon sx={{color:'black'}}/>
                          </IconButton>
                          </Stack>
                          </div>
                        </div>
                      </div> 
    
                      <Stack direction="row" sx={{ width:'90%', justifyContent: 'center', alignItems: 'center', marginBottom: 2}}>
                      <div style={{width: '40%', fontSize: '0.8vw', fontWeight: 100, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>/page-name</div>
                      <div style={{height: 2, width: '100%', backgroundColor: 'black'}}></div>
                    </Stack>

                      <div className={styles.box1}>
                        <div style={{margin: 30, height: 140,  backgroundColor:'white', lineHeight: 1}}>
                          <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                          <div style={{fontWeight:100, fontSize:'1.6vw'}}>User Name</div>
                            <LooksOneIcon sx={{marginRight: 1}}/>
                            </Stack>
                          <div style={{fontWeight: 100, fontSize:'0.5vw', color:'grey', marginTop: 3}}>1 Hour Ago</div>
                          <div style={{fontWeight:200, fontSize: '0.7vw', marginTop: 20, overflow: 'hidden', textOverflow: 'ellipsis'}}>Change the color of the button to blue for the desktop version</div>
                          <div style={{top: 100}}>
                          <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', marginTop: 3}}>
                          <Button sx={{width: '30%', height: 30, backgroundColor: '#f6f6f6', '&:hover': {backgroundColor: '#d8d8d8',},}}variant="contained">Resolve</Button>
                          <IconButton aria-label="delete">
                            <DeleteIcon sx={{color:'black'}}/>
                          </IconButton>
                          </Stack>
                          </div>
                        </div>
                      </div> 


                      <div className={styles.box1}>
                        <div style={{margin: 30, height: 140,  backgroundColor:'white', lineHeight: 1}}>
                          <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                          <div style={{fontWeight:100, fontSize:'1.6vw'}}>User Name</div>
                            <LooksOneIcon sx={{marginRight: 1}}/>
                            </Stack>
                          <div style={{fontWeight: 100, fontSize:'0.5vw', color:'grey', marginTop: 3}}>1 Hour Ago</div>
                          <div style={{fontWeight:200, fontSize: '0.7vw', marginTop: 20, overflow: 'hidden', textOverflow: 'ellipsis'}}>Change the color of the button to blue for the desktop version</div>
                          <div style={{top: 100}}>
                          <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', marginTop: 3}}>
                          <Button sx={{width: '30%', height: 30, backgroundColor: '#f6f6f6', '&:hover': {backgroundColor: '#d8d8d8',},}}variant="contained">Resolve</Button>
                          <IconButton aria-label="delete">
                            <DeleteIcon sx={{color:'black'}}/>
                          </IconButton>
                          </Stack>
                          </div>
                        </div>
                      </div> 

                      <div className={styles.box1}>
                        <div style={{margin: 30, height: 140,  backgroundColor:'white', lineHeight: 1}}>
                          <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                          <div style={{fontWeight:100, fontSize:'1.6vw'}}>User Name</div>
                            <LooksOneIcon sx={{marginRight: 1}}/>
                            </Stack>
                          <div style={{fontWeight: 100, fontSize:'0.5vw', color:'grey', marginTop: 3}}>1 Hour Ago</div>
                          <div style={{fontWeight:200, fontSize: '0.7vw', marginTop: 20, overflow: 'hidden', textOverflow: 'ellipsis'}}>Change the color of the button to blue for the desktop version</div>
                          <div style={{top: 100}}>
                          <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', marginTop: 3}}>
                          <Button sx={{width: '30%', height: 30, backgroundColor: '#f6f6f6', '&:hover': {backgroundColor: '#d8d8d8',},}}variant="contained">Resolve</Button>
                          <IconButton aria-label="delete">
                            <DeleteIcon sx={{color:'black'}}/>
                          </IconButton>
                          </Stack>
                          </div>
                        </div>
                      </div> 
                      </>
                      ) :
                      (
                        <>
                        <Stack direction="row" sx={{ width:'90%', justifyContent: 'center', alignItems: 'center', marginBottom: 2}}>
                          <div style={{width: '40%', fontSize: '0.8vw', fontWeight: 100, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>/page-name</div>
                          <div style={{height: 2, width: '100%', backgroundColor: 'black'}}></div>
                        </Stack>
                          <div className={styles.box1}>
                            <div style={{margin: 30, height: 140,  backgroundColor:'white', lineHeight: 1}}>
                              <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                              <div style={{fontWeight:100, fontSize:'1.6vw'}}>User Name</div>
                                <LooksOneIcon sx={{marginRight: 1}}/>
                                </Stack>
    
                              <div style={{fontWeight: 100, fontSize:'0.5vw', color:'grey', marginTop: 3}}>1 Hour Ago</div>
                              <div style={{fontWeight:200, fontSize: '0.7vw', marginTop: 20, overflow: 'hidden', textOverflow: 'ellipsis'}}>Change the color of the button to blue for the desktop version</div>
                              <div style={{top: 100}}>
                              <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', marginTop: 3}}>
                              <Button sx={{width: '30%', height: 30, backgroundColor: '#f6f6f6', '&:hover': {backgroundColor: '#d8d8d8',},}}variant="contained">Resolve</Button>
    
                              <IconButton aria-label="delete">
                                <DeleteIcon sx={{color:'black'}}/>
                              </IconButton>
                              </Stack>
                              </div>
                            </div>
                          </div> 
        
                        <div className={styles.box1}>
                            <div style={{margin: 30, height: 140,  backgroundColor:'white', lineHeight: 1}}>
                              <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                              <div style={{fontWeight:100, fontSize:'1.6vw'}}>User Name</div>
                                <LooksOneIcon sx={{marginRight: 1}}/>
                                </Stack>
    
                              <div style={{fontWeight: 100, fontSize:'0.5vw', color:'grey', marginTop: 3}}>1 Hour Ago</div>
                              <div style={{fontWeight:200, fontSize: '0.7vw', marginTop: 20, overflow: 'hidden', textOverflow: 'ellipsis'}}>Change the color of the button to blue for the desktop version</div>
                              <div style={{top: 100}}>
                              <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', marginTop: 3}}>
                              <Button sx={{width: '30%', height: 30, backgroundColor: '#f6f6f6', '&:hover': {backgroundColor: '#d8d8d8',},}}variant="contained">Resolve</Button>
    
                              <IconButton aria-label="delete">
                                <DeleteIcon sx={{color:'black'}}/>
                              </IconButton>
                              </Stack>
                              </div>
                            </div>
                          </div> 
                        </>    
                      )
                      }

                      </Stack>




                </Scrollbar>

                </div>
                <div style={{position: 'absolute', left: 0, width:'19.4%', height: 70}}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth="true" sx={{borderRadius: 0, borderWidth:0, height:'100%', boxShadow: 'none'}}>
                  <Button onClick={() => setShouldShow(true)} style={{backgroundColor: shouldShow ? 'white' : '#d8d8d8', borderWidth: 0, borderRadius: 0}}>
                    <div style={{fontSize:'130%'}}>To resolve</div>
                    </Button>
                  <Button onClick={() => setShouldShow(false)} style={{ backgroundColor: !shouldShow ? 'white' : '#d8d8d8', borderWidth: 0, borderRadius: 0}}>
                  <div style={{fontSize:'130%'}}>Resolved</div>
                    </Button>
                </ButtonGroup>
                </div>
                {/* <div style={{left: 0, backgroundColor:'#d9d9d9 ', bottom: 0, height: '10%', position: 'absolute', width:'100%', alignContent: 'center'}}> */}
        <Stack direction="row" sx={{ left: 0, bottom: 0, height: '10%', width:'100%', justifyContent: 'space-between',  alignItems: 'center', backgroundColor:'#d9d9d9', position: 'absolute'}}>
        <Button variant="contained" sx={{backgroundColor:'white', height: '60%', marginLeft: 2, '&:hover': {backgroundColor: '#d9d9d9'}}} startIcon={<ArrowBackIcon />}>
        Go back
      </Button>
        <Stack sx={{ justifyContent: 'center',  width: 250, height: 60}}>
          <ToggleButtonGroup
            value={devices}
            exclusive
            onChange={handleDevices}
            aria-label="device"
            fullWidth="true"
          >
            <ToggleButton value="laptop" aria-label="laptop" sx={{borderRadius: 0, marginRight: 2, borderWidth: 0, backgroundColor:'white'}}>
              <TvIcon fontSize="large"/>
            </ToggleButton>
            <ToggleButton value="tablet" aria-label="tablet" sx={{borderRadius: 0, marginRight: 2, borderWidth: 0, backgroundColor:'white'}}>
              <TabletMacIcon fontSize="large"/>
            </ToggleButton>
            <ToggleButton value="phone" aria-label="phone" sx={{borderRadius: 0, borderWidth: 0, backgroundColor:'white'}}>
              <PhoneAndroidIcon fontSize="large"/>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <div></div>
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{position: 'absolute', left: '70%'}}>
        <div>Comment</div>
        <FormControlLabel
        sx={{transform:'scale(1.5)'}}
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
        // sx={{position: 'absolute'}}
      />
      <div>Browse</div>
      </Stack>

        </Stack>

                </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'errors', 'dashboard', 'notifications'])),
    },
  };
}
