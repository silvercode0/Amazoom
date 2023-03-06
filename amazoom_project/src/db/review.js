import React from 'react'
import Rating from 'react-rating';

const Review = ({review, handleDeleteReview}) => {
  const location = useLocation();

  return (
    <Col>
    <Card style={{minHeight: '300px', maxHeight: '300px',overflow:'scroll'}} className ="mx-2">
      <Card.Body>
        <div className="d-flex align-items-center text-start">
          { 
          review.photoURL 
          ? 
          <img className="img-fluid rounded-circle" src={review.photoURL} alt="" style={{width:48}}></img>
        </div>
      </Card.Body>
    </Card>
    
    </Col>
    
    
  )
}