import MetricCard from "@/app/(overview)/kramer-industries/MetricCard";

export default function CardGrid() {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-10">
      <MetricCard
        heading="97%"
        subheader="Product Usage"
        body="Strong engagement and adoption from Kramer Industries this has increased significantly in the past week."
      />
      <MetricCard
        heading="94%"
        subheader="Sentiment Analysis"
        body="Customer sentiment is consistently positive across meetings, emails, and Slack messages, indicating high satisfaction and perceived value from the product."
      />
      <MetricCard
        heading="4"
        subheader="Support Tickets"
        body="Received and resolved four support tickets this quarter. This is at the expected performance level. This should be reduced next quarter."
      />
      <MetricCard
        heading="2"
        subheader="Bugs"
        body="Received and resolved two technical bugs this quarter. Not an immediate concern but should be stopped from increasing."
      />
    </div>
  );
}
