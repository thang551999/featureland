import { Image } from 'antd';
import classNames from 'classnames';
import { ReactNode, useEffect, useRef, useState } from 'react';

type ScrollWhenClickProps = {
  children: ReactNode;
  scrollSize?: number;
  gap?: number;
  justifyContent?: string;
};

export default function ScrollWhenClick({
  children,
  scrollSize = 400,
  gap = 54,
  justifyContent = 'start',
}: ScrollWhenClickProps) {
  const [scrollLeft, setScrollLeft] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const buttonRightRef = useRef<HTMLDivElement>(null);

  const scrollToLeft = () => {
    if (scrollLeft > 0) {
      elementRef.current?.scrollTo({
        left: scrollLeft - scrollSize >= 0 ? scrollLeft - scrollSize : 0,
        behavior: 'smooth',
      });
      setScrollLeft((prev) => (prev - scrollSize >= 0 ? prev - scrollSize : 0));
    }
  };
  const scrollToRight = () => {
    elementRef.current?.scrollTo({
      left: Math.min(scrollLeft + scrollSize, elementRef.current?.scrollWidth),
      behavior: 'smooth',
    });
    setScrollLeft((prev) => {
      return elementRef.current
        ? Math.min(
            prev + scrollSize,
            elementRef.current?.scrollWidth - elementRef.current?.clientWidth
          )
        : 0;
    });
  };
  const handleResizeOrScroll = () => {
    if (elementRef.current && buttonRightRef.current)
      if (
        elementRef.current?.clientWidth + scrollLeft <
        elementRef.current?.scrollWidth
      ) {
        buttonRightRef.current.style.display = 'block';
      } else {
        buttonRightRef.current.style.display = 'none';
      }
  };

  useEffect(() => {
    handleResizeOrScroll();
  }, [elementRef.current && elementRef.current.clientHeight && scrollLeft]);
  useEffect(() => {
    window.addEventListener('resize', handleResizeOrScroll);
    return () => {
      window.removeEventListener('resize', handleResizeOrScroll);
    };
  }, []);

  return (
    <div className="scroll-container">
      <div
        onClick={scrollToLeft}
        className={classNames('scroll-button', 'left', {
          hidden: scrollLeft === 0,
        })}
      >
        <Image src="/svg/arrow-right.svg" preview={false} />
      </div>
      <div
        onClick={scrollToRight}
        className={classNames('scroll-button', 'right')}
        ref={buttonRightRef}
      >
        <Image src="/svg/arrow-right.svg" preview={false} />
      </div>
      <div
        ref={elementRef}
        className="scroll-children"
        style={{ gap: gap, justifyContent: justifyContent }}
      >
        {children}
      </div>
    </div>
  );
}
