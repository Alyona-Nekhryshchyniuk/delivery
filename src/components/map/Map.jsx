import css from '../UserForm/userForm.module.scss';
import { Box, Button, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';
import { defineDestination } from '../../helpers/defineDestination';
import { getCircleStyles } from '../../helpers/getCircleStyles';
import { Loader } from '../Shared/Loader';
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  OverlayView,
  Circle,
} from '@react-google-maps/api';
import { useState, useMemo, memo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Map = ({
  setDestinationValue,
  chosenShop,
  isLoaded,
  destinationValue,
  showDeliveryCost,
}) => {
  let { center, address, name } = useMemo(
    () => defineDestination(chosenShop),
    [chosenShop]
  );

  let { closeOpt, farOpt, farthestOpt } = useMemo(() => getCircleStyles(), []);

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const [showInitMarker, setShowInitMarker] = useState(true);


    if (!isLoaded) {
      return <Loader />;
    }

 async function calculateRoute() {
    if (address === '' || destinationValue === '') {
      return;
    }

    try {
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService();
      setShowInitMarker(false);
      const results = await directionsService.route({
        // origin: address,
        origin: center,
        destination: destinationValue,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    } catch (e) {
      if (e.name === 'InvalidValueError')
        toast('Destination address wasn`t found');
    }
  }

  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2),
  });

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    setShowInitMarker(true);
    setDestinationValue('');
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      h="380px"
      w="100%"
      marginTop="20px"
    >
      <Box position="absolute" h="100%" w="100%">
        <GoogleMap
          center={center}
          zoom={13}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
          onClick={ro => {
            console.dir(ro);
          }}
        >
          <OverlayView
            position={center}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={getPixelPositionOffset}
          >
            <div>
              <div className={css.marker}>
                <div className={css.popupBubble}>
                  <p className={css.popupBubbleName}>{name}</p>
                  <p>{address}</p>{' '}
                </div>
              </div>
            </div>
          </OverlayView>
          {showInitMarker && <Marker position={center} />}
          {showDeliveryCost && (
            <>
              {' '}
              <Circle center={center} radius={2200} options={closeOpt}></Circle>
              <Circle center={center} radius={5200} options={farOpt}></Circle>
              <Circle
                center={center}
                radius={7800}
                options={farthestOpt}
              ></Circle>
            </>
          )}

          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={2}
        borderRadius="lg"
        m={3}
        bgColor="white"
        shadow="base"
        w="fit-content"
        zIndex="1"
        fontSize="14px"
      >
        <HStack spacing={1} justifyContent="flex-start">
          <Button
            h="30px"
            colorScheme="rgb(136, 106, 106);"
            type="submit"
            onClick={calculateRoute}
            backgroundColor="rgb(136, 106, 106);"
          >
            Calculate Route
          </Button>
          {!showInitMarker && (
            <div style={{ paddingRight: 20, paddingLeft: 20 }}>
              <Text>Distance: {distance} </Text>
              <Text>Duration: {duration} </Text>
            </div>
          )}

          <IconButton
            h="30px"
            aria-label="center back"
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
          />
          <IconButton
            h="30px"
            aria-label="center back"
            icon={<FaTimes />}
            onClick={clearRoute}
          />
        </HStack>
      </Box>{' '}
      <ToastContainer />
    </Flex>
  );
};

export default memo(Map);
