import React, { useState } from 'react';
import { TQuestionProps } from 'features/create-survey/elements/question/types';
import {
  QuestionMain,
  QuestionHeader,
  QuestionHeaderActions,
  QuestionCounter,
  QuestionBody,
  QuestionOptions,
  QuestionHighlight,
  QuestionFooter,
} from 'features/create-survey/elements/question/styles';
import { Checkbox, Input, RadioButton, Switch } from 'components/ui';
import { CopyIcon, DeleteIcon } from 'components/svg';
import {
  TSurveyQuestionMultichoiceType,
  TSurveyQuestionMultiselectType,
} from 'features/create-survey/types';
import { Stack } from 'components/system';
import { v4 } from 'uuid';

const Question = ({
  question,
  questionId,
  updateQuestion,
  remove,
  changeType,
  copy,
  ...props
}: TQuestionProps) => {
  const changeQuestion = (v: string) => {
    updateQuestion({ question: v });
  };

  const changeCredit = (v: string) => {
    updateQuestion({ credit: v });
  };

  const changeOptional = (v: boolean) => {
    updateQuestion({ optional: v });
  };

  const updateAnswer = (id: number) => (v: string) => {
    if (['multichoice', 'multiselect'].includes(question.type)) {
      const questionWithAnswers = question as
        | TSurveyQuestionMultichoiceType
        | TSurveyQuestionMultiselectType;
      updateQuestion({
        answers: questionWithAnswers.answers.map((x, y) =>
          y === id ? { ...x, value: v } : x
        ),
      });
    }
  };

  const addOption = () => {
    const questionWithAnswers = question as
      | TSurveyQuestionMultichoiceType
      | TSurveyQuestionMultiselectType;

    const newAnswer = {
      id: v4(),
      value: '',
    };
    updateQuestion({ answers: [...questionWithAnswers.answers, newAnswer] });
  };

  const toggleHasOther = () => {
    const questionWithAnswers = question as
      | TSurveyQuestionMultichoiceType
      | TSurveyQuestionMultiselectType;
    updateQuestion({ hasOther: !questionWithAnswers.hasOther });
  };

  return (
    <QuestionMain {...props}>
      <QuestionHeader>
        <QuestionCounter>
          <span>Question {questionId}</span>
          <Input
            type="text"
            placeholder="Enter question"
            value={question.question}
            onValue={changeQuestion}
          />
        </QuestionCounter>
        <QuestionHeaderActions>
          <Input
            type="number"
            placeholder="Question credit"
            value={question.credit}
            onValue={changeCredit}
          />
          <Input
            type="select"
            placeholder="Short Answer"
            value={question.type}
            onValue={changeType}
            options={[
              {
                value: 'short',
                label: 'Short Answer',
              },
              {
                value: 'paragraph',
                label: 'Paragraph',
              },
              {
                value: 'multichoice',
                label: 'Multichoice',
              },
              {
                value: 'multiselect',
                label: 'Multiselect',
              },
            ]}
          />
        </QuestionHeaderActions>
      </QuestionHeader>
      <QuestionBody>
        {question.type === 'short' && (
          <Input
            type="text"
            placeholder="Short text answer"
            value=""
            onValue={() => {}}
          />
        )}
        {question.type === 'paragraph' && (
          <Input
            type="text"
            placeholder="Paragraph answer"
            multiline
            rows={3}
            value=""
            onValue={() => {}}
          />
        )}
        {question.type === 'multichoice' &&
          question.answers.map((el, index) => (
            <Stack direction="horizontal">
              <RadioButton label="" value={false} />
              <Input
                type="text"
                placeholder={`Question answer ${index + 1}`}
                value={el.value}
                onValue={updateAnswer(index)}
              />
            </Stack>
          ))}
        {question.type === 'multiselect' &&
          question.answers.map((el, index) => (
            <Stack direction="horizontal">
              <Checkbox value={false} />
              <Input
                type="text"
                placeholder={`Question answer ${index + 1}`}
                value={el.value}
                onValue={updateAnswer(index)}
              />
            </Stack>
          ))}
        {(question as any).hasOther && (
          <Stack direction="horizontal">
            {question.type === 'multiselect' ? (
              <Checkbox value={false} />
            ) : (
              <RadioButton label="" />
            )}
            <Input
              type="text"
              placeholder="Other answer"
              value=""
              onValue={() => {}}
            />
          </Stack>
        )}
        {['multichoice', 'multiselect'].includes(question.type) && (
          <QuestionOptions>
            <QuestionHighlight onClick={addOption}>
              Add new answer
            </QuestionHighlight>
            or
            <QuestionHighlight onClick={toggleHasOther}>
              add other.
            </QuestionHighlight>
          </QuestionOptions>
        )}
      </QuestionBody>
      <QuestionFooter>
        <CopyIcon
          onClick={() => {
            copy(question.id);
          }}
        />
        <DeleteIcon
          onClick={() => {
            remove(question.id);
          }}
        />
        <Switch
          value={question.optional}
          onValue={changeOptional}
          label="Optional"
        />
      </QuestionFooter>
    </QuestionMain>
  );
};

export default Question;
