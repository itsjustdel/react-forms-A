export const fieldClass = (
  error: string | undefined,
  touched: boolean | undefined,
  value: string
) => {
  if (value === "" && touched === undefined) {
    return "";
  } else if (error !== undefined && touched !== undefined) {
    return "invalid-input";
  } else if (touched !== undefined && value !== "") {
    return "valid-input";
  }
  return "default";
};
