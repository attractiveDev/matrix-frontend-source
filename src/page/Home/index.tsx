import { useEffect, useRef } from "react";
import { Stack, Button } from '@mui/material'
import Accordion from '../../components/accordion';
import Introduce from '../../components/introduce';
import Roadmap from '../../components/roadmap';
import Blog from '../../components/blog';
import ViewAllBlog from '../../components/viewAllBlog';
import Collaborators from './section/collaborators';
import Investors from './section/investors';
import Footer from '../../components/footer';
import './home.css';


const introData = [
	{
		title: "Multichain Metaverse",
		content: "Matrix World is a distinctive virtual world that will support different blockchain infrastructures. Players can explore the world with different on-chain identities.",
		url: "./assets/img/section1.png",
		style: "row"
	},
	{
		title: "Immersive 3D DApps",
		content: "Creators can enrich and extend the world by building immersive 3D decentralized applications (DApps) that can connect to external services and applications. For example, players can visually trade and purchase NFTs through 3D DApps from OpenSea and other marketplaces.",
		url: "./assets/img/section2.png",
		style: "row-reverse"
	},
	{
		title: "Programmable NFTs & Objects",
		content: "All in-game objects and NFTs have their own lifecycles. Landowners can customize their behaviors, appearances, and transformations via Turing-complete programs.",
		url: "./assets/img/section3.png",
		style: "row"
	},
	{
		title: "Create With Automation",
		content: "Import various NFTs on the blockchain and create in-game buildings and constructions with automated tools.",
		url: "./assets/img/section4.png",
		style: "row-reverse"
	},
	{
		title: "Gameplay & Entertainment",
		content: "Both public and user-created entertainment venues will be built in the virtual world, including 3D games, NFT galleries, and sports centers. Players can enjoy their second life here.",
		url: "./assets/img/section5.png",
		style: "row"
	}
]

const blogInfo = [
	{
		img: './assets/img/blog1.png',
		title:'Multi wallet support — One account for all your Matrix World assets!',
		date:'08-09',
		content: 'Today, Matrix World released its multi-wallet account support. What is multi-wallet support? Multi-wallet support allows you to have one profile while owning Matrix World'
	},
	{
		img: './assets/img/blog2.png',
		title:'Product Director AMA &amp; Project Update',
		date:'06-14',
		content: '13/07 — Today we hosted our weekly Twitter Space with our newly hired Product Director, Josh Smillie. The focus was to introduce Josh, learn about their previous work experience,'
	},
	{
		img: './assets/img/blog3.png',
		title:'Protecting Your Digital Assets Pt. 5 — When Things Go Wrong',
		date:'05-05',
		content: 'Account security with Matrix World, Part 5 — What if something goes wrong? Sometimes even intelligent people will fall victim to new scams; if this is the case and you think you’ve'
	}
]

const firstWave = [
	{
		url: "./assets/img/land1.png",
		size: '1X1',
		amount: "0",
		allAmount: "560",
		token: "0.2"
	},
	{
		url: "./assets/img/land2.png",
		size: '2X2',
		amount: "0",
		allAmount: "110",
		token: "0.8"
	},	
	{
		url: "./assets/img/land3.png",
		size: '3X3',
		amount: "0",
		allAmount: "48",
		token: "1.8"
	},	
	{
		url: "./assets/img/land4.png",
		size: '6X6',
		amount: "0",
		allAmount: "13",
		token: "7.2"
	}
]

const secondWave = [
	{
		url: "./assets/img/land1.png",
		size: '1X1',
		amount: "0",
		allAmount: "1575",
		token: "60"
	},
	{
		url: "./assets/img/land2.png",
		size: '2X2',
		amount: "0",
		allAmount: "350",
		token: "240"
	},	
	{
		url: "./assets/img/land3.png",
		size: '3X3',
		amount: "0",
		allAmount: "165",
		token: "540"
	},	
	{
		url: "./assets/img/land4.png",
		size: '6X6',
		amount: "0",
		allAmount: "15",
		token: "2160"
	}
]

const thridWave = [
	{
		url: "./assets/img/land1.png",
		size: '1X1',
		amount: "0",
		allAmount: "655",
		token: "60"
	},
	{
		url: "./assets/img/land2.png",
		size: '2X2',
		amount: "0",
		allAmount: "240",
		token: "0.8"
	},	
	{
		url: "./assets/img/land3.png",
		size: '3X3',
		amount: "0",
		allAmount: "77",
		token: "1.8"
	},	
	{
		url: "./assets/img/land4.png",
		size: '6X6',
		amount: "0",
		allAmount: "12",
		token: "7.2"
	}
]

const Home = () => {

  return(
    <>
      <div className="home-wrapper">
        <video className='video' controls autoPlay loop src="https://gateway.pinata.cloud/ipfs/QmeR6NHkTQqV1dDMx1unugQRaHoeTFjWTADi4KFkXbXCPt"/>
        <div className="register-container">
          <div className='register'>
              <Stack direction='column' spacing={5}>
                {/* <img className='matrix-text' src='./assets/img/matrix-textLogo.svg' /> */}
								<div style={{color:'white', fontSize:'50px'}}>Infinity Game</div>
                <div className='intro'>A Programmable 3D Multichain Metaverse</div>
                <Button sx={{
                  backgroundColor:'#0062ff',
                  fontSize:'20px',
                  fontWeight:600,
                  padding:'10px 30px',
                  color:'white'
                }}
								target="_self"
          			component="a"
          			href="https://twitter.com/InfinityGloball"
								>REGISTER</Button>
              </Stack>
            </div>
        </div>
        <div className='container accordion'>
					<Accordion order="1" size="2000" chain="Ethereum" data={firstWave} />
					<Accordion order="2" size="5000" chain="Polygon" data={secondWave} />	
					<Accordion order="3" size="3000" chain="Ethereum" data={thridWave} />		
        </div>

				<div className='container' style={{position:'relative'}}>
					<Stack direction='column' spacing={5}>
						{
							introData.map((info: any, index: any) => (
								<Introduce key={index} title={info.title} content={info.content} url={info.url} style={info.style} />
							))
						}
					</Stack>	

					<div className='section-title'>ROADMAP</div>
						<Roadmap/>

						<div className='section-title'>BLOG</div>
						{/* {
							blogInfo.map((info, index) => (
								<Blog key={index} img={info.img} title={info.title} date={info.date} content={info.content}/>
							))
						} */}

					<ViewAllBlog/>	
					<Collaborators/>
					<Investors/>
				</div>
				<Footer/>
      </div>
    </>	
  );
}

export default Home;

