import React, { useEffect, useState } from 'react';
import MainRev from '../MainRev/MainRev';
import Review from '../Review/Review';

const CustRev = () => {
    const [custrev, setCustrev] = useState([]);

    useEffect(() => {
        fetch('reviewData.json')
            .then(res => res.json())
            .then(data => setCustrev(data));
    }, [])

    return (
        <div  className='md:container md:mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 my-8'>
            {
                custrev.slice(0,3).map(mainrev => <MainRev
                    key={mainrev.id}
                    mainrev={mainrev}
                    ></MainRev>)
            }

            {/* {
                custrev.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            } */}
        </div>
    );
};

export default CustRev;