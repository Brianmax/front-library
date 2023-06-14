import React from "react";
import "./dashboard.css"
function Dashboard(){
    let categories = ['Fantasy', 'True-Crime', 'Science', 'Programming']
    let numbers = []
    let values_array = ['3', 'Lord of the rings',
    '3040', 'lsjdslf', '1', '1', 'weewwe']
    for(let i = 0; i<7; i++){
        numbers.push(i)
    }
    return(
        <div className="content">
            <form action="" className="filter-books">
                <div className="input-filter">
                    <label htmlFor="selection">Category</label>
                    <select name="carlist" id="cars">
                        {categories.map((category, index)=>(
                            <option>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-filter">
                    <label htmlFor="author">Author</label>
                    <input type="text" placeholder="Enter Author"/>
                </div>
                <div className="input-filter">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="input-filter">
                    <label htmlFor="isbn">ISBN</label>
                    <input type="text" placeholder="ISBN" />
                </div>
                <div className="input-filter">
                    <button className="button-result">Filter Results</button>
                </div>
            </form>
            <div className="export-data">
                <button className="export-data-button">
                    <a href="">Export data</a>
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Book Name</th>
                        <th>ISBN</th>
                        <th>Description</th>
                        <th>Publisher</th>
                        <th>Author</th>
                        <th>File</th>
                    </tr>
                </thead>
                <tbody>
                    {numbers.map((row, index)=>{
                        return(
                            <tr>{values_array.map((item, i)=>{
                                return(
                                    <td>{item}</td>
                                )
                            })}</tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export { Dashboard }