import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TContactInfluencerModalProps } from 'features/influencers/role/admin/elements/contact-influencer-modal/types';
import { ContactInfluencerModalMain } from 'features/influencers/role/admin/elements/contact-influencer-modal/styles';
import { DTabs } from 'features/influencers/role/admin/elements/contact-influencer-modal/data';
import { Button, Input } from 'components/ui';

const ContactInfluencerModal = ({
  onClose,
  ...props
}: TContactInfluencerModalProps) => {
  const [state, setState] = useState({
    subject: '',
    recipient: [],
    message: '',
    type: 0,
  });

  return (
    <Modal
      size="small"
      title="Contact"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Send
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <ContactInfluencerModalMain style={{ height: '400px' }}>
        <Tabs
          tabs={DTabs}
          value={state.type}
          onValue={(type) => setState({ ...state, type })}
        />
        {!state.type && (
          <Input
            type="text"
            label="Subject"
            placeholder="Write Subject"
            value={state.subject}
            onValue={(subject) => setState({ ...state, subject })}
          />
        )}
        <Input
          multiline
          rows={state.type ? 7 : 5}
          type="text"
          label="Message"
          placeholder="Your Message"
          value={state.message}
          onValue={(message) => setState({ ...state, message })}
        />
      </ContactInfluencerModalMain>
    </Modal>
  );
};

export default ContactInfluencerModal;
