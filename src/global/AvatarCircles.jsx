import React from "react";

const AvatarCircles = ({ avatarUrls = [], numPeople = 99, className = "" }) => {
  return (
    <div className={`z-10 flex -space-x-4 rtl:space-x-reverse ${className}`}>
      {avatarUrls.map((avatar, index) => (
        <img
          className="h-12 w-12 rounded-full object-cover border-2 border-white dark:border-gray-800"
          src={avatar.image}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {numPeople > 0 && (
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black">
          +99
        </div>
      )}
    </div>
  );
};

export default AvatarCircles;
