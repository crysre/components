import { AppleAccordion } from "./component/AppleAccordion";
import { ImageCard } from "./component/ImageCard";
import { TodoCard } from "./component/TodoCard";
import { VoiceChat } from "./component/VoiceChat";

function App() {
  return (
    <div className=" font-inter bg-neutral-200 ">
      <VoiceChat/>
      <AppleAccordion />
      <TodoCard />
      <ImageCard />
    </div>
  );
}

export default App;
