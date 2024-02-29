import StickyScroll from "./components/StickyScroll";
import StickyItem from "./components/StickyItem";
import './App.css'

function App() {
  return (
    <>
      <StickyScroll>
        <StickyItem animate={(key,value)=>{
          console.log('第一个',key,value);
          
        }}>
          <div>第一页</div>
        </StickyItem>
        <StickyItem animate={(key,value)=>{
          console.log('第二个',key,value);
          
        }}>
          <div>第二页</div>
        </StickyItem>
      </StickyScroll>
      <div style={{height:'200vh'}}>
        视差滚动之外
      </div>
    </>
  )
}

export default App
