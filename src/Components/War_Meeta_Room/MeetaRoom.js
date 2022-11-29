import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import ak from '../../images/ak.jpg'
export default function App() {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <MDBTabs justify className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
           Room No. 301
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
          Room No. 302
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
           Room No. 303
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          {     
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                    <h3 style={{textAlign:'center'}}>Student Details</h3>
                        <MDBRow>
                            <MDBCol><p><b>Name </b>: Akanksha Faujdar </p>
                            <p><b>Roll No </b> : 19CSE009 </p>
                            <p><b>Branch</b> : Computer Science Engineering </p>
                            <p><b>Year of Admission </b>: 2023</p>
                            </MDBCol>
                            <MDBCol>
                        <img  style={{height: 150,width: 130}} src={ak}></img>
                    </MDBCol>
                          
                        </MDBRow>
                       
                       
                        <MDBRow>
                            <MDBCol><p><b>Father's Name</b> : Rajendra Singh</p></MDBCol>
                            <MDBCol><p><b>Mother's Name</b>: Vimlesh</p></MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol><p><b>Blood Group</b> : B+</p></MDBCol>
                            <MDBCol><p><b>Chronical Disease</b>(if any): No</p></MDBCol>
                        </MDBRow>
                       
                        <MDBRow>
                            <MDBCol><p><b>Contact No.</b> : +91 9660773029</p></MDBCol>
                            <MDBCol><p><b>Parent's Contact No.</b>: 9660824987</p></MDBCol>
                        </MDBRow>
                        <p><b>Permanent Address</b>: Flat No. 701 , Vardhaman Empire, Jaipur , Rajasthan, 302029</p>
                    </MDBCol>
                   
          
                <MDBCol>
                <h3 style={{textAlign:'center'}}>Family/Gaurdian Details</h3>
                <MDBRow>
            <MDBCol> <img  style={{height: 150,width: 130}}></img></MDBCol>
            <MDBCol><p><b>Name </b>:Rishabh Fauzdar</p>
                            <p><b>Relation</b> : Brother</p>
                            <p><b>Contact No.</b> :9660824987</p></MDBCol>
                            <MDBCol> <img  style={{height: 150,width: 130}} ></img></MDBCol>
            <MDBCol><p><b>Name </b>:Rishabh Fauzdar</p>
                            <p><b>Relation</b> : Brother</p>
                            <p><b>Contact No.</b> :9660824987</p></MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol> <img  style={{height: 150,width: 130}} ></img></MDBCol>
            <MDBCol><p><b>Name </b>:Rishabh Fauzdar</p>
                            <p><b>Relation</b> : Brother</p>
                            <p><b>Contact No.</b> :9660824987</p></MDBCol>
                            <MDBCol> <img  style={{height: 150,width: 130}} ></img></MDBCol>
            <MDBCol><p><b>Name </b>:Rishabh Fauzdar</p>
                            <p><b>Relation</b> : Brother</p>
                            <p><b>Contact No.</b> :9660824987</p></MDBCol>
                </MDBRow>
                </MDBCol>
                </MDBRow>
                </MDBContainer>
          }
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab2'}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
