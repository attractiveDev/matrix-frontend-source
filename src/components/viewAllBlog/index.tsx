import { Button, Stack } from '@mui/material';


const ViewAllBlog = () => {
  return(
    <>
      <Stack direction='row' justifyContent='end' sx={{width:'90%'}}>
        <Button
          sx={{
            fontSize: '0.729167rem',
            borderRadius: '0.104167rem',
            backgroundColor: '#00a7ff',
            padding:'10px 40px',
            color:'white',
          }}
          target="_self"
          component="a"
          href=""
        >VIEW ALL BLOG
        </Button>
      </Stack>
    </>
  );
}

export default ViewAllBlog;