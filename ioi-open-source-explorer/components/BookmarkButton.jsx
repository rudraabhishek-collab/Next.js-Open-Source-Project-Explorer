export default function BookmarkButton({ isBookmarked }) {
  return (
    <button className="text-gray-400 hover:text-yellow-500">
      {isBookmarked ? '★' : '☆'}
    </button>
  );
}