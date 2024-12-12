export const AriaLive = (props: { text: string }) => {
  return (
    <p aria-live="polite" className="sr-only" role="status">
      {props.text}
    </p>
  );
};
