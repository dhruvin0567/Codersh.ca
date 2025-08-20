import React from "react";
function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || getChildId(children);
  return (
    <div className="aximo-account-field">
      {label && (
        <label htmlFor={id} className="mb-1">
          {label}
        </label>
      )}
      {children}
      {error && <div className="text-danger">{error.message}</div>}
    </div>
  );
}
function getChildId(children) {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
}
export default Field;
