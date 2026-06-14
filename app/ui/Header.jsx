"use client";
import Link from 'next/link';
import React from 'react';
// import css from '@/app/globals.css'

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#f8f9fa] py-3">
      <div className="mx-auto flex px-2 items-center justify-between">
        
        {/* LEFT SLOT: Logo */}
        <div className="flex w-1/3 justify-start">
          <Link href="#" className="inline-block transition-opacity hover:opacity-90">
            {/* Replace this placeholder with your own <img> tag when ready */}
           <img src="/images/logo.jpg" alt="Wren Logo" className="h-15 w-auto" />
          </Link>
        </div>

        {/* CENTER SLOT: Brand Title */}
        <div className="flex w-1/3 justify-center">
          <Link 
            href="#" 
            className="logo-text whitespace-nowrap text-center text-xl md:text-2xl text-gray-800 transition-colors hover:text-gray-600"
            style={{ fontFamily: "'Cedarville Cursive', cursive" }}
          >
            Wren by Ayesha
          </Link>
        </div>

        {/* RIGHT SLOT: Cart Button */}
        <div className="flex w-1/3 justify-end">
          <button
            className="border"
            type="button"
            style={{ padding: '0.375rem 0.375rem', borderColor: 'darkgrey' }}
            data-toggle="modal"
            data-target="#cartModal"
          >
            <div
              style={{
                width: '2.6em',
                height: '2.6em',
                backgroundImage: "url('https://www.wrenbyayesha.com/img/cart.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
              }}
              alt="Shopping Cart"
            >
              <span
                id="cartBadge"
                className="badge badge-danger"
                style={{ float: 'right', visibility: 'hidden', fontSize: '0.7em' }}
              >
                0
              </span>
            </div>
          </button>
        </div>

      </div>
    </nav>
  );
}