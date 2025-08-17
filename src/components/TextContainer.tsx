export default function TextContainer({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="h-full w-full flex flex-col gap-y-5 text-[var(--color-white)]">
      <div className="text-3xl font-bold tracking-wide text-shadow-primary">
        {title}
      </div>
      <div className="flex text-lg flex-col gap-y-3">
        {paragraphs.map((paragraph, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          ></div>
        ))}
      </div>
    </div>
  );
}
