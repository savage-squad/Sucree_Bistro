export default function ToastComponents({ ...props }) {
  return (
    <div {...props} className="toast">
        {props.children}Hello ToastComponents
    </div>
  );
}