import css from '../UserForm/userForm.module.scss';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';
import { defineDestination } from '../../helpers/defineDestination';

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  OverlayView,
} from '@react-google-maps/api';
import { useRef, useState } from 'react';

// const librariesToEnable = ['places'];

function Map({
  destinationValue,
  destinationValueClear,
  chosenShop,
  isLoaded,
}) {
  let { center, address, name } = defineDestination(chosenShop);
  // const { isLoaded } = useJsApiLoader({
  //   // googleMapsApiKey: process.env.google_maps_api_key,
  //   googleMapsApiKey: 'AIzaSyCu5fHLU8xwV8qrXFtXiNK9g3_tZ9UHXT8',
  //   libraries: librariesToEnable,
  // });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  /** @type React.MutableRefObject<HTMLInputElement> */
  // const originRef = useRef();
  // /** @type React.MutableRefObject<HTMLInputElement> */
  // const destiantionRef = useRef();

  if (!isLoaded) {
    return <p>Google map is loading ...</p>;
  }

  async function calculateRoute() {
    if (address === '' || destinationValue === '') {
      return;
    }

    try {
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin: address,
        destination: destinationValue,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    } catch (e) {
      e.message.includes('DIRECTIONS_ROUTE: NOT_FOUND')
        ? console.log('Incorrect destination address')
        : console.log(e.message);
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
    // originRef.current.value = '';
    destinationValueClear();
    // destiantionRef.current.value = '';
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      // alignItems="start"
      h="380px"
      w="100%"
      marginTop="20px"
    >
      <Box position="absolute" h="380px" w="100%">
        {/* Google Map Box */}
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
        >
          <OverlayView
            position={center}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={getPixelPositionOffset}
          >
            <div>
              <div className={css.marker}>
                {/* 📍 */}
                <div className={css.popupBubble}>
                  <p>{name}</p>
                  <p>{address}</p>{' '}
                </div>
              </div>
            </div>
          </OverlayView>
          <Marker position={center} />
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
        maxW="75%"
        // h="45px"

        // minW="container.md"
        zIndex="1"
        fontSize="14px"
      >
        <HStack spacing={1} justifyContent="space-evenly">
          <Button
            h="30px"
            colorScheme="rgb(136, 106, 106);"
            type="submit"
            onClick={calculateRoute}
            backgroundColor="rgb(136, 106, 106);"
          >
            Calculate Route
          </Button>
          {/* <HStack spacing={8} mt={4} justifyContent="space-between"> */}
          {destinationValue.length && (
            <div style={{ paddingRight: 20, paddingLeft: 20 }}>
              <Text>Distance: {distance} </Text>
              <Text>Duration: {duration} </Text>
            </div>
          )}
          {/* </HStack> */}
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
          {/* </ButtonGroup> */}
        </HStack>
      </Box>
    </Flex>
  );
}

export default Map;
