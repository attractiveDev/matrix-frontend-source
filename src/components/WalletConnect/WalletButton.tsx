import { Button  } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import WalletModal from './WalletModal';

const StyleButton = styled(Button)({
  color: 'white',
  fontWeight: '600',
  lineHeight: '1.14rem',
  padding: '15px 20px',
  background: 'linear-gradient(122.62deg,#7c2dfc,#2483ff)'
})


const WalletButton  = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return(
    <>
      <StyleButton
          size='large'
          onClick={() => setModalVisible(true)}>
          SIGN IN
      </StyleButton>

      <WalletModal 
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
      />
    </>
  );
}

export default WalletButton;
