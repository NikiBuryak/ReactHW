import { Component } from "react";
import PropTypes from 'prop-types';
const countries = ['ua','usa', 'uk','knr'];
const categories = ['category1','category2','category3'];
const types = ['type1', 'type2', 'type3'];


class ProductForm extends Component{
    state ={
        productCode:'',
        productTitle:'',
        productDescript:'',
        productLink:'',
        productStock: false,
        checkedType: null,
        productCategories: [],
        productCountries: [],
        productMade:{},
    };
    
    onTextChange =(e) => {
        let {target: {name,value}} = e;
        this.setState({
            [name]:value,
        })
        
    }

    addToStock = (e) =>{
        this.setState({
            productStock: !this.state.productStock,
        })
    }

    onSubmitClick =(e) =>{
        e.preventDefault();
        let {handleSubmit} = this.props;
        this.state.productMade = {...this.state};
        handleSubmit(this.state.productMade);
    }

    onTypeCheck =(e) =>{
       
        let current = e.target.name;
        this.setState({
            checkedType:current,
        })
        
    }

    onCountrySelect =(e)=>{
        let countries = this.state.productCountries;
        let country = e.target.value;
        if (countries.find(el => el === country)) {
            countries = countries.filter(el => el !== country);
            } else {
                countries = [...countries, country];
            }
            this.setState({
                productCountries:countries,
            })
    }

    onCheckClick = (e)=>{
        let categories = this.state.productCategories;
        let category = e.target.name;
        if (categories.find(el => el === category)) {
            categories = categories.filter(el => el !== category);
            } else {
                categories = [...categories, category];
            }
            this.setState({
                productCategories:categories,
            })
    }


    render(){
        let {handleSubmit} = this.props;
        return(
            <div className="poduct-form-wrapper">
                <form className = "product-form" onSubmit={this.onSubmitClick}>
                    <div>
                    <label htmlFor = "">Code<input type="text" value ={this.state.productCode} onChange ={this.onTextChange} name="productCode"></input></label>
                    </div>
                    <div>
                    <label htmlFor = "">Title<input type="text" value ={this.state.productTitle} name="productTitle" onChange ={this.onTextChange}></input></label>
                    </div>
                    <div>
                    <label htmlFor = "">Description<input type="textarea" value ={this.state.productDescript} name="productDescript" onChange ={this.onTextChange}></input></label>
                    </div>
                    <div>
                    <label htmlFor = "">Link<input type="text" value ={this.state.productLink} name="productLink" onChange ={this.onTextChange}></input></label>
                    </div>

                    <div className="checkBoxes">
                        {categories.map(category =>(
                            <label key ={category}  htmlFor = "">{category}<input type="checkbox" name={category} onClick ={this.onCheckClick}></input></label>
                        ))}
                    </div>
                    
                    <div className="typeCheck" onClick={this.onTypeChecked}>
                        {types.map(type=>
                             <label key = {type} htmlFor = "">{type}<input type="radio" value = {type} checked = {this.state.checkedType === type} name ={type} onChange = {this.onTypeCheck}></input></label>
                        )}
                    </div>

                    <label htmlFor = "">Stock<input type="checkbox" name="productStock" onClick={this.addToStock}></input></label>

                    <label htmlFor="">
                    <select className="countriesSelector" multiple onChange={this.onCountrySelect}>
                        {countries.map(country =>(
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                    </label>
                    <input type="submit" value="Submit"></input>
                </form>
               {this.state.submit && handleSubmit(this.state.productMade)}
            </div>
            
        )
    }
}

ProductForm.propTypes = {
    productCode: PropTypes.number.isRequired,
}

ProductForm.defaultProps = {
    productCode: 123,
}
export default ProductForm;