import { Stack } from '@mui/material'
import '../style/accordion.css';

const Rect = (props: any) => {
  const { data } = props;
  console.log("data:::", data);
  return(
    <>
      <div className='rect'>
        <Stack direction='column' spacing={1} >
          <img src={data.url} />
          <div className='ratio'>{data.size}</div>
        </Stack>
        <Stack direction='column' spacing={2}>
          <Stack direction='column' spacing={1}>
            <Stack direction='row' alignItems='center' spacing={0.5}>
              <span className='font-style-1'>{data.amount}</span>
              <span className='font-style-2'>/ {data.allAmount}</span>
            </Stack>
            <span className='font-style-2'>AVAILABLE</span>
            <Stack direction='row' spacing={1}>
              <img style={{width:'15px'}} src='./assets/img/ether.png' />
              <span className='ether-amount'>{data.token}</span>
              <span className='eth'>ETH</span>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </>
  );
}
export default Rect;