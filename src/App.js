import "./sass/main.scss";

import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


//components
import {Loader} from "./components/Loader"
import {Nav} from "./components/Nav"
import {Landing} from "./components/Landing"
import {About} from "./components/About"
import {Products} from "./components/Products"



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
          </motion.div>): 
          <motion.div className="main" key="main">
           <Nav/>
           <Landing/>
           <About/>
           <Products/>
          </motion.div>}
      </AnimatePresence>
      
    </div>
  );
}

export default App;
