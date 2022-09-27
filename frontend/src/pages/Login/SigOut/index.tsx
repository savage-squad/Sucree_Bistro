export default function SignOutPage({ ...props }) {
  return (
    <div {...props} className="sign-in">
        {props.children}
    </div>
  );
}