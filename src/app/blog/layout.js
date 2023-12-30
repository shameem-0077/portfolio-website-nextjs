export const metadata = {
    title: "My Blog",
    description: 'A personal blog of shameem the fullstack developer',
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