export default function JobsListSkeleton() {
  // Create an array of 6 placeholders
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6).fill(0).map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="p-1 h-48 bg-gray-100">
            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          </div>
          <div className="p-6">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-4 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3 mt-6 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
} 