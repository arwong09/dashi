export default function LoadingSpinner() {
    return (<div className="flex items-center justify-center">
      <div style={{ borderTopColor: 'transparent' }} className="w-5 h-5 border-2 border-white border-solid rounded-full animate-spin"/>
    </div>);
}
