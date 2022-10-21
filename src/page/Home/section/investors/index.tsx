const collaborators = [
  "./assets/img/investor/tess.png",
  "./assets/img/investor/mount.png",
  "./assets/img/investor/com.png",
  "./assets/img/investor/yz.png",
  "./assets/img/investor/dapper.png",
  "./assets/img/investor/animoca.png",
  "./assets/img/investor/sky.png",
  "./assets/img/investor/bonfire.png",
  "./assets/img/investor/sevenx.png",
  "./assets/img/investor/fenbushi.png",
  "./assets/img/investor/hashglobal.png",
  "./assets/img/investor/arkStream.png",
  "./assets/img/investor/secondLive.png",
  "./assets/img/investor/capital.png",
  "./assets/img/investor/panony.png",
  "./assets/img/investor/lucidblue.png",
  "./assets/img/investor/matcha.png",

]

const Investors = () => {
  return(
    <>
      <div style={{
          textAlign: 'center',
          marginBottom: '3.958333rem',
          fontSize: '2.5rem',
          fontWeight: '600',
          color: '#e5ecf4',
          lineHeight: '2.604167rem',
          marginTop: '150px',
          position:'relative'
      }}>OUR INVESTORS</div>
      <div style={{display:'flex', flexWrap: 'wrap', width:'85%', margin:'0 auto'}}>
        {
          collaborators.map((info: any, index: number) => (
            <div style={{
              width: '20%',
              minWidth: '7.8125rem',
              height: '3.125rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '3.958333rem',
            }}>
              <img key={index} src={info} style={{width: '50%',minWidth: '100px'}} />
            </div>
          ))
        }
      </div>
    </>
  );
}
export default Investors;