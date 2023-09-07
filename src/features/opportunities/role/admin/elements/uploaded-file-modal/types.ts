import React from 'react';

export type TUploadedFileModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  name: string;
  url: any;
  type: string;
};
