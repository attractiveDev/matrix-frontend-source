const collaborators = [
  "./assets/img/chainIDE.png",
  "./assets/img/whiteMatrix.png",
  "./assets/img/hashkey.png",
  "./assets/img/openSea.png",
  "./assets/img/mac.png",
  "./assets/img/rhizemDao.png",
  "./assets/img/flow.png",
  "./assets/img/mask.png",
  "./assets/img/rivermen.png",
  "./assets/img/gameCreator.png",
  "./assets/img/blocto.png",
  "./assets/img/dapper.png",
  "./assets/img/rarible.png",
  "./assets/img/vive.png",
  "./assets/img/phanta.png",

]
const Collaborators = () => {
  return(
    <>
      <div style={{
          textAlign: 'center',
          marginBottom: '3.958333rem',
          fontSize: '2.5rem',
          fontWeight: '600',
          color: '#e5ecf4',
          lineHeight: '2.604167rem',
          marginTop: '150px'
      }}>OUR COLLABORATORS</div>
      <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'center', width:'85%', margin:'0 auto'}}>
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
export default Collaborators;