import React, { useState } from 'react';

import {
  HelpPageMain,
  HelpPageContact,
  HelpPageContactContainer,
  HelpPageIconWithTextContainer,
} from 'features/help/styles';
import { Button, Input } from 'components/ui';
import { IconWithText, Tabs } from 'components/custom';
import { Stack } from 'components/system';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  EnvelopeIcon,
  LocationIcon,
  PhoneCallIcon,
} from 'components/svg';
import { HelpCollapse } from 'features/help/elements';
import UsersAPI from 'api/users';
import { useSnackbar } from 'hooks';

const HelpPage = () => {
  const [tab, setTab] = useState(0);

  const [filter, setFilter] = useState<any>({
    topic: null,
    subject: '',
    message: '',
  });

  const { push } = useSnackbar();

  const contact = async () => {
    try {
      await UsersAPI.contactAdmin({
        topic: filter.topic ? filter.topic.label : '',
        subject: filter.subject,
        message: filter.message,
      });
      push('Message sent successfully', { variant: 'success' });
      setFilter({
        topic: null,
        subject: '',
        message: '',
      });
    } catch {
      push('Message send failed.', { variant: 'error' });
    }
  };

  return (
    <HelpPageMain>
      <Stack>
        <Tabs
          value={tab}
          onValue={setTab}
          tabs={['Frequently Asked Questions', 'Contact us']}
        />
        {tab === 0 ? (
          <Stack>
            <HelpCollapse
              title="How do i get paid?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              ]}
            />
            <HelpCollapse
              title="How do i get paid?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              ]}
            />
            <HelpCollapse
              title="How do i get paid?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              ]}
            />
            <HelpCollapse
              title="How do i get paid?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              ]}
            />
            <HelpCollapse
              title="How do i get paid?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              ]}
            />
          </Stack>
        ) : (
          <HelpPageContact>
            <HelpPageContactContainer>
              <Stack>
                <h2>Write to us</h2>
                <Input
                  type="select"
                  label="Please Select"
                  placeholder="Select Topic"
                  value=""
                  onValue={() => {}}
                  // value={filter.topic}
                  // onValue={(topic) => setFilter({ ...filter, topic })}
                  options={[]}
                />
                <Input
                  type="text"
                  label="Please Enter"
                  placeholder="Subject"
                  value=""
                  onValue={() => {}}
                  // value={filter.subject}
                  // onValue={(subject) => setFilter({ ...filter, subject })}
                />
                <Input
                  type="text"
                  label="Message"
                  placeholder="Please Enter"
                  value={filter.message}
                  onValue={(message) => setFilter({ ...filter, message })}
                  multiline
                  rows={5}
                />
                <Button color="primary" variant="contained" onClick={contact}>
                  Send
                </Button>
              </Stack>
            </HelpPageContactContainer>
            <HelpPageContactContainer>
              <HelpPageIconWithTextContainer>
                <h2>Get in touch</h2>
                <Stack>
                  <IconWithText
                    // link="https://calendly.com/patientsinfluence-client/30min"
                    icon={<PhoneCallIcon />}
                    title="Talk with our founder"
                    text={['Schedule a call!']}
                  />
                  <IconWithText
                    // link="mailto:client@patientsinfluence.com"
                    icon={<EnvelopeIcon />}
                    title="Write to our founder"
                    text={['Send an email!']}
                  />
                  <IconWithText
                    // link="https://goo.gl/maps/mbiouV7WZoXBwqJDA"
                    icon={<LocationIcon />}
                    title="Visit Us"
                    text={['Riehenring 65, 4058 Basel Switzerland']}
                  />
                </Stack>
              </HelpPageIconWithTextContainer>
            </HelpPageContactContainer>
          </HelpPageContact>
        )}
      </Stack>
    </HelpPageMain>
  );
};

export default HelpPage;
