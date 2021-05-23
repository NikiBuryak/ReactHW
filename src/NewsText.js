import { Title } from './Title';
import { Content } from './Content';
import { Date } from './Date';
import { Categories } from './Categories';
import { Image } from './Image';
import { Name } from './Name';


export function NewsText({elements}){
    return(
      <ul>
          <li>
          <Title {...elements}/>
          <Content  {...elements}/>
          <Date  {...elements}/>
          <Categories {...elements}/>
          <Image {...elements}/>
          <Name {...elements}/>
          </li>
      </ul>
          )
}