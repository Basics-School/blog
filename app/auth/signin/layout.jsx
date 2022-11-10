export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <h1>This is A SignIn header</h1>
        {children}
      </body>
    </html>
  );
}