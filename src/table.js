import React from "react";

function Table()
{
    return(
        <div className="table">
            <table>
                <tr>
                    <th>Book ID</th>
                    <th>Book Name</th>
                    <th>ISBN</th>
                    <th>Description</th>
                    <th>Publisher</th>
                    <th>Author</th>
                    <th>File</th>
                </tr>
            </table>
        </div>
    )
}

export {Table}