export const metadata = {
    title: "Image to Text converter",
    description: 'A Simple application for image to text converter',
  }
  
  
  export default function Layout({ children }) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
  }