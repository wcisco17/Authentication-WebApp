'use strict';
import * as nodemailer from 'nodemailer'
import { config } from './config';







const sendConfirmationEmail = async(user: any, req: any) => {
    const mailer = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: config.userMail,
            pass: config.passMail
        }
    })

    const mailOptions = {
        to: user.email,
        from: 'wsissoko65.gmail.com',
        subject: 'Welcome to InterCoin',
        html:`
        <div style="text-align: center; font-size: 1.3rem;">
        Thank you for signing up
            ${user.username}
        </div>
        <div style="text-align: center; padding: 1rem 0rem; font-size:1.6rem" >Welcome to InterCoin.</div>
          <div style="text-align: center;" >Please find link to validate your email.
             ${req.origin.headers}/confirmemail/::token=${user.validationEmailToken}
        </div>
        `
    }

    return mailer.sendMail(mailOptions)
}


export { sendConfirmationEmail }