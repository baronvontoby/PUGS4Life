import React from 'react';
import { MDBContainer, MDBRow, MDBBtn} from 'mdbreact';
import './MyPugs.css';

class MyPugs extends React.Component {

    render () {
        return (
            <div>
            
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