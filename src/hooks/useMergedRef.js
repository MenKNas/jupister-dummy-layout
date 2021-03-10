export function useMergedRef(...refs) {
  return (element) =>
    refs.forEach((ref) => {
      if (typeof ref === "function") ref(element);
      else if (ref && typeof ref === "object") ref.current = element;
    });
}
