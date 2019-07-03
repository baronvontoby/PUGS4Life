import React from 'react';
import { MDBContainer, MDBRow, MDBBtn} from 'mdbreact';
import './MyPugs.css';
import '../../components/NavBar';
import NavBar from '../../components/NavBar';

class MyPugs extends React.Component {

    render () {
        return (
            <div>
                <NavBar />
                <MDBContainer>
                    <MDBRow>
                        <MDBBtn className='sport' onClick={() => this.handle2ButtonClick()} color='info' size='lg'>Edit Profile</MDBBtn>

                    </MDBRow>
                        
  
                </MDBContainer>
            </div>
        )
    }

}

export default MyPugs;