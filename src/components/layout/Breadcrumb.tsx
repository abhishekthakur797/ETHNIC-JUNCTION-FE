"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Head from 'next/head';

export function Breadcrumb() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter((p) => p !== '');

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const isLast = index === pathSegments.length - 1;
    // Format name (e.g. "custom-print" -> "Custom Print")
    let name = segment.replace(/-/g, ' ');
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return { name, href, isLast };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.threadhub.in/" // example prod URL
      },
      ...breadcrumbs.map((bc, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": bc.name,
        "item": `https://www.threadhub.in${bc.href}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="breadcrumb" className="py-4 border-b border-border-color bg-white px-4 sm:px-6 lg:px-8">
        <ol className="mx-auto flex max-w-7xl items-center space-x-2 text-sm text-muted-text">
          <li>
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
          </li>
          
          {breadcrumbs.map((bc) => (
            <li key={bc.href} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              {bc.isLast ? (
                <span className="font-medium text-ink" aria-current="page">
                  {bc.name}
                </span>
              ) : (
                <Link href={bc.href} className="hover:text-ink transition-colors">
                  {bc.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
