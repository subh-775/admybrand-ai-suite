"use client";

import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg p-4 w-full max-w-sm mx-auto">
      <div className="h-48 bg-gray-300 dark:bg-gray-600 rounded-md mb-4" />
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
    </div>
  );
};

export default SkeletonCard;