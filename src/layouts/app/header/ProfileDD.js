import React from "react";
import FeatherIcon from "feather-icons-react";
import { Box, Menu, Typography, Button, Avatar, Divider, MenuItem } from "@mui/material";
import Link from "@components/ui/Link";
// import Backend from "@services/Backend";
// import useProfile from "@lib/useProfile";
import { useTranslation } from "next-i18next";
import ProfileStore from "@recoil/store/ProfileStore";
import SupportIcon from '@mui/icons-material/Support';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const ProfileDD = () => {
  return null;
  // const { profile } = useProfile();
  // const { logout } = ProfileStore();
  // const { t } = useTranslation('common');
  // const [anchorEl4, setAnchorEl4] = React.useState(null);

  // const handleClick4 = (event) => {
  //   setAnchorEl4(event.currentTarget);
  // };

  // const handleClose4 = () => {
  //   setAnchorEl4(null);
  // };

  // return (
  //   <>
  //     <Button
  //       aria-label="menu"
  //       color="inherit"
  //       aria-controls="profile-menu"
  //       aria-haspopup="true"
  //       onClick={handleClick4}
  //     >
  //       <Box display="flex" alignItems="center">
  //         <Avatar
  //           sx={{
  //             bgcolor: (theme) => theme.palette.primary.main,
  //             width: '30px',
  //             height: '30px'
  //           }}
  //         >
  //           {profile?.name[0]}
  //         </Avatar>

  //         <Box
  //           sx={{
  //             display: { xs: "none", sm: "flex" },
  //             alignItems: "center",
  //           }}
  //         >
  //           <Typography
  //             variant="h5"
  //             fontWeight="700"
  //             sx={{
  //               ml: 1,
  //             }}
  //           >
  //             {profile?.name || profile?.email.split('@')[0]}
  //           </Typography>
  //           <FeatherIcon icon="chevron-down" width="20" height="20" />
  //         </Box>
  //       </Box>
  //     </Button>
  //     <Menu
  //       id="profile-menu"
  //       anchorEl={anchorEl4}
  //       keepMounted
  //       open={Boolean(anchorEl4)}
  //       onClose={handleClose4}
  //       sx={{
  //         "& .MuiMenu-paper": {
  //           width: "385px",
  //           right: 0,
  //           top: "70px !important",
  //         },
  //         "& .MuiList-padding": {
  //           // p: "30px",
  //         },
  //       }}
  //     >
  //       <Box mt={0} pb={1.5}>
  //         <Box display="flex" alignItems="center">
  //           <Avatar sx={{ width: '60px', height: '60px', bgcolor: "primary.main" }}>
  //             <FeatherIcon icon="user" />
  //           </Avatar>
  //           <Box ml={2}>
  //             <Typography variant="h4">
  //               {/* {profile?.name} */}
  //               User name
  //             </Typography>
  //             <Typography variant="h6">
  //               {/* {profile?.name} */}
  //               Active plan - 1 seats
  //             </Typography>
  //             <Box display="flex" alignItems="center">
  //               <Typography
  //                 display="flex"
  //                 alignItems="center"
  //                 color="textSecondary"
  //                 sx={{
  //                   mr: 1,
  //                 }}
  //               >
                  
  //               </Typography>
  //               <Typography color="textSecondary" variant="h6">
  //                 {profile?.email}
  //               </Typography>
  //             </Box>
  //           </Box>
  //         </Box>
  //       </Box>

  //       <Divider style={{ marginTop: 0, marginBottom: 0 }} />
        
  //       {/* <SupportIcon sx={{width:18}}></SupportIcon> */}

  //       <Box>
  //         <MenuItem
  //           component={Link}
  //           href="/app/my-profile"
  //           sx={{ pt: 2, pb: 2 }}
  //         >
  //           <Box display="flex" alignItems="center">
  //             <Button
  //               sx={{
  //                 // backgroundColor: (theme) => theme.palette.primary.light,
  //                 color: (theme) => 'black',
  //                 boxShadow: 'none',
  //                 minWidth: '50px',
  //                 width: '45px',
  //                 height: '40px',
  //                 // borderRadius: '10px',
  //               }}
  //             >
  //               <SettingsRoundedIcon sx={{height: 25, width:25}}/>
  //             </Button>
  //             <Box ml={0}>
  //               <Typography variant="h5">
  //                 {/* {t('profile-dropdown.my-profile')} */}
  //                 Account Settings
  //               </Typography>
  //               {/* <Typography color="textSecondary" variant="h6" fontWeight="400">
  //                 {t('profile-dropdown.account-settings')}
  //               </Typography> */}
  //             </Box>
  //           </Box>
  //         </MenuItem>
  //         {/* <Divider style={{ width: '100%', marginTop: 0, marginBottom: 0 }} /> */}

  //         <Button
  //           sx={{
  //             mt: 2,
  //             display: "block",
  //             width: "100%",
  //           }}
  //           onClick={() => logout}
  //           variant="contained"
  //           color="error"
  //         >
  //           {t('logout')}
  //         </Button>
  //       </Box>
  //     </Menu>
  //   </>
  // );
};

export default ProfileDD;
