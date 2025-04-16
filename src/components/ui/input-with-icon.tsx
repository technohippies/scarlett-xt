import * as React from "react"
import { cn } from "../../../lib/utils"
import { Input } from "./input" // Import the base Input component

export interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode // Allow passing an icon component
  iconPosition?: "left" | "right"
}

const InputWithIcon = React.forwardRef<
  HTMLInputElement,
  InputWithIconProps
>(({ className, type, icon, iconPosition = "left", ...props }, ref) => {
  // No need for paddingClass variable here

  return (
    <div className={cn("relative flex items-center w-full", className)}>
      {icon && (
        <div
          className={cn(
            "absolute inset-y-0 flex items-center pointer-events-none",
            iconPosition === "left" ? "left-0 pl-3" : "right-0 pr-3"
          )}
        >
          {React.cloneElement(icon as React.ReactElement, {
            className: cn("h-5 w-5 text-muted-foreground", (icon as React.ReactElement).props.className)
          })}
        </div>
      )}
      {/* Apply necessary padding directly here */}
      <Input
        type={type}
        className={cn(
          icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : '', // Add padding based on icon presence/position
          // Do NOT pass the main className here, it's on the wrapper
        )}
        ref={ref}
        {...props} // Pass other props like placeholder, disabled, etc.
      />
    </div>
  )
})
InputWithIcon.displayName = "InputWithIcon"

export { InputWithIcon }
