import { FC } from 'react';
import { Button, Grid, SvgIcon } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ClassSvg, EquipmentSvg, MonsterSvg, RaceSvg, SkillSvg } from '@assets/svg';
import { CompendiumPageStore } from '@features/compendium/pages/compendium-page/compendium-page.store';

const categories = [
  {
    label: 'Classes',
    icon: ClassSvg,
  },
  {
    label: 'Monsters',
    icon: MonsterSvg,
  },
  {
    label: 'Races',
    icon: RaceSvg,
  },
  {
    label: 'Skills',
    icon: SkillSvg,
  },
  {
    label: 'Equipment',
    icon: EquipmentSvg,
  },
];

export const Categories: FC = observer(() => {
  const store = CompendiumPageStore.useStore();

  const handleSelect = (category: number) => {
    store.selectCategory(category);
  };

  return (
    <Grid container justifyContent="center" columnGap={2}>
      {categories.map((category, index) => (
        <Button
          key={category.label}
          variant={store.category === index ? 'contained' : 'outlined'}
          color={store.category === index ? 'primary' : 'secondary'}
          startIcon={<SvgIcon component={category.icon} inheritViewBox />}
          onClick={() => handleSelect(index)}
        >
          {category.label}
        </Button>
      ))}
    </Grid>
  );
});
