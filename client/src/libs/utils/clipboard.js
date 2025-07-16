import { toast } from "react-toastify";

export function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
        toast.success(`Copied ${text} to clipboard`)
    })
    .catch(err => {
      toast.error('Failed to copy:', err);
    });
}
