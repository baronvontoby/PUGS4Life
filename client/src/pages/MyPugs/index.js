import React from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBIcon } from 'mdbreact';
import './MyPugs.css';
import '../../components/NavBar';
import NavBar from '../../components/NavBar';


class MyPugs extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
                <MDBContainer>
                    <row></row>

                    <MDBRow>
                        <MDBCol className="justify-content-center">
                            <img src="https://grfpublishers.com/assets/vendor/img/board.png" alt="avatar" className="img-thumbnail" />
                        </MDBCol>
                        <MDBCol className="justify-content-center">
                            <h1><strong>BARON VON TOBY</strong></h1>
                            <h2><small className="text-muted">Pro Pugger since 2019</small></h2>
                        </MDBCol>
                    </MDBRow>

                

                    <MDBRow>

                        <MDBCol class="col-sm" className="justify-content-center">
                        <MDBIcon icon="dog" size="5x" />
                        <h1><strong>PUP</strong></h1>
                        </MDBCol>

                        <MDBCol  class="col-sm" className="justify-content-center">
                        <div className="my-5">
                            <label htmlFor="customRange1"></label>
                            <input type="range" className="custom-range" id="customRange1" />
                            <h2 className="justify-content-center"><strong>SKILL LEVEL</strong></h2>
                        </div>
                        </MDBCol>

                        <MDBCol class="col-sm" className="justify-content-center">
                        <MDBIcon icon="fire-alt" size="5x" />
                        <h1><strong>PRO</strong></h1>
                        </MDBCol>

                        
                       
                        

                    </MDBRow>

                    <MDBRow className="justify-content-center">
                        <MDBBtn className='sport' onClick={() => this.handle2ButtonClick()} color='info' size='lg'>Edit Profile</MDBBtn>

                    </MDBRow>



                </MDBContainer>
            </div >
        )
    }

}

export default MyPugs;