export function Categories({categories}){
    return(
    categories.map((el,i) =>{
        return(
        <p key ={i}>{el.name}</p>
        )
    }))
}