import Button from "@/components/Button";

export default function TailwindTest() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Tailwind Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Card with Tailwind</h2>
          <p className="text-gray-700">This card is styled with Tailwind CSS classes.</p>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">Another Card</h2>
          <p className="text-blue-700">More Tailwind styling examples.</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </div>
    </div>
  );
} 