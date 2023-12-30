export const metadata = {
    title: "Youtube video downloader",
    description: 'A Simple application for downloading youtube videos',
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