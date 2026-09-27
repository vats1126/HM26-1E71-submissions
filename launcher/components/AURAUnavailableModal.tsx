"use client";

interface AURAUnavailableModalProps {
  auraUrl: string;
  onClose: () => void;
}

/**
 * AURAUnavailableModal — shown when the user clicks "Launch AURA Learn"
 * but AURA Learn is not yet running.
 *
 * This is the graceful unavailable state handler. It:
 * - Clearly explains AURA is not running yet
 * - Shows the configured URL so the user knows where to start it
 * - Does NOT fabricate any AURA content
 * - Does NOT iframe or embed anything
 */
export default function AURAUnavailableModal({
  auraUrl,
  onClose,
}: AURAUnavailableModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="aura-modal-title"
      aria-describedby="aura-modal-description"
      onClick={handleBackdropClick}
    >
      <div className="modal-panel">
        {/* Close button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
          type="button"
        >
          ✕
        </button>

        {/* Icon */}
        <div className="modal-icon" aria-hidden="true">
          ◎
        </div>

        {/* Header */}
        <div className="modal-header">
          <h2 id="aura-modal-title" className="modal-title">
            AURA Learn — Not Running Yet
          </h2>
        </div>

        {/* Body */}
        <div className="modal-body" id="aura-modal-description">
          <p className="modal-message">
            <strong>AURA Learn is not running yet.</strong> Start the AURA Learn
            application and try again.
          </p>

          <div className="modal-url-block">
            <span className="modal-url-label">Configured AURA URL</span>
            <code className="modal-url-code">{auraUrl}</code>
          </div>

          <div className="modal-hint">
            <p>
              When the AURA Learn project is available, start it on the port
              above (or update <code>NEXT_PUBLIC_AURA_LEARN_URL</code> in{" "}
              <code>launcher/.env.local</code>), then set{" "}
              <code>available: true</code> in{" "}
              <code>launcher/config/products.ts</code>.
            </p>
          </div>
        </div>

        {/* Action */}
        <button
          className="modal-close-action-btn"
          onClick={onClose}
          type="button"
          aria-label="Dismiss dialog"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
