'use client';

import React, { useState, useEffect } from 'react';

interface StarRatingProps {
  outOf?: number;
  staticRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  outOf = 5,
  staticRating = 0,
}) => {
  const [stars, setStars] = useState<number[]>([]);
  const [rating, setRating] = useState<number>(0);

  const selectedIcon = '★';
  const deselectedIcon = '☆';

  useEffect(() => {
    const starArray = [];
    for (let i = 0; i < outOf; i++) {
      starArray.push(i + 1);
    }
    setStars(starArray);
    // Set the rating to the staticRating prop
    setRating(staticRating);
  }, [outOf, staticRating]);

  return (
    <div className="flex gap-1">
      {stars.map((star) => (
        <span key={star}>{rating >= star ? selectedIcon : deselectedIcon}</span>
      ))}
    </div>
  );
};

export default StarRating;
