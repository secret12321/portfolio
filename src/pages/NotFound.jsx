export const NotFound = () => {
   return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
   
      <img
        src="/img/eli.gif" 
        alt="Page not found"
        className="w-80 h-auto mb-6"
      />

      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry! The page you’re looking for doesn’t exist.
      </p>

      <a
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition"
      >
        Go Home
      </a>
    </div>
  );
};
