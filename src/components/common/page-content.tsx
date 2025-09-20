"use client"

import { siteConfig } from '@/config/site.config';
import { usePathname } from 'next/navigation'
import React from 'react'
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const PageContent = () => {

    const pathname = usePathname();
    const pageContent = siteConfig.pageContent[pathname as keyof typeof siteConfig.pageContent];

    if (!pageContent) {
        return <div>Страница не найдена</div>
    }

    const clearHTML = DOMPurify.sanitize(pageContent.content)

    return (
        <div>{parse(clearHTML)}</div>
    )
}

export default PageContent