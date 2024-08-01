import './Sessions.css';
import Heading from '../Heading/Heading';
import Card from './Card';
import WhiteBg from '../WhiteBg/WhiteBg';
import Rcornericon from '../RCornericon/RCornericon'
function Sessions() {
  return (
    <WhiteBg>
      <Rcornericon/>
      <Heading text="Sessions" className="heading" />
      <div className="card-wrapper">
        <Card />
      </div>
    </WhiteBg>
  );
}

export default Sessions;