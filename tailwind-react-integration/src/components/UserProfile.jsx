function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl">
        <img 
            className="mx-auto rounded-full w-24 h-24 sm:w-24 md:h-36 sm:h-36 md:w-36 sm:h-24 hover:scale-110 transition-transform duration-300 ease-in-out"
            src="/lk.jpg" 
            alt="User" 
        />

      <h1 className="text-xl text-blue-900 my-4 sm:text-lg md:text-xl">John Doe</h1>
      <p className="text-gray-600 text-base sm:text-sm md:text-base hover:text-blue-500">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
