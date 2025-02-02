"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function OnlineStatusAvatar({ status = "green", className = "" }) {
  const statusColor = {
    green: "bg-green-400",
    red: "bg-red-400",
    yellow: "bg-yellow-400",
  }[status];

  return (
    <div className="relative">
      <Avatar className={cn("size-11", className)}>
        <AvatarImage src="/profile.avif" alt="avatar" />
      </Avatar>
      <span className={`-top-1 -right-[2px] absolute  w-3.5 h-3.5 ${statusColor} border-2 border-white dark:border-gray-800 rounded-full`}></span>
    </div>
  );
}
