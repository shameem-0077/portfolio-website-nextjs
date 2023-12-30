

export const metadata = {
    title: "Chat room",
    description: 'A simple chat room build by shameem',
  }
  
  
export default function Layout({ children }) {
  return (
    <main className="text-white">
      <div>
        {children}
      </div>
    </main>
  );
}