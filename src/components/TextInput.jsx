import { useEffect, useRef } from "react";

const TextInput = ({ placeholder, onChange }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;
