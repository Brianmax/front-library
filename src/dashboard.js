import React from "react";
import "./dashboard.css"
function Dashboard(){
    let categories = ['Fantasy', 'True-Crime', 'Science', 'Programming']
    return(
        <div className="content">
            <form action="" className="filter-books">
                <div className="input-filter">
                    <label htmlFor="selection">Category</label>
                    <select name="carlist" id="cars">
                        {categories.map((category, index)=>(
                            <option key={index} value={category}>
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
        </div>
    )
}

export { Dashboard }