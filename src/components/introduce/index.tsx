
import {Stack} from '@mui/material';
import '../style/introduce.css';

const Introduce = (props: any) => {
  const {title, content, url, style} = props;
  return(
    <>
      <div className='intr-row' style={{flexDirection: style}}>
        <Stack direction='column' spacing={2}>
          <div className='intr-title'>
            {title}
          </div>
          <div className='intr-content'>
            {content}
          </div>
        </Stack>
        <img className='section-img' src={url} />
      </div>
    </>
  );
}

export default Introduce;