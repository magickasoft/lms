import Color from 'color';

export const colors = {
  White: '#ffffff',
  Gray: '#333333',
  Black: '#000000',
  Green200: '#00C0A9',
  Green: '#73C371',
  Red: '#EA2B27',
};

export const formatterColor = {
  White: Color(colors.White).alpha(0.4).toString(),
};
