export const getCircleStyles = () => {
  const circleDefaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
  };

  const closeOpt = {
    ...circleDefaultOptions,
    fillOpacity: 0.09,
    zIndex: 3,
    strokeColor: '#27f231',
    fillColor: '#27f231',
  };
  const farOpt = {
    ...circleDefaultOptions,
    fillOpacity: 0.09,
    zIndex: 2,
    strokeColor: '#ebf700',
    fillColor: '#ebf700',
  };

  const farthestOpt = {
    ...circleDefaultOptions,
    fillOpacity: 0.09,
    zIndex: 1,
    strokeColor: '#f2250f',
    fillColor: '#f2250f',
  };

  return { closeOpt, farOpt, farthestOpt };
};
