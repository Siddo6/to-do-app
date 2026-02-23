/* eslint-disable no-unused-vars */
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    (<DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center mb-2",
        caption_label: "text-base font-semibold text-slate-900 uppercase",
        nav: "space-x-1 flex items-center h-[min-content] ",
        nav_button: cn(
          "h-8 w-8 bg-transparent p-0 opacity-60 hover:opacity-100 hover:bg-slate-800 rounded-md transition-all"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: "flex mb-1",
        head_cell:
          "text-slate-400 rounded-md w-10 font-medium text-xs uppercase tracking-wider",
        row: "flex w-full mt-1",
        cell: cn(
          "relative p-0 text-center focus-within:relative focus-within:z-20",
          "h-10 w-10"
        ),
        day: cn(
          "h-10 w-10 p-0 font-normal rounded-md text-center",
          "hover:bg-sky-700 hover:text-white transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-0"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-purple-600 text-white hover:bg-purple-700 font-semibold shadow-md",
        day_today: "bg-slate-700 text-white font-semibold border border-slate-600",
        day_outside:
          "text-slate-600 opacity-40 hover:opacity-70",
        day_disabled: "text-slate-700 opacity-30 hover:bg-transparent cursor-not-allowed",
        day_range_middle:
          "aria-selected:bg-slate-800 aria-selected:text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-5 w-5 text-slate-900" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-5 w-5 text-slate-900" />,
      }}
      {...props} />)
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
