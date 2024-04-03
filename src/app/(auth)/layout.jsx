export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="h-screen w-full flex items-center justify-center absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
          <div className="flex items-center justify-center">{children}</div>
        </main>
      </body>
    </html>
  );
}
