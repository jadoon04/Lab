import './Cricket.css';
import Card from './LeftBar';
import Navbar from './Nav';
import RightBar from './RightBar';
import Footer from './Footer';
import Middle from './Midddle';

function Cricket() {
    return (  
        <div>

            <div className='row'>

                <div className='col-md-12 col-12' style={{ height:67}}><Navbar/></div>
                <div className='col-md-3 col-12 ' style={{height:770}}><Card/></div>
                <div className='col-md-6 col-12 ' ><Middle/></div> 
                <div className='col-md-3 col-12 ' ><RightBar/></div>
                

            </div>

            {/* <div className='row'>

                <div className='col-md-12 col-12' style={{ height:200}}><Footer/></div>
            </div> */}


        </div>
    );
}

export default Cricket;