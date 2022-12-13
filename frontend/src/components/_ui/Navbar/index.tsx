export default function NavbarComponents({ ...props }) {
  return (
    <nav {...props} className="navbar">
        {props.children}Hello NavbarComponents
    </nav>
  );
}