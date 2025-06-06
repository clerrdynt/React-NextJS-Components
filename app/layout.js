// app/layout.js
import NavBar from '@/components/NavBar';
import './globals.css'; // Optional: add global CSS here

export const metadata = {
  title: 'My App',
  description: 'Welcome to the application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main style={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}

const styles = {
  main: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'var(--background)',  // ✅ fixed: removed light color
    color: 'var(--foreground)',            // ✅ optional: ensure text is visible
    minHeight: '100vh',
  },
};
