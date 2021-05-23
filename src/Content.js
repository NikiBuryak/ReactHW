export function Content({content}) {
    return (<p dangerouslySetInnerHTML ={{__html:content}}/>)
}