export const metadata = {
    title: "Image to Text converter",
    description: 'A Simple application for image to text converter',
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