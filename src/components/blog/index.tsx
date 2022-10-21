import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '../style/blog.css';


const Blog = (props: any) => {
  const { img, title, date, content } = props;
  return(
    <>
      <div className="blog">
        <div className="blog-row">
        
          <div className='blog-img' style={{backgroundImage: `url(${img})`}}></div>
          <Stack sx={{maxWidth:'900px', minHeight:'200px'}} direction='column' spacing={2}>
            <div className='blog-title'>{title}</div>
            <Stack direction='row' spacing={1}>
              <div className='blog-date'>{date}</div>
              <CalendarTodayIcon sx={{color:'white'}}/>
            </Stack>
            <div className='blog-content'>{content}</div>
            <Link to='/'>
              <Stack direction='row' spacing={1}>
                <div className='blog-link'>LEARN MORE</div>
                <KeyboardDoubleArrowRightIcon sx={{color:"#00a7ff"}}/>
              </Stack>
            </Link>
            
          </Stack>
        </div>
      </div>
    </>
  );
}
export default Blog