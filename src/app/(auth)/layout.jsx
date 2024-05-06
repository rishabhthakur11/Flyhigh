export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="h-screen w-full flex items-center justify-center absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex items-center justify-center">{children}</div>
        </main>
      </body>
    </html>
  );
}
