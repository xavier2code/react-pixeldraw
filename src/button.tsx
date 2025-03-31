export default function Button({ title }: { title?: string }) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {title ? title : 'Default Title'}
    </button>
  );
}
