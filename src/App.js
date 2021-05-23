import { NewsText } from './NewsText';
import *as news from './news.json'

function App() {
  const newsText = news.default;
  return (
    <div>
        {newsText.map((el, i)=>{ 
         return( <div key = {el.id}>
            <NewsText key = {i} elements={el}/>
         </div> )
        })
        }
    </div>
  );
}

export default App;
