import "./sass/main.scss";

import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import {Loader} from "./components/Loader"



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);
  return (
    <div className={loading?"App-loading":"App-loaded"}>
      <AnimatePresence>
        {loading? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>): <div><h1>WE BUILD INCREDIBLE COMPACT KITCHEN SOLUTIONS</h1></div>}
      </AnimatePresence>
      
    </div>
  );
}

export default App;
