import '../globals.css';

export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-[88px]">{children}</div>
    </>
  );
}
