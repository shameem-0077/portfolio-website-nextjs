export const metadata = {
    title: "Posts-social-media",
    description: 'A Simple social media',
  }
  
  
export default function Layout({ children }) {
  return (
    <main>
      <div>
        {children}
      </div>
    </main>
  );
}