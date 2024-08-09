import { useState } from 'react'
import './App.css'
import {Box,  Step, StepLabel, Stepper , Button, CssBaseline, Container, TextField , Typography, Hidden} from "@mui/material"

function App() {
   
  const stepname = [ "Basic" , "Contact" , "Personal" , "Payment"];

  const [activeStep, setActiveStep] = useState(0);

  const [stepskipped , setstepskipped] = useState(0); 

  const [page , setpage] = useState(false);

  const skipstep = () => {

    setstepskipped(true)
  
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  return (
    <>
      
        <CssBaseline/>
        <Container maxWidth={"lg"}>
          
        <Box my={10}  py={4} boxShadow={10}  >

          {!page ?
          
          <>
           <Typography  component={Box}  py={5} fontSize={30} align='center' >Registration Form</Typography>
            <Stepper activeStep={activeStep}>
              {stepname.map((label) =>(
                
                <Step key={label}  >
                  <StepLabel>{label}</StepLabel>
                </Step>
              
              )
              )}
            </Stepper>

            <Box my={5}>
            
            {activeStep === 0 ? 
            <>
                  <Box my={2} mx={3}>
            <TextField type='email' placeholder='Enter ypur Email' label=" Your Email" fullWidth  />
            </Box>
            <Box my={2} mx={3}>
            <TextField type='password' placeholder='Enter your Passwrod' label="Your Password" fullWidth />
            </Box>
            </>
             : 
             ( activeStep === 1 ? 
             <>
              <Box my={2} mx={3}>
        <TextField type='text' placeholder='Enter ypur Address 1' label=" Your Address" fullWidth  />
        </Box>
        <Box my={2} mx={3}>
        <TextField type='text' placeholder='Enter Your Address 2' multiline label="Your Address" rows={4} fullWidth />
        </Box>
        </> 
          : 
          (activeStep === 2 ? 
          <>
            <Box my={2} mx={3}>
        <TextField type='text' placeholder='Enter ypur Address 1' label=" Your Personal" fullWidth  />
        </Box>
        <Box my={2} mx={3}>
        <TextField type='text' placeholder='Enter Your Address 2' multiline label="Your Personal" rows={4} fullWidth />
        </Box>
          </>
           :
           ( activeStep === 3 ? 
            <>
             <Box my={2} mx={3}>
        <TextField type='number' placeholder='Enter your Card number' label=" Your Card number" fullWidth  />
        </Box>
        <Box my={2} mx={3}>
        <TextField type='text' placeholder='Enter YourBank addres' multiline label="Your Bank Address" rows={4} fullWidth />
        </Box>
            </>
          
           : <></> ))  
        ) }               
             
             
            </Box>
            
            <Box display={"flex"} my={1}  >
              <Box mx={1}><Button  variant='contained' color='warning' disabled={activeStep === 0} onClick={() => setActiveStep( activeStep - 1)}  >Back</Button></Box>
              <Box mx={1}><Button  variant='outlined' color='primary' onClick={skipstep}  disabled={activeStep === 0 || activeStep === 2 || activeStep === 3 }   >Skip</Button></Box>
              { activeStep === 3 ? 
              <>
               <Box mx={1}><Button variant='contained' color='primary' onClick={() => setpage(true)} >Finish</Button></Box>
              </>
              :
              <>
              <Box mx={1}><Button variant='contained' color='primary' disabled={activeStep === 3} onClick={() => setActiveStep( activeStep + 1)}  >Next</Button></Box>
              </>
               }
              
            </Box>
          </>

          : 

          <>
           <Typography  component={Box}  py={5} fontSize={30} align='center' >Form Submited</Typography>
          </>
           }

          </Box>

        </Container>

    </>
  )
}

export default App
