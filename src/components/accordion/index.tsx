import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Rect from './rect';
import '../style/accordion.css';
import { Stack } from '@mui/material';


const Title = styled(Typography)({
  fontSize: '22px',
  fontWeight: '600',
  color: '#0060f9',
  padding:'1px 3px'
})

const Line = styled('div')({
  width:'2px',
  height:'30px',
  background:'#0060f9',
  margin:'2px 10px'

})
export default function SimpleAccordion(props: any) {
  const { order, size, chain, data} = props;
  console.log("dataA:::", data);
  return (
    <div>
      <Accordion sx={{backgroundColor:'var(--accordion)', margin:'20px 0px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'#0060f9', fontSize:'50px'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Title >{order}st WAVE</Title>
          <Line/>
          <Title sx={{color:'#e5ecf4', fontSize:'20px', fontWeight:400}}>{size} Lands on</Title>
          <Title sx={{fontSize:'20px', fontWeight:400}}>{chain}</Title>
        </AccordionSummary>
        <AccordionDetails sx={{
          background:'#1c214d',
          padding:'50px'
        }}>
          <div className='details'>
            {
              data.map((info: any, index: number) => (
                <Rect key={index} data={info}/>
              ))
            }
          </div>
          <Stack direction='row' justifyContent='center' alignItems='center'>
            <img className='sold' src='./assets/img/sold.png' />
          </Stack> 
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
