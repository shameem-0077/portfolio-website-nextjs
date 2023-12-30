export const metadata = {
    title: "Products",
    description: 'Products builded by shameem',
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