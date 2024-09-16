export default function TopSlider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex overflow-x-auto mb-4">
      {children}
    </div>
  );
}