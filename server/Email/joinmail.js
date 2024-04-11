

const nodemailer = require("nodemailer")
const mailgen = require('mailgen');
require("dotenv").config()



const joinReqMail = (data) => {

    


    return new Promise((resolve, reject) => {

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailGenarator = new mailgen({

            theme: "default",
            product: {
                name: "Clumsy Coders",
                link: "https://mailgen.js/"
            }

        });

        let responces = {
            body: {
                name:"Join Request",

                intro: `

                

                  <b> Name:  ${data.name}  </b> <br/>
                   
                  Email: ${data.email} <br/>
                   
                  Mobile: ${data.mobile} <br/>
                   
                  Linkedin:  ${data.linkedin} <br/>

                  Github:${data.git}
                
                
                `


            }


        }

        let mail = mailGenarator.generate(responces);

        let message = {

            from: `${data.email}`,
            to: "sarathsarath93366@gmail.com",
            subject: "Community Join Request ",
            html: mail
        };


        transporter.sendMail(message, (error, info) => {

            if (error) {

               reject()

            } else {
                
                resolve()

            }

        });



    })


}


module.exports = joinReqMail



