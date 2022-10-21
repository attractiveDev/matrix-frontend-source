import { Link } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WalletButton from '../WalletConnect/WalletButton';
import '../style/header.css';


const SignButton = styled(Button)({
  color: 'white',
  fontWeight: '600',
  lineHeight: '1.14rem',
  padding: '15px 20px',
  background: 'linear-gradient(122.62deg,#7c2dfc,#2483ff)'
})
const Header = () => {
  return(
    <>
      <div className='header-container'>
        <div className='container'>
          <div className='header-main'>
            <div className='menu '>
              {/* <Link to='/'> */}
                <Stack direction='row' spacing={2} alignItems='center'>
                  <img className='logo' src='./assets/img/infinity-logo.png' />
                  {/* <img className='logo-text' src='./assets/img/matrix-textLogo.svg' /> */}
                </Stack>
              {/* </Link> */}
              <Link to='/'>HOME</Link>
              <Link to='/'>CLAIM</Link>
              <Link to='/'>MAP</Link>
              <Link to='/'>WHITEPAPER</Link>
              <Link to='/'>BLOG</Link>
              <Link to='/'>FAQ</Link>
            </div>
            <Stack direction='row' alignItems='center' spacing={3}>
              <WalletButton />
              <NotificationsNoneIcon sx={{color:'white', fontSize:"25px"}}/>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;