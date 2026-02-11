export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtle">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-subtle">{description}</p> : null}
    </div>
  );
}
