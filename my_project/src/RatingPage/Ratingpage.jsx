import React from 'react';

const StarRating = ({ score }) => {
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} style={{ color: '#ffc107' }}>★</span>
      ))}
      {hasHalfStar && <span style={{ color: '#ffc107' }}>☆</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} style={{ color: '#e4e5e9' }}>☆</span>
      ))}
    </div>
  );
};

const ReviewCard = ({ title, score, review, reviewer, date }) => (
  <div style={{
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px'
    }}>
      <h3 style={{ 
        margin: 0,
        fontSize: '18px',
        fontWeight: '600'
      }}>{title}</h3>
      <span style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '16px',
        fontSize: '14px'
      }}>{score.toFixed(1)}</span>
    </div>

    <div style={{ marginBottom: '12px' }}>
      <StarRating score={score} />
    </div>

    <p style={{
      margin: '0 0 16px 0',
      color: '#4a5568',
      fontSize: '14px',
      lineHeight: '1.5',
      flex: '1'
    }}>{review}</p>

    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      borderTop: '1px solid #e2e8f0',
      paddingTop: '12px',
      color: '#718096',
      fontSize: '12px'
    }}>
      <span>By {reviewer}</span>
      <span>{date}</span>
    </div>
  </div>
);

const ReviewGrid = () => {
  const reviews = [
    {
      title: "Outstanding Product",
      score: 5.0,
      review: "This product has completely transformed my workflow. The attention to detail and quality is remarkable.",
      reviewer: "Emma Thompson",
      date: "1 day ago"
    },
    {
      title: "Excellent Value",
      score: 4.5,
      review: "Very impressed with the quality-to-price ratio. Some minor setup challenges but otherwise perfect.",
      reviewer: "Michael Chen",
      date: "3 days ago"
    },
    {
      title: "Highly Impressed",
      score: 4.8,
      review: "After a month of use, I can confidently say this exceeds expectations in every way.",
      reviewer: "Sarah Williams",
      date: "1 week ago"
    },
    {
      title: "Great Purchase",
      score: 4.7,
      review: "The quality is exceptional and the customer support team is very responsive.",
      reviewer: "David Rodriguez",
      date: "2 weeks ago"
    },
    {
      title: "Very Satisfied",
      score: 4.3,
      review: "Solid performance and good build quality. A few small improvements would make it perfect.",
      reviewer: "Lisa Anderson",
      date: "2 weeks ago"
    },
    {
      title: "Worth Every Penny",
      score: 4.9,
      review: "Initially hesitant about the investment, but the quality and features justify the price completely.",
      reviewer: "James Wilson",
      date: "3 weeks ago"
    },
    {
      title: "Feature Rich",
      score: 4.6,
      review: "The feature set is comprehensive and well-implemented. Very thoughtful design overall.",
      reviewer: "Emily Parker",
      date: "1 month ago"
    },
    {
      title: "Quality Product",
      score: 4.4,
      review: "Consistently reliable performance and premium feel. Very satisfied with this purchase.",
      reviewer: "Daniel Kim",
      date: "1 month ago"
    },
    {
      title: "Exceptional Quality",
      score: 4.8,
      review: "The build quality and performance are outstanding. Lives up to all advertising claims.",
      reviewer: "Rachel Martinez",
      date: "2 months ago"
    },
    {
      title: "Perfect Choice",
      score: 5.0,
      review: "Exactly matches my needs. The functionality is perfect and the design is excellent.",
      reviewer: "Thomas Brown",
      date: "2 months ago"
    }
  ];

  const averageRating = reviews.reduce((acc, curr) => acc + curr.score, 0) / reviews.length;

  return (
    <div style={{ padding: '40px 20px' }}>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '32px'
      }}>
        <h2 style={{ 
          marginBottom: '8px',
          fontSize: '28px',
          fontWeight: '600'
        }}>Customer Reviews</h2>
        <p style={{ 
          margin: 0,
          color: '#4a5568',
          fontSize: '18px'
        }}>
          Average Rating: <span style={{ 
            color: '#007bff',
            fontWeight: '600'
          }}>{averageRating.toFixed(1)}</span> / 5.0
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewGrid;