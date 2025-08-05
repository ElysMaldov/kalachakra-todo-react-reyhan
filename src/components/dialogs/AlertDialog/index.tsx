import Dialog, {
  type DialogProps
} from "@/components/dialogs/AlertDialog/Dialog";
import Overlay, {
  type OverlayProps
} from "@/components/dialogs/AlertDialog/Overlay";

export interface AlertDialogProps
  extends Omit<OverlayProps, "children">,
    DialogProps {}

/**
 * Can be used for creating or updating a todo.
 */
const AlertDialog = ({ children }: AlertDialogProps) => {
  return (
    <Overlay>
      <Dialog>{children}</Dialog>
    </Overlay>
  );
};

export default AlertDialog;
