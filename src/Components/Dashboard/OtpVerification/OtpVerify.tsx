
import React from 'react';
import { Box }from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from '../../../image.png';
import styles from './OtpVerify.module.scss'
import { CommonButton } from '../../../Common/Button/CommonButton';
import OTPInput from './OTPInput';


export const OtpVerify: React.FC = () => {
  
  return (
    <Box  className={styles.otp_page}>
      
      <div className={styles.background_image}>
        {/* <img src={Image} alt="Background"  /> */}
        
      </div>

      
      <div  className={styles.content_section}>
        <div className={styles.logo}>
            <h3>PLAYPICKUP.APP</h3>
        </div>

        {/* Text content */}
        <div  className={styles.bold_text}>
          <h2>
          Enter OTP
          </h2>
        </div>
        <div className={styles.small_text}>
          An OTP was sent to <b>+919909210912</b> <span className={styles.edit_link}>Edit</span>
        </div>

        <OTPInput />
        <div className={styles.button}>
        <CommonButton label='Verify' />
        </div>
        <div className={styles.small_texts}>
                  <h4>Resend OTP in 00:16 seconds</h4>
                </div>
        <div className={styles.optFotter}>
                    <h3>PLAYPICKUP.APP</h3>
                    <div >&copy; Login 2024</div>
                </div>
                
      </div>
    </Box>
  );
};

// export default OtpVerify
