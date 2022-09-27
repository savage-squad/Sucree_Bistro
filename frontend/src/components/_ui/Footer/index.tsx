export default function FooterComponents({ ...props }) {
    return (
        <div {...props} className="footer">
        {props.children}<footer>
            <p>
                <span>Sucree_Bistro</span> © 2022 copy rights reserved
            </p>
        </footer>
        </div>
    );
}