"use client"
import React from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '#services', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Project', href: '#project', current: false },
  { name: 'Help', href: '/', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto bg-black text-white">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-white hover:opacity-100' : 'hover:text-white hover:opacity-100',
                  'px-2 py-1 text-lg font-normal opacity-75 block'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>

            <button
              onClick={() => {

                const element = document.querySelector('#contact2');
                if (element) {
                  const navHeight = document.querySelector('nav')?.getBoundingClientRect().height || 0;
                  const topBarHeight = document.querySelector('.top-bar')?.getBoundingClientRect().height || 0;
                  const totalOffset = navHeight + topBarHeight;

                  window.scrollTo({
                    top: element.getBoundingClientRect().top + window.pageYOffset - totalOffset,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-lightblue w-full hover:bg-blue hover:text-white text-blue font-medium my-2 py-2 px-4 rounded"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
