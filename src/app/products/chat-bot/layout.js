export const metadata = {
    title: "Chatbot",
    description: 'A simple chatbot build by shameem',
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