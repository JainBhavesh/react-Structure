import { Avatar, Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import styles from './CretateProfile.module.scss'
import { CommonButton } from "../../../Common/Button/CommonButton";
import { CommonTextField } from "../../../Common/CommonTextfield/CommonTextfield";

const CreateProfile = () => {
    return (
        <Box className={styles.profileMain}>
            <div className={styles.profileContent}>
                <FormControl>
                    <Typography
                        variant="h5"
                        className={styles.profileHead}>
                        Create Your Profile
                    </Typography>
                    <div className={styles.profilepic}>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src="" sx={{ width: 60, height: 60 }} />
                            <Button className={styles.uploadBtn} variant="outlined" size="small">Upload Photo</Button>
                        </Stack>
                    </div>

                    <div className={styles.profileElem}  >
                        <Typography>Name</Typography>
                        <CommonTextField />
                    </div>
                    <div className={styles.profileElem} >
                        <Typography>Phone Number</Typography>
                        <CommonTextField />
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
                        <RadioGroup
                            sx={{
                                '&.MuiFormGroup-root': {
                                    display: 'flow',
                                }
                            }}>
                            <FormControlLabel
                                className={styles.levelName}
                                value="female"
                                control={<Radio />}
                                label="Never Played Before" />

                            <FormControlLabel
                                value="Beginner"
                                control={<Radio />}
                                label="Beginner" />

                            <FormControlLabel
                                value="InterMediate"
                                control={<Radio />}
                                label="InterMediate" />

                            <FormControlLabel
                                value="Advance"
                                control={<Radio />}
                                label="Advance" />

                            <FormControlLabel
                                value="Pro"
                                control={<Radio />}
                                label="Pro" />
                        </RadioGroup>
                    </div>
                    <CommonButton label="Save" />
                </FormControl>
            </div>
        </Box>
    )
}
export default CreateProfile;