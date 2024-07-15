import { Box, Checkbox, Divider, Link, TextField, Typography } from "@mui/material"
import styles from './Getotp.module.scss'
import GoogleIcon from '@mui/icons-material/Google';


const Getotp = () => {
    return (
        <Box className={styles.getotp_Container}>
            <div className={styles.heroimg}>
                {/* <img src='./hero.jpg' alt="Clap Boy" /> */}
                <h1>hello</h1>
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
                  <Box>
                  <TextField variant="filled" />

                  </Box>
                </div>
                <div className={styles.secOtpElem}>
                    <Checkbox disabled checked />
                    <Typography variant="body2">By continuing, you agree to our <Link href="#">Privacy Policy </Link>and <Link href="#">T&C</Link>s.</Typography>
                </div>
                <Divider/>
                <button className={`${styles.secOtpElem} ${styles.goggleBtn}`}>
                    <i><GoogleIcon /></i>
                    <Typography variant="body2">or Sign in with Goggle</Typography>
                </button>

                <div className={styles.optFotter}>
                    <h3>PLAYPICKUP.APP</h3>
                    <Typography variant="body2">&copy; Login</Typography>
                </div>
            </div>



        </Box>
    )
}

export default Getotp;