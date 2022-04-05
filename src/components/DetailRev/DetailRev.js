import React, { useEffect, useState } from 'react';
import MainRev from '../MainRev/MainRev';

const DetailRev = () => {
    const [detailrev, setDetailRev] = useState([]);

    useEffect(() => {
        fetch('reviewData.json')
            .then(res => res.json())
            .then(data => setDetailRev(data));
    }, [])
    return (
        <div className='md:container md:mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 my-8'>
            
            {
                detailrev.map(mainrev =>
                    <MainRev
                    key={mainrev.id}
                    mainrev={mainrev}>
                    </MainRev>
                    )
            }

        </div>
    );
};

export default DetailRev;