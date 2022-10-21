import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography, IconButton, Dialog } from '@mui/material'
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import connectors from './config';
import useAuth, { WalletConnect } from '../../hook/useAuth';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'white',
  boxShadow: 24,
  p: 2,
  backgroundColor:'#252b45',
  display:'flex', 
  flexDirection:'column',
  justifyContent:'center',
  paddingBottom:'200px'
};

const ButtonStyle = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'left',
  width:'100%',
  color:'black',
}

const textStyle = {
  color:'white',
  fontSize:'20px',
  marginLeft:'20px'
}

const Dropdown = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'left',
  width:'100%',
  color:'black',
  border:'1px solid #4b547d'
}

const WalletModal = ({modalVisible, setModalVisible}:any)  => {
  const [flag, setFlag] = useState(0);
  const handleClose = () => setModalVisible(false);
  const {login} = useAuth();
  const handleEther = () => {
    if(flag != 1) setFlag(1);
    else setFlag(0)
  }
  const handleFlow = () => {
    if(flag != 2) setFlag(2);
    else setFlag(0)
  }
  return (
    <>
      <Modal
        keepMounted
        open={modalVisible}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Box sx={{display:'flex', justifyContent:'right'}}>
            <IconButton onClick={() => handleClose()}>
              <CloseIcon sx={{color:'white', fontSize:'40px'}}/>
            </IconButton>
          </Box>
          <Typography sx={{fontSize:'30px', color:'white', textAlign:'center'}}>Link Wallet</Typography>
          <Typography sx={{fontSize:'18px', color:'white', opacity:'0.8', textAlign:'center',  marginBottom:'30px'}}>Choose at least one Blockchain of the wallet that you want to add to your Multi-wallet.</Typography>
          
          <Box sx={{
            display:'flex', 
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'}}>
            <Box sx={{width:'300px'}}>
              <Button sx={Dropdown} onClick={() => handleEther()}>
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.875" cy="16" r="16" fill="#7D2EFD"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5987 3L8.6543 16.25L16.5987 12.5V3Z" fill="#EDE2FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6005 3L24.5449 16.25L16.6005 12.5V3Z" fill="#D6C2F8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5987 12.4998V20.9998L8.6543 16.2498L16.5987 12.4998Z" fill="#D4C1F3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6005 12.4998V20.9998L24.5449 16.2498L16.6005 12.4998Z" fill="#B394E4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5987 22.5001V29.0001L8.6543 17.7501L16.5987 22.5001Z" fill="#EDE2FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6005 22.5001V29.0001L24.5449 17.7501L16.6005 22.5001Z" fill="#D4C1F3"></path></svg>
                <Typography sx={textStyle}>Ethereum</Typography>
              </Button>
              {
                flag === 1 &&
                <Box sx={{
                  display:'flex', 
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center',
                  width:'300px',
                  margin:'0 auto',
                  backgroundColor:'#1a1e32',
                  padding:'8px 0px',
                  position:'absolute',
                  zIndex:'100000'
                }}>
                  {
                  connectors.map( (Info:any, index:number) => (
                    <Button key={index} 
                      sx={ButtonStyle}

                          onClick={() => {login(Info.connectorId); setModalVisible(false);}}
                    >
                      <Info.Icon sx={{width:'33px', height:'auto'}}/>
                      <Typography sx={textStyle}>{Info.title}</Typography>
                    </Button>
                  ))
                  }
                  
                </Box>
              }
            </Box>
            <Box sx={{width:'300px', marginTop:'10px'}}>
              <Button sx={Dropdown} onClick={() => handleFlow()}>
              <svg viewBox="0 0 38.4 33.5" width="33px" alignment-baseline="baseline" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-cZwWEu jdXsDn"><path d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3
                  c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7
                  c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
                  c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1
                  L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
                  c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z" fill="#8247E5"></path></svg>
                <Typography sx={textStyle}>Polygon</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default WalletModal;


