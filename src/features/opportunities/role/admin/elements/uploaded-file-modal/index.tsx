import React from 'react';
import Image from 'next/image';

import { Modal } from 'components/custom';
import { Stack } from 'components/system';
import { Button } from 'components/ui';
import { TUploadedFileModalProps } from './types';

const UploadedFileModal = ({
  onClose,
  name,
  url,
  type,
}: TUploadedFileModalProps) => (
  <Modal
    title={name}
    size="small"
    onClose={onClose}
    actions={[
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={onClose}
      >
        Close
      </Button>,
    ]}
  >
    <Stack style={{ padding: '10px' }}>
      {type === 'application/pdf' ? (
        <embed src={url} width="100%" height="100%" type="application/pdf" />
      ) : (
        <Image
          src={url}
          alt={name}
          width={300}
          priority={true}
          height={300}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </Stack>
  </Modal>
);

export default UploadedFileModal;
