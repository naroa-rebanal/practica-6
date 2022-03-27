import classNames from 'classnames';
import { forwardRef } from 'react';



const FormField = forwardRef(({ className, label, ...props }, ref) => {
  return (
    <div className={classNames('formField', className)}>
      <label className="formField-label">
        <span>{label}</span>
        <input
          ref={ref}
          className="formField-input"
          autoComplete="off"
          {...props}
        />
      </label>
    </div>
  );
});

export default FormField;
