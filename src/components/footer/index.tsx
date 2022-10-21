import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../style/footer.css'


const FooterTitlte = styled('div')({
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '600',
  letterSpacing: '0',
  textAlign: 'left',
  color: '#e5ecf4',
  marginBottom: '15px',
})

const FooterTitle = styled('div')({
  fontSize: '19px',
  fontWeight:'600',
  marginTop: '16px',
  color: '#6b74a2',
  fontStyle: 'normal',
})

const Footer = () => {
  return(
    <>
      <div className='container'>
        <div className='footer'>
          <Stack direction='column' spacing={1.5}>
            <img src='./assets/img/matrixLogo.svg' />
            <FooterTitle>MATRIX@2021</FooterTitle>
          </Stack>

          <Stack direction='column' spacing={1.5}>
            <FooterTitlte>OUTLINE</FooterTitlte>
            <FooterTitle>Referral CPmtest</FooterTitle>
            <FooterTitle>NFT Airdrop</FooterTitle>
            <FooterTitle>Claim</FooterTitle>
            <FooterTitle>Map</FooterTitle>
            <FooterTitle>Profile</FooterTitle>
          </Stack>

          <Stack direction='column' spacing={1.5}>
            <FooterTitlte>ABOUT</FooterTitlte>
            <FooterTitle>Whitepaper</FooterTitle>
            <FooterTitle>FAQ</FooterTitle>
            <FooterTitle>Blog</FooterTitle>
          </Stack>

          <Stack direction='column' spacing={1.5}>
            <FooterTitlte>LINKS</FooterTitlte>
            <FooterTitle>OpenSea</FooterTitle>
            <FooterTitle>BloctoBay</FooterTitle>
          </Stack>

          <Stack direction='row' spacing={2} alignItems="baseline" sx={{marginTop:'30px'}} >
            <a href='https://discord.gg/ZzbyYzek' target='_blank'><img style={{width:'30px'}} src='./assets/img/discord.388e13fa.svg' /></a>
            <a href='https://quickswap-layer2.medium.com/' target='_blank'><img style={{width:'30px'}} src='./assets/img/medium.0120869f.svg' /></a>
            <a href='https://t.me/joinchat/wtpcV3GJC2U3NWFh' target='_blank'><img style={{width:'30px'}} src='./assets/img/telegram.9f354fba.svg' /></a>
            <a href='https://twitter.com/InfinityGloball' target='_blank'><img style={{width:'30px'}} src='./assets/img/twitter.868c24f1.svg' /></a>
            <a href='https://youtube.com/channel/UC8493vxxKgx3JX7Cj1-JJGw' target='_blank'><img style={{width:'30px', height:'30px'}} src='./assets/img/youtube.svg' /></a>
            <a href='https://www.facebook.com/205417191509270/posts/215019870549002/' target='_blank'><img style={{width:'30px'}} src='./assets/img/facebook.svg' /></a>
            <a href='https://info.quickswap.exchange/#/token/0x323a17aa6c92ff9f07dfc2a0701e3323775061cf' target='_blank'><img style={{width:'30px'}} src='./assets/img/imgpsh_fullsize_anim.png' /></a>
            <a href='https://join.skype.com/invite/A8BwTI46xyZL' target='_blank'><img style={{width:'30px'}} src='./assets/img/skype.png' /></a>
            <a href='https://www.linkedin.com/in/luciano-baruk-b3891119b' target='_blank'><LinkedInIcon sx={{fontSize:'35px', color:'white'}}/></a>
            <a href='https://github.com/infinity-global' target='_blank'><GitHubIcon sx={{fontSize:'35px', color:'white'}}/></a>
            <a href='https://opensea.io/collection/infinitynftgamesmeta/' target='_blank'><img style={{width:'30px'}} src='./assets/img/opensea.svg' /></a>
          </Stack>
        </div>
      </div>
    </>
  );
}
export default Footer;