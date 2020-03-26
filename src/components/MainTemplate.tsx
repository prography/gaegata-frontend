import * as React from 'react';

interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const MainTemplate: React.FunctionComponent<Props> = ({
  children,
  footer,
  header,
}) => (
  <div className="posr">
    {header}
    <main>{children}</main>
    {footer}
  </div>
);

export default MainTemplate;
