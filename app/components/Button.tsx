interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    onClick,
    disabled
}) => {
    return ( 
        <button 
            className={`w-auto rounded-full bg-black border-transparent px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
     );
}
 
export default Button;