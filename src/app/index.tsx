import { AssistantModal } from "@/components/assistant-modal";
import { MyRuntimeProvider } from "./providers/runtime.provider";

export const App = () => {
  return (
    <MyRuntimeProvider>
      <AssistantModal />
    </MyRuntimeProvider>
  );
}