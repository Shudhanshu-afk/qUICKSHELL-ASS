import React, { useMemo } from 'react';
import './grid.css';
import Column from '../Column/Column';

function Grid({ gridData, grouping, userIdToData }) {
    const keys = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='grid'>
            {keys.map((key) => (
                <Column key={key} tickets={gridData[key]} grouping={grouping} groupBy={key} userIdToData={userIdToData} />
            ))}
        </div>
    );
}

export default Grid;
