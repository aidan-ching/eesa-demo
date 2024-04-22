import ConversationCard from "@/app/kramer-industries/ConversationCard";

export default function ConversationCardGrid() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <ConversationCard
        name="Katherine J."
        profilePictureSrc="/pfp/pfp1.png"
        logoSrc="/logo/slack.png"
        body={
          "\"Hi Jane, hope you're doing well! Quick question - we've been exploring ways to streamline our document management process lately. Do you...\""
        }
      />

      <ConversationCard
        name="Matt G."
        profilePictureSrc="/pfp/pfp2.png"
        logoSrc="/logo/gmail.png"
        body={
            `\"Subject: Follow-Up on Quarterly Business Review
            
            Hi Jane, I wanted to touch base following our Quarterly Business Review meeting last month...\"`
        }
      />

      <ConversationCard
        name="Joe M."
        profilePictureSrc="/pfp/pfp3.png"
        logoSrc="/logo/zendesk.svg"
        body={
          `“Subject: Issue with Chatbot Response Times

          Hi Jane, we've been experiencing some delays in response times with the chatbot feature over...”`
        }
      />
    </div>
  );
}
