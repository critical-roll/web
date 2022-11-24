import { Step, StepButton, Stepper } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { NewCharacterPageStore } from '../../new-character-page.store';

const steps = ['Overview', 'Race', 'Class & Level', 'Abilities', 'Equipment'];

export const Navigation: FC = observer(() => {
  const store = NewCharacterPageStore.useStore();

  const handleStepClick = (step: number) => () => {
    store.setActiveStep(step);
  };

  return (
    <Stepper nonLinear activeStep={store.step}>
      {steps.map((label, index) => (
        <Step key={label} onClick={handleStepClick(index)}>
          <StepButton color="inherit">{label}</StepButton>
        </Step>
      ))}
    </Stepper>
  );
});
