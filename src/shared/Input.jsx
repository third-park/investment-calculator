import React from "react";

/**
 * 공통 input 컴포넌트
 *
 * 구조:
```html
 * <p>
 *   <label></label>
 *   <input />
 * </p>
 * ```
*/
function Input({ ref, label, textarea, ...props }) {
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor={label} className="uppercase text-sm font-bold text-stone-500">
        {label}
      </label>
      {textarea ? <textarea ref={ref} {...props} className={classes} /> : <input ref={ref} {...props} className={classes} />}
    </p>
  );
}

export default Input;
