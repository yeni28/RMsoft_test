import './App.css';
import './Box.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> 박스 그리기 </p>
      </header>
      {/* 전체 박스 */}
      <div className="bottom-box">
        {/* 좌측 상단 */}
        <div className="half-box pink">
          <div className="quarter-box white"></div>
        </div>
        {/* 좌측 하단 */}
        <div className="half-box botoom-left">
        <div className="quarter-box white center"></div>
        </div>
        {/* 우측 상단 */}
        <div className="half-box top-right">
          <div className="quarter-box sky"></div>
          <div className="quarter-box blue"></div>
        </div>
        {/* 우측 하단 */}
        <div className="half-box yellow"></div>
        {/* 중앙 */}
        <div className="half-box green">
          <div className="quarter-box red"></div>
          <div className="quarter-box white bottom-center"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
