export default function StackFilter({ stacks, onStackChange }) {
  return (
    <div>
      <span className="text-sm text-gray-600 mr-2">Stack:</span>
      <button className="mx-1 px-2 py-1 text-sm rounded hover:bg-gray-200">All</button>
    </div>
  );
}