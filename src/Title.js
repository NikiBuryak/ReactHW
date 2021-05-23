export function Title(props){
    const isSpecialNews = props.isSpecial;
    const isLink = props.link;
    console.log(isLink)
    return(
        isSpecialNews ? <h1> {isLink ? <a href={isLink}>{props.title}</a>: props.title}</h1> : <h3>{props.title}</h3>
    )
}
