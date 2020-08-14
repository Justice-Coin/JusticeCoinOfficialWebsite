import React from "react";

// a basic form
const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });

  return (
    <div className={className} style={style}>
      {status === "sending" && <div className="text-primary">sending...</div>}
      {status === "error" && (
        <div
          className="text-danger"
          style={{fontSize: "15px"}}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="text-success"
          style={{fontSize: "15px"}}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        ref={node => (input = node)}
        type="email"
        placeholder="Your email"
        className="form-control form-control-lg"
      />
      <button className="btn btn-large btn-outline-success btn-lg my-3" onClick={submit}><strong>Sign Up</strong></button>
    </div>
  );
};

export default SimpleForm;