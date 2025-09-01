import { AssistantModal } from "@/components/assistant-modal";
import { MyRuntimeProvider } from "./providers/runtime.provider";

export default function App() {
  return (
    <MyRuntimeProvider>
      <AssistantModal />
    </MyRuntimeProvider>
  );
}