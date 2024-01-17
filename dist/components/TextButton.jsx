import { customConfig } from '@/tailwind.config';
import Link from 'next/link';
export default function TextButton(_a) {
    var children = _a.children, href = _a.href;
    return (<Link href={href} className={customConfig.textButtonColor}>
      {children}
    </Link>);
}
