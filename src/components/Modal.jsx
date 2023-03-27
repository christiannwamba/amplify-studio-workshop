import { Dialog } from "@headlessui/react";
import { View, Button } from "@aws-amplify/ui-react";

import "./Modal.css";

export default function Modal({
  title,
  children,
  isModalOpen,
  setIsModalOpen,
}) {
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className="dialog"
    >
      <div className="dialog-wrapper">
        <Dialog.Panel className="dialog-content">
          <Dialog.Title>{title}</Dialog.Title>

          <View>{children}</View>

          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
