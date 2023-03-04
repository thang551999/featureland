import { FC } from 'react';
import { Spin } from 'antd';
import { NextSeo } from 'next-seo';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

const GeneralLayout: FC<{
  children: any;
  title?: string;
  notShowFooter?: boolean;
  notShowHeader?: boolean;
  className?: string;
  metaDescription?: string;
  socialImageUrl?: string;
  name?: string;
  faviconImageUrl?: string;
}> = ({
  children,
  title = 'Future Land',
  notShowFooter,
  notShowHeader,
  className,
  metaDescription,
  socialImageUrl,
  faviconImageUrl,
}) => {
  const defaultPreviewImage = '';

  return (
    <Spin spinning={false}>
      <div className={className}>
        <NextSeo
          title={title}
          description={metaDescription}
          twitter={{
            cardType: 'summary_large_image',
          }}
          openGraph={{
            title: title,
            description: metaDescription,
            images: [
              {
                url: socialImageUrl ? socialImageUrl : defaultPreviewImage,
                alt: title,
                type: 'image/jpeg',
              },
            ],
          }}
          additionalLinkTags={[
            {
              rel: 'icon',
              type: 'image/png',
              href: (faviconImageUrl || undefined) as any,
            },
          ]}
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'initial-scale=1.0, width=device-width',
            },
            {
              name: 'keywords',
              content: '',
            },
            {
              name: 'author',
              content: '',
            },
          ]}
        />
        <div className='layout-app'>
          {!notShowHeader && <AppHeader />}
          {children}
          {!notShowFooter && <AppFooter />}
        </div>
      </div>
    </Spin>
  );
};

export default GeneralLayout;