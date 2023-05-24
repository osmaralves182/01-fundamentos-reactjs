import {Post} from "./Post";
import Header from "./components/Header";

import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <Post 
        author="Osmar Alves" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, a dolorem. Mollitia nostrum hic laboriosam fuga placeat, temporibus porro consectetur sit accusantium nobis esse dolorum tenetur atque, sapiente, molestias illum!"
      />

      <Post 
        author="Joaquim Silveira" 
        content="Unde, a dolorem. Mollitia nostrum hic laboriosam fuga placeat, temporibus porro consectetur sit accusantium nobis esse dolorum tenetur atque, sapiente, molestias illum!"
      />
    </div>
  )
}