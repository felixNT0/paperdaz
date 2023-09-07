import { useEffect } from "react";

function ChatWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    );
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <chat-widget
            style="--chat-widget-primary-color: #77C360; --chat-widget-active-color: #77C360; --chat-widget-bubble-color: #77C360"
            location-id="2cStymPlpV07lfDt43ne"
            prompt-avatar="https://widgets.leadconnectorhq.com/chat-widget/assets/defaultAvatar.png"
            agency-name="Iambui LLC"
            agency-website=""
          ></chat-widget>
        `,
      }}
    />
  );
}

export default ChatWidget;
