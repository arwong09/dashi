import MaxWidthLayout from './MaxWidthLayout';
export default function HeaderLayout(_a) {
    var children = _a.children, header = _a.header;
    return (<>
      <MaxWidthLayout>
        <header className="text-neutral-800 flex justify-between items-center">
          {header}
        </header>
      </MaxWidthLayout>
      <main className="flex flex-col">{children}</main>
    </>);
}
