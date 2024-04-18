import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import um6pLogoImage from '../Navbar/UM6P_logo.png';
import ministereEducationImage from '../Navbar/ministere-education.png';
import './Content.css'
// import { SitemarkIcon } from './CustomIcons';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Adaptable Predictions',
    description:
      'Our system dynamically adapts to student data, providing accurate predictions and explanations to help you intervene effectively.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Long-Term Forecasting',
    description:
      ' Gain insights into student outcomes 1 or 2 years ahead, leveraging machine learning or large language models trained on comprehensive student histories.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Great user experience',
    description:
      'Offer an intuitive navigation and clear visualizations. Interact effortlessly with interactive features and customizable views, ensuring a responsive and accessible experience.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Intelligent Insights',
    description:
      'Stay informed with innovative features that deliver deep insights into student behavior and performance, setting new standards in student retention.',
  },
];

export default function Content() {
  return (
    <Stack
      flexDirection="column"
      alignSelf="center"
      gap={4}
      sx={{
        maxWidth: 450,
      }}
    >
      {/* <SitemarkIcon
        sx={{
          fontSize: 150,
          height: 'fit-content',
          display: { xs: 'none', md: 'flex' },
        }}
      /> */}
      <div className="logoContainer">
                    <img src={um6pLogoImage} alt="UM6P Logo" className="logoImage" />
                    <img src={ministereEducationImage} alt="Ministere Education" className="logoImage" />
                </div>
      {items.map((item) => (
        <Stack direction="row" gap={2}>
          {item.icon}
          <div>
            <Typography fontWeight="medium" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
