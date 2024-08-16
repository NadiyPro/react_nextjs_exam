'use client';
import React, { useState } from 'react';

interface StarRatingProps {
    totalStars?: number;
    rating?: number;
    onRate?: (rating: number) => void;
    disabled?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, rating = 0, onRate, disabled = false }) => {
    const [currentRating, setCurrentRating] = useState<number>(rating);
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const handleClick = (rating: number) => {
        if (!disabled) {
            setCurrentRating(rating);
            if (onRate) {
                onRate(rating);
            }
        }
    };

    const handleMouseOver = (rating: number) => {
        if (!disabled) {
            setHoverRating(rating);
        }
    };

    const handleMouseOut = () => {
        if (!disabled) {
            setHoverRating(null);
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            {[...Array(totalStars)].map((_, i) => {
                const starRating = i + 1;
                return (
                    <span
                        key={i}
                        style={{
                            cursor: disabled ? 'not-allowed' : 'pointer',
                            color: hoverRating !== null ? (starRating <= hoverRating ? 'gold' : 'gray') : (starRating <= currentRating ? 'gold' : 'gray'),
                            fontSize: '2rem',
                        }}
                        onClick={() => handleClick(starRating)}
                        onMouseOver={() => handleMouseOver(starRating)}
                        onMouseOut={handleMouseOut}
                    >
            ★
          </span>
                );
            })}
        </div>
    );
};

export default StarRating;