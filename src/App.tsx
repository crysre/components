import { AppleAccordion } from "./component/AppleAccordion";
import { ImageCard } from "./component/ImageCard";
import { TodoCard } from "./component/TodoCard";

function App() {
  return (
    <div className=" font-inter bg-neutral-200 ">
      <AppleAccordion />
      <TodoCard />
      <ImageCard />
    </div>
  );
}

export default App;
