export const TabButton = ({ children, isActive, onClick }: { children: React.ReactNode, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
            isActive ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
    >
        {children}
    </button>
);