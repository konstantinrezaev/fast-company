import React, { useState } from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const [arrowDirection, setArrowDirection] = useState("");
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" });
        } else {
            onSort({ path: item, order: "asc" });
        }
        setArrowDirection(item);
    };

    const Arrow = () => {
        return (
            selectedSort.order === "asc" ? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>
        );
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {arrowDirection === columns[column].path ? <Arrow/> : null}
                    </th>

                ))}
            </tr>
        </thead>

    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
