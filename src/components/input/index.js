import { FaSearch } from "react-icons/fa"
import "./style.scss"

export const SearchInput = ({value, onChange, coverStyle={}, placeholder="Search by category, Product and brands", showCategory=true,...props})=>{
    return (
        <>
        <div className="search-input-container" style={coverStyle}>
            <div className="search-icon">
                <FaSearch size={15} color="black" />
            </div>
            <input 
                className="search-input" 
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...props}
            />
            {showCategory && (
                <button className="search-category-btn">
                    Category
                </button>
            )}
        </div>
        </>
    )
}

export const NormalInput = ({label ,value, onChange, type="text",...props})=>{
    return (
        <div className="form-group">
            <label className="form-label">
                {label}
            </label>
            <input type={type} value={value} onChange={onChange} className="form-input" {...props} />
        </div>
    )
}

export const NormalSelect = ({label="Select an Option",value, onChange, children,...props})=>{
    return (
        <div className="form-group">
            <select value={value} onChange={onChange} className="form-select" {...props}>
                <option value={""}>{label}</option>
                {children}
            </select>
        </div>
    )
}

export const SecondaryInput = ({label ,value, onChange, type="text",...props})=>{
    return (
        <div className="form-group">
            <label className="sec-form-label">
                {label}
            </label>
            <input type={type} value={value} onChange={onChange} className="sec-form-input" {...props} />
        </div>
    )
}

export const NormalTextArea = ({label ,value , placeholder="", onChange,...props})=>{
    return (
        <div className="form-group">
            <label className="form-label">
                {label}
            </label>
            <textarea rows={5} placeholder={placeholder} value={value} onChange={onChange} className="form-input" {...props}>
            </textarea>
        </div>
    )
}