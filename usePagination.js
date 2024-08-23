import { useState, useMemo } from 'react';

const usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = useMemo(() => Math.ceil(data.length / itemsPerPage), [data, itemsPerPage]);

    const currentPageData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return data.slice(start, start + itemsPerPage);
    }, [data, currentPage, itemsPerPage]);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const PaginationControls = () => {
        return (
            <div>
                <ul>
                    {currentPageData.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
                <div>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button key={i + 1} onClick={() => goToPage(i + 1)} disabled={currentPage === i + 1}>
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return {
        PaginationControls
    };
};

export default usePagination;