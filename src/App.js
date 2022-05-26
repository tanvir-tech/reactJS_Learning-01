import data from './data.json';
import Card from './component/Card';
import Card2 from './component/Card2';
import ReactBootStrap from './component/ReactBootStrap';
import State from './component/State';
import OnChange from './component/OnChange';
import State_By_FC from './component/State_By_FC';
import Form from './component/form';
import Toggle from './component/Toggle';
import FAQS from './faq/FAQS';
import UseEffect from './hook/UseEffect';
import DataFetch from './hook/DataFetch';
import DataFetch2 from './hook/customHook/DataFetch2';




let items = [];
// for (let i = 0; i < data.length; i++) {
//     items.push(<Card title={data[i].title} description={data[i].description} />)
// }

items = data.map((item,index)=><Card title={item.title} description={item.description} key={index} />);

function App() {

    return <div>
        {/* {items[0]}
        <Card2 name="Tanvir" />
        <ReactBootStrap />
        <State />
        <State_By_FC />
        <OnChange />
        <Form /> */}

        {/* <Toggle />
        <FAQS /> */}

        {/* <UseEffect /> */}
        {/* <DataFetch /> */}
        <DataFetch2 />

    </div>
}

export default App;