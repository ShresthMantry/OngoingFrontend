import React from 'react';
import './card.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';


export default function Car_Card({car}) {
  return (
    <MDBCard className='carcard .row-cols-mid-3'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{car.make}</MDBCardTitle>
        <MDBCardText>
          {car.model}
        </MDBCardText>
        <MDBBtn href='#'>Rent</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}