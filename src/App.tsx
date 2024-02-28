import StickyScroll from "./components/StickyScroll";
import StickyItem from "./components/StickyItem";
import './App.css'

function App() {
  return (
    <>
      <StickyScroll>
        <StickyItem animate={()=>{}}>
          <div>第一页</div>
        </StickyItem>
        <StickyItem animate={()=>{}}>
          <div>第二页</div>
        </StickyItem>
      </StickyScroll>
    </>
  )
}

export default App
