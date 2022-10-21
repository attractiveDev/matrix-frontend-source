import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {styled} from '@mui/material/styles';
import 'react-vertical-timeline-component/style.min.css';
import './roadmap.css';



const Roadmap = () => {
  return(
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          position="right"
          className="vertical-timeline-element--work custom"
          contentStyle={{ background: 'transparent', border: "none", boxShadow:'none'}}
          contentArrowStyle={{ display:'none' }}
          iconStyle={{ background: 'white', color: '#fff'  }}
          icon={<img className='infinity-logo' src='./assets/img/infinity-logo.png' />}
        >
          <h3 className="vertical-timeline-element-title roadmap-title">2023 Q4</h3>
          <h4 className="vertical-timeline-element-subtitle roadmap-text">Community Pre-sale</h4>
          <p className='road-content'>
            Oct 15th: 1st round (up to 2000 Lands on Ethereum)
            Oct 26th: 2nd round (up to 5000 Lands on Polygon)
            Nov 8th: 3rd round (up to 3000 Lands on Ethereum)
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          position="left"
          className="vertical-timeline-element--work"
          iconStyle={{ background: "white", color: '#fff' }}
          contentStyle={{ background: 'transparent', border: "none", boxShadow:'none'}}
          contentArrowStyle={{ display:'none' }}
          icon={<img className='infinity-logo' src='./assets/img/infinity-logo.png' />}
        >
          <h3 className="vertical-timeline-element-title roadmap-title">2024 Q1</h3>
          <h4 className="vertical-timeline-element-subtitle roadmap-text">Multichain Identity System</h4>
          <p className='road-content'>
            Support for Ethereum and Polygon Accounts for INFINITY Identity System
            Globalization and Targeting of Communities and Brands
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          position="right"
          className="vertical-timeline-element--work"
          iconStyle={{ background: "white", color: '#fff' }}
          icon={<img className='infinity-logo' src='./assets/img/infinity-logo.png' />}
          contentStyle={{ background: 'transparent', border: "none", boxShadow:'none'}}
          contentArrowStyle={{ display:'none' }}
        >
          <h3 className="vertical-timeline-element-title roadmap-title">2024 Q2</h3>
          <h4 className="vertical-timeline-element-subtitle roadmap-text">INFINITY World v1.0: A Traversable World</h4>
          <p className='road-content'>
            Release of A Traversable World with Core 3D DApps
            Space Virtual Machine SDK and API Closed Beta Testing
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          position="left"
          className="vertical-timeline-element--work"
          iconStyle={{ background: "white", color: '#fff' }}
          icon={<img className='infinity-logo' src='./assets/img/infinity-logo.png' />}
          contentStyle={{ background: 'transparent', border: "none", boxShadow:'none'}}
          contentArrowStyle={{ display:'none' }}
        >
          <h3 className="vertical-timeline-element-title roadmap-title">2024 Q3</h3>
          <h4 className="vertical-timeline-element-subtitle roadmap-text">INFINITY World Builder and Developer API & SDK</h4>
          <p className='road-content'>
            Builder API and SDK Release
            Coder API and SDK Release
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          position="right"
          className="vertical-timeline-element--education"
          iconStyle={{ background: "white", color: '#fff' }}
          icon={<img className='infinity-logo' src='./assets/img/infinity-logo.png' />}
          contentStyle={{ background: 'transparent', border: "none", boxShadow:'none'}}
          contentArrowStyle={{ display:'none' }}
        >
          <h3 className="vertical-timeline-element-title roadmap-title">2024 Q4</h3>
          <h4 className="vertical-timeline-element-subtitle roadmap-text">INFINITY World v2.0: A Programmable World</h4>
          <p className='road-content'>
            Object and Scene Editor & Low-Code Creation Tool Release
            Partnership and Collaboration with Builder Organizations
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          position="left"
          className="vertical-timeline-element--education"
          iconStyle={{ background: "white", color: '#fff' }}
          icon={<img className='infinity-logo' src='./assets/img/infinity-logo.png' />}
          contentStyle={{ background: 'transparent', border: "none", boxShadow:'none'}}
          contentArrowStyle={{ display:'none' }}
        >
          <h3 className="vertical-timeline-element-title roadmap-title">2025 Q1</h3>
          <h4 className="vertical-timeline-element-subtitle roadmap-text">INFINITY World v3.0: A Infinite world</h4>
          <p className='road-content'>
            Programmable NFT Support
            Global Creator Grant Event
            Project Origin: AI-Generated Metaverse Release
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default Roadmap;