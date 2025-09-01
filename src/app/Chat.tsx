import { AssistantModal } from "@/components/assistant-modal";
import { MyRuntimeProvider } from "./providers/runtime.provider";

export const Chat = () => {
  return (
    <MyRuntimeProvider>
      <AssistantModal />
    </MyRuntimeProvider>
  );
}