var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import HeaderLayout from '@/layouts/HeaderLayout';
import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '@/contexts/CurrentUserContext';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { firestore } from '@/utils/firebase';
import MaxWidthLayout from '@/layouts/MaxWidthLayout';
import CurrentUserProvider from '@/contexts/CurrentUserProvider';
import NavBarAuthed from '@/components/NavBarAuthed';
import NavBarUnauthed from '@/components/NavBarUnauthed';
export default function DashboardPage() {
    var _a = useContext(CurrentUserContext), currentUser = _a.currentUser, user = _a.user;
    var _b = useState([]), tags = _b[0], setTags = _b[1];
    useEffect(function () {
        if (currentUser === null || currentUser === undefined)
            return;
        return onSnapshot(query(collection(firestore, 'tags'), where('ownerId', '==', currentUser.uid)), function (snapshot) {
            var fetchedTags = [];
            snapshot.forEach(function (doc) {
                fetchedTags.push(__assign({ id: doc.id }, doc.data()));
            });
            setTags(fetchedTags);
        });
    }, [currentUser]);
    if (user === null || user === undefined)
        return null;
    return (<HeaderLayout header={<CurrentUserProvider unauthedChildren={<NavBarUnauthed />}>
          <NavBarAuthed />
        </CurrentUserProvider>}>
      <MaxWidthLayout>
        <div className="py-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Your Items</h2>
          <div className="py-4 sm:py-8">
            {tags.map(function (tag) { return (<div key={tag.id} className="mb-6 sm:mb-8"></div>); })}
          </div>
        </div>
      </MaxWidthLayout>
    </HeaderLayout>);
}
