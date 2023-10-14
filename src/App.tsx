import SuContext from "./layout/Context";
import SuHeader from "./layout/Header";
import SuSider from "./layout/Sider";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={`${styles.suLayout} container mx-auto`}>
      <div className="w-full h-full flex">
        <div className="max-w-[477px] w-full bg-[#F6F7FB]">
          <SuSider />
        </div>
        <div className="w-full max-width-[962px]">
          <SuHeader />
          <SuContext />
        </div>
      </div>
    </div>
  );
}

export default App;
