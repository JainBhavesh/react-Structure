import { Avatar, Box, ListItemIcon, Stack, Typography } from '@mui/material';
import { SidebarData } from './SidebarData';
import Styles from './sidebar.module.scss'
import WestIcon from '@mui/icons-material/West';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Sidebar = () => {
    return (
        <Box className={Styles.sidebarMain}>
            <div className={Styles.siderhead}>
                <p >PLAYPICKUP.APP</p>
                <i><WestIcon /></i>
            </div>
            {SidebarData.data.map((mainMenu, index) => (
                <>
                    <Box className={Styles.diffSection} key={index}>
                        <Typography
                            variant='body2'
                            className={Styles.menuItem}>
                            {mainMenu.main}
                        </Typography>
                        {mainMenu.subItems.map((submenu, subIndex) => (
                            <div key={subIndex} className={Styles.subMenuItem}>
                                <ListItemIcon
                                    sx={{ color: 'grey' }}>
                                    <submenu.icon />
                                    <Typography
                                        variant='body1'
                                        className={Styles.menuItem}>
                                        {submenu.name}
                                    </Typography>
                                </ListItemIcon>
                            </div>
                        ))}
                    </Box>
                </>
            ))}
            <div className={Styles.sidebarFotter}>
                <div  className={Styles.player}>
                    <Stack sx={{paddingRight:'.2rem'}}>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </Stack>
                    <div>
                        <Typography variant='body2'>Jogn</Typography>
                        <Typography variant='body2'>level 4</Typography>
                    </div>
                </div>
                <i><SettingsOutlinedIcon /></i>
            </div>
        </Box>
    );
};

export default Sidebar;
