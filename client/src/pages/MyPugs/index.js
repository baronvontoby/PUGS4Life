import React from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBIcon } from 'mdbreact';
import './MyPugs.css';


class MyPugs extends React.Component {

    render() {
        return (
            <div>


                <MDBContainer>

                    <MDBRow>
                        <MDBCol>
                            <img src="https://grfpublishers.com/assets/vendor/img/board.png" alt="avatar" className="img-thumbnail" />
                        </MDBCol>
                        <MDBCol>
                            <h1><strong>BARON VON TOBY</strong></h1>
                            <h2><small className="text-muted">Pro Pugger since 2019</small></h2>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol>
                            <h1><strong>SKILL LEVEL</strong></h1>
                        </MDBCol>
                    </MDBRow>


                    <MDBRow>

                        <MDBCol>
                        <MDBIcon icon="dog" size="5x" />
                        <h1><strong>PUP</strong></h1>
                        </MDBCol>

                        <MDBCol>
                        <div className="my-5">
                            <label htmlFor="customRange1"></label>
                            <input type="range" className="custom-range" id="customRange1" />
                            <h2><strong>SKILL LEVEL</strong></h2>
                        </div>
                        </MDBCol>

                        <MDBCol>
                        <MDBIcon icon="fire-alt" size="5x" />
                        <h1><strong>PRO</strong></h1>
                        </MDBCol>

                        
                       
                        

                    </MDBRow>

                    <MDBRow>
                        <MDBBtn className='sport' onClick={() => this.handle2ButtonClick()} color='info' size='lg'>Edit Profile</MDBBtn>

                    </MDBRow>



                </MDBContainer>
            </div >
        )
    }

}

export default MyPugs;