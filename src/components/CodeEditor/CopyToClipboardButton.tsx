import { useState, useRef } from "react";

type CopyToClipboardButtonProps = { value: string };

export default function CopyToClipboardButton({
  value,
}: CopyToClipboardButtonProps) {
  const [clipboardTick, setClipboardTick] = useState(false);
  const clipboardTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setClipboardTick(true);

    if (clipboardTimeoutRef.current) {
      clearTimeout(clipboardTimeoutRef.current);
    }

    clipboardTimeoutRef.current = setTimeout(() => {
      setClipboardTick(false);
    }, 1000);
  };

  return (
    <button
      className="button button--secondary button--outline"
      onClick={handleCopyToClipboard}
    >
      {clipboardTick ? "✔ Copied" : "Copy"}
    </button>
  );
}
