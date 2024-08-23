import React from 'react';
import usePagination from './usePagination';

const sampleData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' }
];

const PaginationComponent = () => {
    const { PaginationControls } = usePagination(sampleData, 2);

    return (
        <div>
            <PaginationControls />
        </div>
    );
};

export default PaginationComponent;