export default function Header1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-2xl font-bold leading-8 sm:text-3xl sm:tracking-tight">
      {children}
    </h1>
  )
}