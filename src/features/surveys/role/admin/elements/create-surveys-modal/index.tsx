import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TCreateSurveysModalProps } from 'features/surveys/role/admin/elements/create-surveys-modal/types';
import { CreateSurveysModalMain } from 'features/surveys/role/admin/elements/create-surveys-modal/styles';
import { Button, Input, InputGroup } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';

const CreateSurveysModal = ({
  onClose,
  ...props
}: TCreateSurveysModalProps) => {
  const [state, setState] = useState({
    surveyName: '',
    type: null,
    client: '',
    language: null,
    budget: null,
    currency: '',
    surveyInfo: '',
    startDate: null,
    endDate: null,
    ambassador: null,

    numberOfParticipants: null,
    numberOfQuestions: null,
    diseaseArea: null,
    location: null,
    minAge: null,
    maxAge: null,
    gender: null,
    targetAudInfo: '',

    link: '',
    materials: null,
    survey: '',
  });

  const [tab, setTab] = useState(0);

  const handleFile = async () => {};

  return (
    <Modal
      size="medium"
      title="Create Survey"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Create
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack style={{ height: '650px' }}>
        <Tabs
          tabs={['Info', 'Target', 'Instructions']}
          value={tab}
          onValue={setTab}
        />
        {tab === 0 && (
          <CreateSurveysModalMain columns={2}>
            <Input
              type="text"
              label="Survey name"
              placeholder="Please Enter"
              value={state.surveyName}
              onValue={(surveyName) => setState({ ...state, surveyName })}
            />
            <Input
              type="select"
              label="Type"
              placeholder="Please Select"
              value={state.type}
              onValue={(type) => setState({ ...state, type })}
            />
            <Input
              type="select"
              label="Client"
              placeholder="Please Select"
              value={state.client}
              onValue={(client) => setState({ ...state, client })}
            />
            <InputGroup
              label="Date"
              inputRatio="1fr 1fr"
              elements={[
                {
                  type: 'date',
                  placeholder: 'Start Date',
                  value: state.startDate,
                  onValue: (startDate) => setState({ ...state, startDate }),
                },
                {
                  type: 'date',
                  placeholder: 'End Date',
                  value: state.endDate,
                  onValue: (endDate) => setState({ ...state, endDate }),
                },
              ]}
            />
            <Input
              type="select"
              label="Language"
              placeholder="Please Select"
              value={state.language}
              onValue={(language) => setState({ ...state, language })}
            />
            <InputGroup
              label="Budget"
              inputRatio="100px 1fr"
              elements={[
                {
                  value: state.currency,
                  onValue: (currency) => setState({ ...state, currency }),
                  type: 'select',
                  placeholder: 'CHF',
                  options: [
                    {
                      value: 'eur',
                      label: 'EUR',
                    },
                    {
                      value: 'usd',
                      label: 'USD',
                    },
                    {
                      value: 'chf',
                      label: 'CHF',
                    },
                  ],
                },
                {
                  value: state.budget,
                  onValue: (budget) => setState({ ...state, budget }),
                  type: 'number',
                },
              ]}
            />
            <Input
              type="select"
              label="Ambassador"
              placeholder="Please Select"
              value={state.ambassador}
              onValue={(ambassador) => setState({ ...state, ambassador })}
            />
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={5}
                type="text"
                label="Survey Info"
                placeholder="Please Enter"
                value={state.surveyInfo}
                onValue={(surveyInfo) => setState({ ...state, surveyInfo })}
              />
            </GridCell>
          </CreateSurveysModalMain>
        )}
        {tab === 1 && (
          <CreateSurveysModalMain columns={2}>
            <Input
              type="number"
              label="Number of Participants"
              placeholder="Please Enter"
              value={state.numberOfParticipants}
              onValue={(numberOfParticipants) =>
                setState({ ...state, numberOfParticipants })
              }
            />
            <Input
              type="number"
              label="Number of Questions"
              placeholder="Please Select"
              value={state.numberOfQuestions}
              onValue={(numberOfQuestions) =>
                setState({ ...state, numberOfQuestions })
              }
            />
            <Input
              type="select"
              label="Disease area"
              placeholder="Please Select"
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
            />
            <Input
              type="select"
              label="Location"
              placeholder="Please Select"
              value={state.location}
              onValue={(location) => setState({ ...state, location })}
            />
            <InputGroup
              label="Age Range"
              inputRatio="1fr 1fr"
              elements={[
                {
                  type: 'number',
                  placeholder: 'Min Age',
                  value: state.minAge,
                  onValue: (minAge) => setState({ ...state, minAge }),
                },
                {
                  type: 'number',
                  placeholder: 'Max Age',
                  value: state.maxAge,
                  onValue: (maxAge) => setState({ ...state, maxAge }),
                },
              ]}
            />
            <Input
              type="select"
              label="Gender"
              placeholder="Please Select"
              value={state.gender}
              onValue={(gender) => setState({ ...state, gender })}
            />
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={5}
                type="text"
                label="Target audience info"
                placeholder="Please Enter"
                value={state.targetAudInfo}
                onValue={(targetAudInfo) =>
                  setState({ ...state, targetAudInfo })
                }
              />
            </GridCell>
          </CreateSurveysModalMain>
        )}
        {tab === 2 && (
          <CreateSurveysModalMain columns={1}>
            <Input
              type="text"
              label="Link"
              placeholder="Please Enter"
              value={state.link}
              onValue={(link) => setState({ ...state, link })}
            />
            <GridCell columnSpan={1}>
              <InputLabel>Materials</InputLabel>
              <Button color="default" variant="contained" onClick={handleFile}>
                Upload
              </Button>
            </GridCell>
            <Input
              multiline
              rows={5}
              type="text"
              label="Survey"
              placeholder="Please Enter"
              value={state.survey}
              onValue={(survey) => setState({ ...state, survey })}
            />
          </CreateSurveysModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default CreateSurveysModal;
