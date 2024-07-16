import { Box, Checkbox, Divider, FormControl, InputLabel, Link, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import styles from './Getotp.module.scss'
import GoogleIcon from '@mui/icons-material/Google';
import { CommonButton } from "../../../Common/Button/CommonButton";
import { useState } from "react";


interface Dataprops {
    flage: string;
    dialCode: number;
}

const Country: Dataprops[] = [
    {
        flage: "🇺🇸", 
        dialCode: 1
    },
    {
        flage: "🇨🇦",
        dialCode: 1
    },
    {
        flage: "🇬🇧", 
        dialCode: 44
    }
    
];
const Getotp = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedCountry(event.target.value as string);
    };

    return (
        <Box className={styles.getotp_Container}>
            <div className={styles.heroimg}>
                <img src='.image.png' alt="Clap Boy" />
            </div>
            <div className={styles.otpSection}>
                <div className={styles.secOtpElem}>
                    <h3>PLAYPICKUP.APP</h3>
                </div>
                <div className={styles.secOtpElem}>
                    <h4>Nice To See You</h4>
                    <span>&#128075;</span>
                </div>
                <div className={styles.secOtpElem}>
                    <div style={{ width: '100%', backgroundColor: 'lightgrey' }}>
                       
                        <TextField variant="filled" sx={{ float: 'right' }} />

                    </div>
                </div>
                <div className={styles.secOtpElem}>
                    <Checkbox disabled checked />
                    <Typography variant="body2">
                        By continuing, you agree to our
                        <Link href="#"> Privacy Policy </Link>
                        and
                        <Link href="#"> T&Cs</Link>.
                    </Typography>
                </div>
                <div className={styles.secOtpElem}>

                    <CommonButton label="Get OTP" />
                </div>
                <hr />
                <button className={`${styles.secOtpElem} ${styles.goggleBtn}`}>
                    <i><GoogleIcon /></i>
                    <Typography
                        variant="body2"
                    >or Sign in with Goggle
                    </Typography>
                </button>

                <div className={styles.optFotter}>
                    <h3>PLAYPICKUP.APP</h3>
                    <Typography
                        variant="body2">
                        &copy; Login
                    </Typography>
                </div>
            </div>



        </Box>
    )
}

export default Getotp;