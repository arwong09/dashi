import Link from 'next/link';
import { customConfig } from '@/tailwind.config';
export default function CTAButton(_a) {
    var children = _a.children, disabled = _a.disabled, href = _a.href, onClick = _a.onClick;
    var className = "".concat(customConfig.ctaBgColor, " rounded-xl text-white font-semibold sm:text-lg px-20 sm:px-32 py-4");
    return href === undefined ? (<button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>) : (<Link onClick={onClick} href={href} className={className}>
      {children}
    </Link>);
}
