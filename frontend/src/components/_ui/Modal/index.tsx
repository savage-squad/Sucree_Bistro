export function ModalComponents({ ...props }) {
    return (
        <div {...props} className="modal">
            {props.children}Hello ModalComponents
        </div>
    );
}