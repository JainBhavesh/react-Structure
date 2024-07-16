import { Box } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from './PageHeader.module.scss'

const PageHeader = () => {
    return (
        <Box className={styles.pageheader}> 
            <i className={styles.notification}><NotificationsIcon fontSize="small" /></i>
        </Box>
    )
}
export default  PageHeader;