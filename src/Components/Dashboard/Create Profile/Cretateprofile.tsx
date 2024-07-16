import { Avatar, Box, Button, Stack, TextField, Typography } from "@mui/material";
import styles from './Cretateprofile.module.scss'
import { CommonButton } from "../../../Common/Button/CommonButton";

const CreateProfile = () => {
    return (
        <Box className={styles.profileMain}>
            <div className={styles.profileContent}>
                <Typography variant="h5" className={styles.profileHead}>Create Your Profile</Typography>
                <div className={styles.profilepic}>
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src="" sx={{ width: 60, height: 60 }} />
                        {/* <button >Upload Photo</button> */}
                        <Button className={styles.uploadBtn} variant="outlined" size="small">Upload Photo</Button>
                    </Stack>
                </div>
                <div className={styles.profileElem}  >
                    <Typography>Name</Typography>
                    <TextField className={styles.profileInput}/>
                </div>
                <div className={styles.profileElem} >
                    <Typography>Phone Number</Typography>
                    <TextField className={styles.profileInput}/>
                </div>
                <div className={styles.profilepic}>
                    <div className={styles.profileElem} >
                        <Typography>City</Typography>
                        <TextField />
                    </div>
                    <div className={styles.profileElem} >
                        <Typography>Date Of Birth</Typography>
                        <TextField />
                    </div>
                </div>
                <div className={styles.profileElem} >
                    <Typography>Select Sports skill Level</Typography>
                    
                </div>
                <CommonButton label="Save"/>
            </div>
        </Box>
    )
}
export default CreateProfile;