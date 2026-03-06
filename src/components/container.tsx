import React from 'react';

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-screen max-w-screen-2xl p-4 sm:p-12">{children}</div>
  );
};

export default Container;
