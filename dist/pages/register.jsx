var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorNotification from '@/components/ErrorNotification';
import MaxWidthLayout from '@/layouts/MaxWidthLayout';
import auth from '@/utils/initializeFirebase';
import { useRouter } from 'next/router';
export default function RegisterPage() {
    var _this = this;
    var _a = useState(''), email = _a[0], setEmail = _a[1];
    var _b = useState(''), fullName = _b[0], setFullName = _b[1];
    var _c = useState(''), password = _c[0], setPassword = _c[1];
    var _d = useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = useState(null), submissionError = _e[0], setSubmissionError = _e[1];
    var router = useRouter();
    var onEmailChange = function (e) {
        return setEmail(e.currentTarget.value);
    };
    var onFullNameChange = function (e) {
        return setFullName(e.currentTarget.value);
    };
    var onPasswordChange = function (e) {
        return setPassword(e.currentTarget.value);
    };
    var onSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            setIsLoading(true);
            setSubmissionError(null);
            createUserWithEmailAndPassword(auth, email, password)
                .then(function () { return router.push('/dashboard'); })
                .catch(function (error) {
                setSubmissionError(error);
            })
                .finally(function () { return setIsLoading(false); });
            return [2 /*return*/];
        });
    }); };
    return (<div className="bg-slate-50 h-full">
      <MaxWidthLayout>
        <div className="pt-14 pb-10 pl-6">
          <div className="h-6 relative">
            <NextImage objectFit="contain" objectPosition="left" layout="fill" className="mx-auto" src="/logo.png" alt="Workflow"/>
          </div>
        </div>
        <div className="w-full bg-white rounded-md shadow-xl px-16 py-14">
          <h1 className="font-semibold text-2xl text-slate-700 mb-5">
            Create your Dashi account
          </h1>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-700">
                Email
              </label>
              <div className="mt-2.5">
                <input onChange={onEmailChange} value={email} id="email" name="email" type="email" autoComplete="email" required className="transition appearance-none block w-full px-3 py-3 border border-zinc-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 focus:border-indigo-300 text-gray-600"/>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-slate-700">
                Full name
              </label>
              <div className="mt-2.5">
                <input onChange={onFullNameChange} value={fullName} id="name" name="name" type="text" autoComplete="name" required className="transition appearance-none block w-full px-3 py-3 border border-zinc-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 focus:border-indigo-300 text-gray-600"/>
              </div>
            </div>

            <div>
              <div className="flex justify-between w-full">
                <label htmlFor="password" className="block text-sm text-slate-700">
                  Password
                </label>
              </div>

              <div className="mt-2.5">
                <input onChange={onPasswordChange} value={password} id="password" name="password" type="password" autoComplete="current-password" required className="transition appearance-none block w-full px-3 py-3 border border-zinc-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 focus:border-indigo-300 sm:text-sm"/>
                <div className="">
                  {submissionError && (<ErrorNotification error={submissionError}/>)}
                </div>
              </div>
            </div>

            <div>
              <button disabled={isLoading || !email || !password || !fullName} type="submit" className="h-12 transition w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 disabled:bg-indigo-300">
                {isLoading ? <LoadingSpinner /> : 'Create account'}
              </button>
              <div className="mt-6 ml-2 text-sm flex justify-center w-full text-slate-700">
                Have an account?
                <Link href="/login" className="transition ml-1 text-indigo-500 hover:text-indigo-600 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 focus:border-indigo-300 rounded">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </MaxWidthLayout>
    </div>);
}
